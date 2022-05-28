import Utils from '../../utils.js';
export class SliderText {
	element: any;
	slider: any;
	constructor(element: any) {
		this.element = element;
		this.slider = this.element.previousElementSibling;
		this.init();
	}
	init(): void {
		this.element.onchange = (e: Event) => this.onchange(e);
	}
	onchange(e: any): void {
		if (!e) return;
		const value = Utils.clamp(e.target.value, 0, 100);
		this.element.value = value;
		// set the slider to this val
		this.setSlider(value);
	}
	setSlider(val: number): void {
		this.slider.value = val;
	}
}
