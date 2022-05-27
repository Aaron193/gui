import { Folder } from '../folder';
export type Theme = 'dark' | 'light';

export type Component = comp | fold | checkbox;

export type FolderContent = Folder | Component;
export interface Options {
	title: string;
	width: string;
	height: string;
	align: string;
	opacity: string;
	theme: Theme;
}

interface comp {
	type: string;
	name: string;
	opt: object;
}
interface checkbox {
	type: string;
	name: string;
	action: object;
}
interface fold {
	type: string;
	name: string;
	content: Array<Component>;
}
