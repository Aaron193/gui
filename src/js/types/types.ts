import { Folder } from '../components/folder/folder';
export type Theme = 'dark' | 'light';

export type Component = comp | fold | checkbox | slider;

export type FolderContent = Folder | Component;
export interface Options {
	title: string;
	width: string;
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
interface slider {
	type: string;
	name: string;
	bind: any;
	opt: object;
}
interface fold {
	type: string;
	name: string;
	content: Array<Component>;
}
