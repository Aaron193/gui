export class Slider {
    constructor(element) {
        this.element = element;
        this.init();
    }
    init() {
        this.element.oninput = (e) => this.input(e);
    }
    input(e) {
        if (!e)
            return;
        const displayBox = this.element.nextElementSibling;
        displayBox.value = e.target.value;
    }
}
