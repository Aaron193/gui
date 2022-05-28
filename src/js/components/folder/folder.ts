export class Folder {
	element: HTMLElement;
	folderContent: any;
	constructor(element: HTMLElement) {
		this.element = element;
		this.folderContent = this.element.children[0] as HTMLElement;
		this.init();
	}
	init(): void {
		if (this.folderContent.classList.contains('hide')) {
			this.folderContent.style.display = 'none';
		}
	}
}
