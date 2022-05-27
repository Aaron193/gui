export class Folder {
    constructor(content) {
        this.content = content;
    }
    render() {
        this.content.forEach(comp => {
            if (comp instanceof Folder) {
            }
        });
    }
}
