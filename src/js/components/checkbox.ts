export class Checkbox {
	element: any;
	boundVariable: any;
	boundFunction: any;
	constructor(element: HTMLElement, bv: any, bf: any) {
		this.element = element;
		this.boundVariable = bv;
		this.boundFunction = bf;
		this.init();
	}
	init(): void {
		this.element.onclick = (e: Event) => this.clicked(e);
	}
	clicked(e: Event): void {
		const status = this.element.checked;
		this.boundFunction(status);
	}
}
