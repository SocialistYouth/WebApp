export class WeGame {
    constructor(id, AcWingOS) {
        this.id = id;
        this.$ac_game = $('#' + id);
        
        this.AcWingOS = AcWingOS;
        
        this.settings = new Settings(this);
        this.menu = new WeGameMenu(this);
        this.playground = new WeGamePlayground(this);
        this.start();
    }

    start() {

    }
}
