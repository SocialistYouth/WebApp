class Settings {
    constructor(root) {
        this.root = root;
        this.platform = "WEB";
        if (this.root.AcWingOS) this.platform = "ACAPP";
        this.start();
    }
    start(){
        this.getinfo();
    }
    register() { //打开注册界面

    }
    login() { //打开登录界面

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
                console.log(resp);
                if (resp.result === "success") {
                    outer.hide();
                    outer.root.menu.show();
                } else {
                    outer.login();
                }
            }
        });
    }
    hide() {
    }
    show() {
    }
}
