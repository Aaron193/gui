export class Folder {
    constructor(element) {
        this.element = element;
        this.folderContent = this.element.children[0];
        this.init();
    }
    init() {
        if (this.folderContent.classList.contains('hide')) {
            this.folderContent.style.display = 'none';
        }
    }
}
