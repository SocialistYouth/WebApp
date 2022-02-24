class Player extends AcGameObject {
    constructor(playground, x, y, radius, color, speed, character, username, photo) {

        console.log(character,username,photo);

        super();
        this.playground = playground;
        this.ctx = this.playground.game_map.ctx;
        this.x = x;
        this.y = y;
        this.vx = 0;
        this.vy = 0;
        this.damage_x = 0;
        this.damage_y = 0;
        this.damage_speed = 0;
        this.move_length = 0;
        this.radius = radius;
        this.color = color;
        this.speed = speed;
        this.character = character;
        this.username = username;
        this.photo = photo;

        this.spent_time = 0;
        this.eps = 0.01;
        this.friction = 0.9;

        this.fireballs = [];
        this.cur_skill = null;

        if (this.character !== "robot") {
            this.img = new Image();
            this.img.src = this.photo;
        }
        if (this.character === "me") {
            this.fireball_coldtime = 3; //冷却时间3s
            this.fireball_img = new Image();
            this.fireball_img.src = "https://exp-picture.cdn.bcebos.com/a1780d1fceecd3d9a02a317767995943050108f7.jpg?x-bce-process=image%2Fformat%2Cf_jpg%2Fquality%2Cq_80";

            this.blink_coldtime = 5;  // 单位：秒
            this.blink_img = new Image();
            this.blink_img.src = "https://cdn.acwing.com/media/article/image/2021/12/02/1_daccabdc53-blink.png";
        }

    }

    start() {
        this.playground.player_count ++;
        this.playground.notice_board.write("已就绪："+this.playground.player_count+"人");
        if (this.playground.player_count >= 2) {
            this.playground.state = "fighting";
            this.playground.notice_board.write("Fighting");
        }

        if (this.character === "me") {
            this.add_listening_events();
        } else if (this.character === "robot") {
            let tx = Math.random() * this.playground.width/this.playground.scale;
            let ty = Math.random() * this.playground.height/this.playground.scale;
            this.move_to(tx,ty);
        }
    }

    add_listening_events() {
        let outer = this;
        this.playground.game_map.$canvas.on("contextmenu",function() {
            return false;
        });
        this.playground.game_map.$canvas.mousedown(function(e) {  //canvas鼠标输入事件
            if (outer.playground.state !== "fighting")
                return true;

            const rect = outer.ctx.canvas.getBoundingClientRect();
            if (e.which === 3) {
                let tx = (e.clientX - rect.left)/outer.playground.scale;
                let ty = (e.clientY - rect.top)/outer.playground.scale;
                outer.move_to(tx, ty);

                if (outer.playground.mode === "multi mode") {
                    outer.playground.mps.send_move_to(tx, ty);
                }

            } else if(e.which === 1) {
                let tx = (e.clientX - rect.left)/outer.playground.scale;
                let ty = (e.clientY - rect.top)/outer.playground.scale;

                if (outer.cur_skill === "fireball") {
                    if (outer.fireball_coldtime > outer.eps)
                        return false;

                    let fireball = outer.shoot_fireball(tx, ty);

                    if (outer.playground.mode === "multi mode") {
                        outer.playground.mps.send_shoot_fireball(tx,ty,fireball.uuid);
                    }
                }else if (outer.cur_skill === "blink") {
                    if (outer.blink_coldtime > outer.eps)
                        return false;

                    outer.blink(tx, ty);

                    if (outer.playground.mode === "multi mode") {
                        outer.playground.mps.send_blink(tx, ty);
                    }

                }
                outer.cur_skill = null;
            }
        });
        this.playground.game_map.$canvas.keydown(function(e) {  //canvas键盘输入事件
            // console.log(e.which); ->Enter回车键是13；Space空格键是32；Esc退出键是27

            if (e.which === 13) { // 按Enter键
                if (outer.playground.mode === "multi mode") { //打开聊天框
                    outer.playground.chat_field.show_input();
                    return false;
                }
            } else if (e.which === 27) { //按Esc键
                if(outer.playground.mode === "multi mode") { //关闭聊天框
                    outer.playground.chat_field.hide_input();
                }
            }

            if (outer.playground.state !== "fighting")
                return true;

            if(e.which === 81) { //q键
                if (outer.fireball_coldtime > outer.eps)
                    return true;

                outer.cur_skill = "fireball";
                return false;
            } else if (e.which === 70) {  // f
                if (outer.blink_coldtime > outer.eps)
                    return true;

                outer.cur_skill = "blink";
                return false;
            }

        });
    }

    shoot_fireball(tx,ty) {
        let x = this.x, y = this.y;
        let radius = this.playground.height * 0.01 / this.playground.scale;
        let angle = Math.atan2(ty - this.y,tx - this.x);
        let vx = Math.cos(angle), vy = Math.sin(angle);
        let color = "orange";
        let speed = this.playground.height*0.5/this.playground.scale;
        let move_length = this.playground.height*1.5/this.playground.scale;
        let fireball = new FireBall(this.playground,this,x,y,radius,vx,vy,color,speed,move_length, this.playground.height * 0.01 / this.playground.scale);
        this.fireballs.push(fireball);
        this.fireball_coldtime = 3;
        return fireball;
    }

    destroy_fireball(uuid) {
        for (let i = 0; i < this.fireballs.length; i++) {
            let fireball = this.fireballs[i];
            if(fireball.uuid === uuid) {
                fireball.destroy();
                break;
            }
        }
    }
    
    blink(tx, ty) {
        let d = this.get_dist(this.x, this.y, tx, ty);
        d = Math.min(d, 0.8);
        let angle = Math.atan2(ty - this.y, tx - this.x);
        this.x += d * Math.cos(angle);
        this.y += d * Math.sin(angle);

        this.blink_coldtime = 5;
        this.move_length = 0;  // 闪现完停下来

    }

    get_dist(x1,y1,x2,y2) {
        let dx = x1-x2;
        let dy = y1-y2;
        return Math.sqrt(dx*dx + dy*dy);
    }

    move_to(tx,ty) {
        this.move_length = this.get_dist(this.x,this.y,tx,ty);
        let angle = Math.atan2(ty-this.y,tx-this.x);
        this.vx = Math.cos(angle);
        this.vy = Math.sin(angle);
    }

    update() {
        this.spent_time += this.timedelta/1000;

        this.update_win();

        if (this.character === "me" && this.playground.state === "fighting") {
            this.update_coldtime();
        }

        this.update_move();

        this.render();
    }

    update_win() { //判断自己是否获胜
        if(this.playground.state === "fighting" && this.character === "me" && this.playground.players.length === 1) {
            this.playground.state = "over";
            this.playground.score_board.win();
        }
    }

    update_coldtime() { //更新技能冷却时间
        this.fireball_coldtime -= this.timedelta / 1000;
        this.fireball_coldtime = Math.max(this.fireball_coldtime, 0);

        this.blink_coldtime -= this.timedelta / 1000;
        this.blink_coldtime = Math.max(this.blink_coldtime, 0);

    }
    update_move() { //更新玩家移动
        if(this.spent_time > 4 && Math.random() < 1/180 ) {
            if(this.character === "robot") {
                let player = this.playground.players[0];
                this.shoot_fireball(player.x,player.y);
            }
        }
        if(this.damage_speed > this.eps) {
            this.vx = this.vy = 0;
            this.move_length = 0;
            this.x += this.damage_x * this.damage_speed * this.timedelta /1000;
            this.y += this.damage_y * this.damage_speed * this.timedelta /1000;
            this.damage_speed *= this.friction;
        }else {
            if(this.move_length < this.eps) {
                this.move_length = 0;
                this.vx = this.vy = 0;
                if (this.character === "robot") {
                    let tx = Math.random() * this.playground.width / this.playground.scale;
                    let ty = Math.random() * this.playground.height / this.playground.scale;
                    this.move_to(tx,ty);
                }
            } else {
                let moved = Math.min(this.move_length,this.speed * this.timedelta /1000);
                this.x += this.vx*moved;
                this.y += this.vy*moved;
                this.move_length -= moved;
            }
        }
    }

    render() {
        if (this.character !== "robot") {
            this.ctx.save();
            this.ctx.beginPath();
            this.ctx.arc(this.x*this.playground.scale, this.y*this.playground.scale, this.radius*this.playground.scale, 0, Math.PI * 2, false);
            this.ctx.stroke();
            this.ctx.clip();
            this.ctx.drawImage(this.img, (this.x - this.radius)*this.playground.scale, (this.y - this.radius)*this.playground.scale, (this.radius * 2)*this.playground.scale, (this.radius * 2)*this.playground.scale);
            this.ctx.restore();
        } else {
            this.ctx.beginPath();
            this.ctx.arc(this.x*this.playground.scale,this.y*this.playground.scale,this.radius*this.playground.scale,0,Math.PI * 2,false);
            this.ctx.fillStyle = this.color;
            this.ctx.fill();
        }
        if (this.character === "me" && this.playground.state === "fighting") {
            this.render_skill_coldtime();
        }

    }

    is_attacked(angle,damage) {
        for(let i = 0; i<10 + Math.random()*5;i++) {
            let x = this.x;
            let y = this.y;
            let radius = this.radius * Math.random()* 0.1;
            let angle = Math.random()*Math.PI*2;
            let vx = Math.cos(angle);
            let vy = Math.sin(angle);
            let color = this.color;
            let speed = this.speed*10;
            let move_length = this.radius*Math.random()*10;
            new Particle(this.playground,x,y,radius,vx,vy,color,speed,move_length);
        }
        this.radius -= damage;
        if (this.radius < this.eps) {
            this.destroy();
            return false;
        }
        this.damage_x = Math.cos(angle);
        this.damage_y = Math.sin(angle);
        this.damage_speed = damage * 100;
    }
    receive_attack(x, y, angle, damage, ball_uuid, attacker) {
        attacker.destroy_fireball(ball_uuid);
        this.x = x;
        this.y = y;
        this.is_attacked(angle, damage);
    }


    on_destroy() {
        if (this.character === "me") {
            if (this.playground.state === "fighting") {
                this.playground.state = "over";
                this.playground.score_board.lose();
            }
        }
        for (let i = 0; i < this.playground.players.length; i ++ ) {
            if (this.playground.players[i] === this) {
                this.playground.players.splice(i, 1);
                break;
            }
        }
    }
   
    render_skill_coldtime() {
        let scale = this.playground.scale;
        let x = 1.5, y = 0.9, r = 0.04;

        this.ctx.save();
        this.ctx.beginPath();
        this.ctx.arc(x * scale, y * scale, r * scale, 0, Math.PI * 2, false);
        this.ctx.stroke();
        this.ctx.clip();
        this.ctx.drawImage(this.fireball_img, (x - r) * scale, (y - r) * scale, r * 2 * scale, r * 2 * scale);
        this.ctx.restore();

        if (this.fireball_coldtime > 0) {
            this.ctx.beginPath();
            this.ctx.moveTo(x * scale, y * scale);
            this.ctx.arc(x * scale, y * scale, r * scale, 0 - Math.PI / 2, Math.PI * 2 * (1 - this.fireball_coldtime / 3) - Math.PI / 2, true);
            this.ctx.lineTo(x * scale, y * scale);
            this.ctx.fillStyle = "rgba(0, 0, 255, 0.6)";
            this.ctx.fill();
        }

        x = 1.62, y = 0.9, r = 0.04;
        this.ctx.save();
        this.ctx.beginPath();
        this.ctx.arc(x * scale, y * scale, r * scale, 0, Math.PI * 2, false);
        this.ctx.stroke();
        this.ctx.clip();
        this.ctx.drawImage(this.blink_img, (x - r) * scale, (y - r) * scale, r * 2 * scale, r * 2 * scale);
        this.ctx.restore();

        if (this.blink_coldtime > 0) {
            this.ctx.beginPath();
            this.ctx.moveTo(x * scale, y * scale);
            this.ctx.arc(x * scale, y * scale, r * scale, 0 - Math.PI / 2, Math.PI * 2 * (1 - this.blink_coldtime / 5) - Math.PI / 2, true);
            this.ctx.lineTo(x * scale, y * scale);
            this.ctx.fillStyle = "rgba(0, 0, 255, 0.6)";
            this.ctx.fill();
        }
        
        this.ctx.font = "oblique small-caps normal 3vh Arial";
        this.ctx.fillStyle = "orange";
        this.ctx.fillText("Q", this.playground.width * 0.83, this.playground.height * 0.9);
        this.ctx.fillStyle = "cyan";
        this.ctx.fillText("F", this.playground.width * 0.9, this.playground.height * 0.9);
    }

}

