import Utils from '../../utils.js';
export class SliderText {
    constructor(element) {
        this.element = element;
        this.slider = this.element.previousElementSibling;
        this.init();
    }
    init() {
        this.element.onchange = (e) => this.onchange(e);
    }
    onchange(e) {
        if (!e)
            return;
        const value = Utils.clamp(e.target.value, 0, 100);
        this.element.value = value;
        // set the slider to this val
        this.setSlider(value);
    }
    setSlider(val) {
        this.slider.value = val;
    }
}
