export class Slider {
	element: any;
	constructor(element: HTMLDivElement) {
		this.element = element;
		this.init();
	}
	init(): void {
		this.element.oninput = (e: Event) => this.input(e);
	}
	input(e: Event): void {
		if (!e) return;
		const displayBox = this.element.nextElementSibling as HTMLInputElement;
		displayBox.value = (e.target as any).value;
	}
}
