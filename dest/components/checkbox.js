export class Checkbox {
    constructor(element, bv, bf) {
        this.element = element;
        this.boundVariable = bv;
        this.boundFunction = bf;
        this.init();
    }
    init() {
        this.element.onclick = (e) => this.clicked(e);
    }
    clicked(e) {
        const status = this.element.checked;
        this.boundFunction(status);
    }
}
