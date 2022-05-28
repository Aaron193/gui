export class FolderButton {
    constructor(element) {
        this.element = element;
        this.init();
    }
    init() {
        this.element.onclick = (e) => this.clicked(e);
    }
    clicked(e) {
        const folderContent = this.element.nextSibling.firstElementChild;
        if (!folderContent)
            return;
        (folderContent === null || folderContent === void 0 ? void 0 : folderContent.classList.contains('hide')) ? folderContent.classList.remove('hide') : folderContent.classList.add('hide');
    }
}
