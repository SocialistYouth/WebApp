class World_ChatField {
    constructor(menu) {
        this.menu = menu;

        this.$title = $(`<div class="ac-game-world-chat-field-title">世界之窗</div>`);
        this.$history = $(`<div class="ac-game-world-chat-field-history">暂时存在通讯异常，不定期维护</div>`);
        this.$input = $(`<input type="text" class="ac-game-world-chat-field-input">`);


        this.menu.$menu.append(this.$title);
        this.menu.$menu.append(this.$history);
        this.menu.$menu.append(this.$input);

        this.start();
    }

    start() {
        this.add_listening_events();
    }

    add_listening_events() {
        let outer = this;

        this.$input.keydown(function(e) {
            if (e.which === 13) { //Enter回车键
                let username = outer.menu.root.settings.username;
                let text = outer.$input.val();
                if (text) {
                    outer.$input.val("");
                    outer.add_message(username,text);
                    outer.menu.root.playground.mps.send_message(username,text);
                }
                return false;
            }
        });
    }


    render_message(message) {
        return $(`<div>${message}</div>`);
    }

    add_message(username, text) {
        let message = `[${username}]${text}`;
        this.$history.append(this.render_message(message));
        this.$history.scrollTop(this.$history[0].scrollHeight);
    }

    
    always_show_history() {
        this.$history.fadeIn();
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
