class Particle extends AcGameObject {
    constructor(playground, x, y, radius, vx, vy, color, speed) {
        super();
        this.playground = playground;
        this.ctx = this.playground.game_map.ctx;
        this.x = x;
        this.y = y;
        this.radius = radius;
        this.vx = vx;
        this.vy = vy;
        this.color = color;
        this.speed = speed;
        this.friction = 0.9;
        this.eps = 1;
    }
    start() {
    }
    update() {
        if(this.speed < this.eps) {
            this.destroy();
            return false;
        }
        this.x += this.vx*this.speed*this.timedelta /1000;//因为单位是毫秒，所以/1000
        this.y += this.vy*this.speed*this.timedelta /1000;
        this.speed *= this.friction;

        this.render();
    }

    render() {
        this.ctx.beginPath();
        this.ctx.arc(this.x,this.y,this.radius,0,Math.PI * 2,false);
        this.ctx.fillstyle = this.color;
        this.ctx.fill();
    }

}
