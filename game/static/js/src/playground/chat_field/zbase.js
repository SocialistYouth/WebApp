class ChatField {
    constructor(playground,me) {
        this.playground = playground;

        this.me = me;

        this.$history = $(`<div class="ac-game-chat-field-history">聊天记录</div>`);
        this.$input = $(`<input type="text" class="ac-game-chat-field-input">`);

        this.$history.hide();
        this.$input.hide();

        this.func_id = null;

        this.playground.$playground.append(this.$history);
        this.playground.$playground.append(this.$input);

        this.start();
    }

    start() {
        this.add_listening_events();
        this.attention();
    }

    add_listening_events() {
        let outer = this;

        this.$input.keydown(function(e) {
            if (e.which === 27) { //Ecs退出键
                outer.hide_input();
                return false;
            } else if (e.which === 13) { //Enter回车键
                let username = outer.playground.root.settings.username;
                let text = outer.$input.val();
                if (text) {
                    outer.$input.val("");
                    outer.add_message(username,text);
                    outer.playground.mps.send_message(username,text);
                }
                return false;
            }
        });
    }

    attention() {
        this.add_message("系统",":{火球：Q+鼠标左键}{闪现：F+鼠标左键}{鼠标右键移动}{Enter打开聊天框，Esc关闭聊天框}");
        this.show_history();
    }

    render_message(message) {
        return $(`<div>${message}</div>`);
    }

    add_message(username, text) {
        if (this.me) {
            this.always_show_history();
        } else {
            this.show_history();
        }
        let message = `[${username}]${text}`;
        this.$history.append(this.render_message(message));
        this.$history.scrollTop(this.$history[0].scrollHeight);
    }

    show_history() {
        let outer = this;
        this.$history.fadeIn();

        if(this.func_id) clearTimeout(this.func_id);

        this.func_id = setTimeout(function() {
            outer.$history.fadeOut();
            outer.func_id = null;
        },3000);
    }
    
    always_show_history() {
        this.$history.fadeIn();
    }

    hide_history() {
        let outer = this;
        if (this.func_id) clearTimeout(this.func_id);
        this.func_id = setTimeout(function() {
            outer.$history.fadeOut();
            outer.func_id = null;
        },3000);
    }

    show_input() {
        this.always_show_history();

        this.$input.show();
        this.$input.focus(); //聚焦输入框
    }

    hide_input() {
        this.hide_history();
        this.$input.hide();
        this.playground.game_map.$canvas.focus(); //重新聚焦地图
    }


}
