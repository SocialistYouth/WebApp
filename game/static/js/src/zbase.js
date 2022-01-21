class WeGame {
    constructor(id) {
        this.id = id;
        this.$ac_game = $('#' + id);
        this.menu = new WeGameMenu(this);
        this.playground = new WeGamePlayground(this);

        this.start();
    }

    start() {

    }
}
