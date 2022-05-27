import { FolderContent } from './types/types';
export class Folder {
	content: Array<FolderContent>;
	constructor(content: Array<FolderContent>) {
		this.content = content;
	}
	render(): void {
		this.content.forEach(comp => {
			if (comp instanceof Folder) {
			}
		});
	}
}
