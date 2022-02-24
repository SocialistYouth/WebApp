class MenuTop {
    constructor(menu) {
        this.menu = menu;
        this.$menu_top = $(`
            <div class="ac-game-menu-top">
                <div class="ac-game-menu-top-user">
                    <button class="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-expanded="false">
                    <img src=${this.menu.root.settings.photo} class="ac-game-menu-top-user-profile">
                    <span class="ac-game-menu-top-user-item ">${this.menu.root.settings.username}</span>
                    </button>
                    <div class="dropdown-menu" aria-labelledby="dropdownMenuButton">
                        <li class="dropdown-item ac-game-menu-top-user-username">个人信息</li>
                        <div class="dropdown-divider"></div>
                        <li class="dropdown-item ac-game-menu-top-user-settings" >设置</li>
                        <div class="dropdown-divider"></div>
                        <li class="dropdown-item ac-game-menu-top-user-logout" >退出</li>
                    </div>
                    <i class="bi bi-eye-fill"><span class='ac-game-menu-top-user-tourist-cnt'>${this.menu.root.settings.tourist_cnt}</span></i>
                </div>
                    <div class="ac-game-menu-scroll-word">
                        <marquee>
                            <span style="font-weight: bolder;font-size: 2.4vw;color: white;">${this.menu.root.settings.username} 欢迎您的到来!</span>
                        </marquee>
                    </div>
            </div>`);
        this.menu.$menu.append(this.$menu_top);
        this.$user_username = this.$menu_top.find(".ac-game-menu-top-user-username");
        this.$user_settings = this.$menu_top.find(".ac-game-menu-top-user-settings");
        this.$user_logout = this.$menu_top.find(".ac-game-menu-top-user-logout");

        this.start();
    }
    start() {
        this.add_listening_events();
    }
    hide() {
        this.$menu_top.hide();
    }
    add_listening_events() {

    }

}

