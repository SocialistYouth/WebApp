class Settings {
    constructor(root) {
        this.root = root;
        this.platform = "WEB";
        if (this.root.AcWingOS) this.platform = "ACAPP";
        this.username = "";
        this.photo = "";
        this.$settings = $(`
<div class="ac-game-settings">
    <div class="ac-game-attention">QQ登录尚未审核</div>
    <div class="ac-game-settings-login">
        <div class="ac-game-settings-title">
            登录
        </div>
        <div class="ac-game-settings-username">
            <div class="ac-game-settings-item">
                <input type="text" placeholder="用户名">
            </div>
        </div>
        <div class="ac-game-settings-password">
            <div class="ac-game-settings-item">
                <input type="password" placeholder="密码">
            </div>
        </div>
        <div class="ac-game-settings-submit">
            <div class="ac-game-settings-item">
                <button>登录</button>
            </div>
        </div>
        <div class="ac-game-settings-error-messages">
        </div>
        <div class="ac-game-settings-option">
            注册
        </div>
        <br>
        <br>
        <div class="ac-game-settings-Thirdparty-login">
            <img width="30" class="ac-game-settings-Thirdparty-login-qq" src="https://app1236.acapp.acwing.com.cn/static/image/settings/qq_login.png">
            <img width="30" class="ac-game-settings-Thirdparty-login-github" src="https://app1236.acapp.acwing.com.cn/static/image/settings/github_login.png">
            <img width="30" class="ac-game-settings-Thirdparty-login-acwing" src="https://app1236.acapp.acwing.com.cn/static/image/settings/acwing_login.png">

            <br>
            <pre>QQ登录         GitHub登录      AcWing登录</pre>
        </div>
    </div>
    <div class="ac-game-settings-register">
         <div class="ac-game-settings-title">
            注册
        </div>
        <div class="ac-game-settings-username">
            <div class="ac-game-settings-item">
                <input type="text" placeholder="用户名">
            </div>
        </div>
        <div class="ac-game-settings-password ac-game-settings-password-first">
            <div class="ac-game-settings-item">
                <input type="password" placeholder="密码">
            </div>
        </div>
        <div class="ac-game-settings-password ac-game-settings-password-second">
            <div class="ac-game-settings-item">
                <input type="password" placeholder="重复密码">
            </div>
        </div>
        <div class="ac-game-settings-submit">
            <div class="ac-game-settings-item">
                <button>注册</button>
            </div>
        </div>
        <div class="ac-game-settings-error-messages">
        </div>
        <div class="ac-game-settings-option">
            登录
        </div>
        <br>
    </div>
</div>
`);
        this.$login = this.$settings.find(".ac-game-settings-login");
        this.$login_username = this.$login.find(".ac-game-settings-username input");
        this.$login_password = this.$login.find(".ac-game-settings-password input");
        this.$login_submit = this.$login.find(".ac-game-settings-submit button");
        this.$login_error_messages = this.$login.find(".ac-game-settings-error-messages");
        this.$login_option = this.$login.find(".ac-game-settings-option");

        this.$login.hide();

        this.$register = this.$settings.find(".ac-game-settings-register");
        this.$register_username = this.$register.find(".ac-game-settings-username input");
        this.$register_password = this.$register.find(".ac-game-settings-password-first input");
        this.$register_Confirm_password = this.$register.find(".ac-game-settings-password-second input");
        this.$register_submit = this.$register.find(".ac-game-settings-submit");
        this.$register_option = this.$register.find(".ac-game-settings-option");
        this.$register_error_messages = this.$register.find(".ac-game-settings-error-messages");

        this.$register.hide();

        this.$login_acwing = this.$settings.find(".ac-game-settings-Thirdparty-login-acwing");
        this.$login_github = this.$settings.find(".ac-game-settings-Thirdparty-login-github");
        this.$login_qq = this.$settings.find(".ac-game-settings-Thirdparty-login-qq");

        this.root.$ac_game.append(this.$settings);
        this.start();
    }
    start(){
        this.getinfo();
        this.add_listening_events();
    }

    add_listening_events() {
        let outer = this;
        this.add_listening_events_login();
        this.add_listening_events_register();

        this.$login_github.click(function(){
            outer.login_github();
        });
        this.$login_qq.click(function(){
            outer.login_qq();
        });
        this.$login_acwing.click(function(){
            outer.login_acwing();
        });
    }

    login_qq() {
        $.ajax({
            url:"https://app1236.acapp.acwing.com.cn/settings/qq/apply_code/",
            type:"GET",
            success:function(resp){
                if(resp.result  ==="success") {
                    window.location.replace(resp.apply_code_url);
                }
            }
        });
    }

    login_acwing() {
        $.ajax({
            url:"https://app1236.acapp.acwing.com.cn/settings/acwing/apply_code/",
            type:"GET",
            success:function(resp){
                if(resp.result  ==="success") {
                    window.location.replace(resp.apply_code_url);
                }
            }
        });
    }

    login_github() {
        $.ajax({
            url:"https://app1236.acapp.acwing.com.cn/settings/github/apply_code/",
            type:"GET",
            success:function(resp) {
                if(resp.result === "success") {
                    window.location.replace(resp.apply_code_url);
                }
            }

        });
    }
    add_listening_events_login() {
        let outer = this;
        this.$login_option.click(function(){
            outer.register();
        });
        this.$login_submit.click(function(){
            outer.login_on_remote();
        });
    }
    add_listening_events_register() {
        let outer = this;
        this.$register_option.click(function(){
            outer.login();
        });
        this.$register_submit.click(function(){
            outer.register_on_remote();
        });
    }

    login_on_remote() { //在远程服务器上登录
        let outer = this;
        let username = this.$login_username.val();
        let password = this.$login_password.val();
        this.$login_error_messages.empty();

        $.ajax({
            url:"https://app1236.acapp.acwing.com.cn/settings/login/",
            type:"GET",
            data:{
                username:username,
                password:password,
            },
            success:function(resp){
                if(resp.result === "success"){
                    location.reload();
                } else {
                    outer.$login_error_messages.html(resp.result);
                }
            }
        });
    }

    register_on_remote() { //在远程服务器上注册
        let outer = this;
        let username = this.$register_username.val();
        let password = this.$register_password.val();
        let Confirm_password = this.$register_Confirm_password.val();
        this.$register_error_messages.empty();

        $.ajax({
            url:"https://app1236.acapp.acwing.com.cn/settings/register",
            type:"GET",
            data:{
                username: username,
                password: password,
                Confirm_password: Confirm_password,
            },
            success:function(resp){
                if(resp.result === "success"){
                    location.reload();
                } else {
                    outer.$register_error_messages.html(resp.result);
                }
            }
        });
    }

    logout_on_remote() { //在远程服务器上登出
        if (this.platform === "ACAPP") {
            this.root.AcWingOS.api.window.close();
        } else {
            let outer = this;
            $.ajax({
                url:"https://app1236.acapp.acwing.com.cn/settings/logout/",
                type:"GET",
                success:function(resp){
                    if(resp.result === "success"){
                        location.reload();
                    }
                }
            });
        }

    }

    register() { //打开注册界面
        this.$login.hide();
        this.$register.show();
    }
    login() { //打开登录界面
        this.$register.hide();
        this.$login.show();
    }
    getinfo(){
        let outer = this;
        $.ajax({
            url: "https://app1236.acapp.acwing.com.cn/settings/getinfo/",
            type: "GET",
            data:{
                platform:outer.platform,
            },
            success: function(resp) {
                if (resp.result === "success") {
                    outer.username = resp.username;
                    outer.photo = resp.photo;
                    outer.hide();
                    outer.root.menu.show();
                } else {
                    outer.login();
                }
            }
        });
    }
    hide() {
        this.$settings.hide();
    }
    show() {
        this.$settings.show();
    }
}
