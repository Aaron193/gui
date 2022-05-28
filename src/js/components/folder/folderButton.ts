export class FolderButton {
	element: any;
	folderContent: any;
	constructor(element: HTMLElement) {
		this.element = element;
		this.init();
	}
	init(): void {
		this.element.onclick = (e: Event) => this.clicked(e);
	}
	clicked(e: Event): void {
		const folderContent = this.element.nextSibling.firstElementChild;
		if (!folderContent) return;
		folderContent?.classList.contains('hide') ? folderContent.classList.remove('hide') : folderContent.classList.add('hide');
	}
}
