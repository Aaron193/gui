import { getRangeComponentHTML, getCheckboxHTML } from './html_utils.js'; // .js ok, wont work without
import { Theme, Options, Component } from './types/types';
import { Folder } from './components/folder/folder.js';
import { FolderButton } from './components/folder/folderButton.js';
import { Slider } from './components/slider/slider.js';
import { Checkbox } from './components/checkbox.js';
import { SliderText } from './components/slider/text.js';

// TODO: figure out way to bind variables and events system to gui

// temp for now
const COLOR_THEMES = {
	dark: 'black',
	light: 'rgb(225,225,225)',
};

// const STYLES = document.createTextNode(`
// .GUI_TITLE {
// 	margin-top: 5px;
// 	color: white;
// 	font-size: 22px;
// 	text-align: center;
// 	font-weight: 600;
// }
// .GUI_ITEM_TITLE {
// color: rgb(240,240,240);
// }
// .GUI_RANGE {

// }
// .__GUI__ {

// }
// .__GUI__ input {

// }
// .GUI_COMPONENT {
//     padding-left: 14px;
//     margin-left: 5px;
//     border-left: 2px solid ${COLOR_THEMES.light /* TODO: make this stuff dynamic */};
//     margin-bottom: 5px;
// }

// `);

// class ComponentManager {
// 	components: Array<Component>;
// 	constructor() {
// 		this.components = [];
// 	}
// 	hasFolderName(folderName: string) {
// 		return this.components.find(comp => comp instanceof Folder && comp.name === folderName) != undefined;
// 	}
// 	addComponentToFolder() {}
// 	addFolderWithComponent() {}
// }

class GUI {
	options: Options;
	gui: HTMLDivElement;
	components: Array<Component>;
	carray: Array<any>;
	// componentManager: ComponentManager;
	constructor(options: Options, content: Array<Component>) {
		// this.loadStyles();
		this.options = options;
		this.components = content;
		this.carray = [];
		this.gui = document.createElement('div');
		// this.componentManager = new ComponentManager();
		this.render();
	}
	// loadStyles(): void {
	// 	const css_ele = document.createElement('style');
	// 	css_ele.type = 'text/css';
	// 	css_ele.appendChild(STYLES);
	// 	document.body.appendChild(css_ele);
	// }
	render(): void {
		const body = document.querySelector('body');
		if (!body) throw new Error('Body element does not exist');
		this.gui.className = '__GUI__';

		// add gui container
		addCSS(this.gui, this.options);

		// add gui title to container
		const guiTitle = document.createElement('div');
		guiTitle.className = 'GUI_TITLE';
		guiTitle.textContent = this.options.title;
		this.gui.append(guiTitle);

		body.append(this.gui);

		this.loadGuiContent(this.components);
	}
	parseC(components: any): string {
		let html = '';
		for (const component of components) {
			if (component.type === 'folder') {
				html += `<div data-id="folder" class="GUI_FOLDER_TITLE">\>${component.name}</div>`;
				html += `<div class="GUI_FOLDER"> <div class= "GUI_FOLDER_CONTAINER">`;
				html += this.parseC(component.content);
				html += '</div></div>';
				html += '</div>';
				continue;
			}
			if (component.type === 'checkbox') {
				html += getCheckboxHTML(component, 'checkbox');
				continue;
			}
			if (component.type === 'slider') {
				html += getRangeComponentHTML(component, 'slider');
				continue;
			}
		}
		return html;
	}
	loadGuiContent(components: Array<Component>): void {
		const html = this.parseC(components);
		this.gui.innerHTML += html;
		this.addFolder();
		this.addSlider();
		this.addCheckbox();
	}
	addCheckbox(): void {
		const CHECKBOXES = [...(document.querySelectorAll('.GUI_CHECKBOX') as NodeListOf<HTMLInputElement>)];
		for (const checkbox of CHECKBOXES) {
			const myVar = false;
			const myFunc = function (e: boolean) {
				console.log('U CLICKED IT!', e);
			};
			this.carray.push(new Checkbox(checkbox, myVar, myFunc));
		}
	}
	addSlider(): void {
		const SLIDERS = [...(document.querySelectorAll('.GUI_SLIDER ') as NodeListOf<HTMLInputElement>)];
		for (const slider of SLIDERS) {
			this.carray.push(new Slider(slider));
			this.carray.push(new SliderText(slider.nextElementSibling));
		}
	}
	addFolder(): void {
		// fix display of folders
		const FOLDERS = [...(document.querySelectorAll('.GUI_FOLDER ') as NodeListOf<HTMLElement>)];
		for (const folder of FOLDERS) {
			this.carray.push(new Folder(folder));
		}
		const FOLDER_BUTTONS = [...(document.querySelectorAll('.GUI_FOLDER_TITLE') as NodeListOf<HTMLElement>)];
		for (const folderBtn of FOLDER_BUTTONS) {
			this.carray.push(new FolderButton(folderBtn));
		}
	}
}

function addCSS(gui: HTMLDivElement, options: Options): HTMLDivElement {
	let backgroundColor = COLOR_THEMES[options.theme];
	gui.style.position = 'absolute';

	options.align === 'left' ? (gui.style.left = '0px') : (gui.style.right = '0px');

	gui.style.width = options.width + 'px';
	gui.style.opacity = options.opacity;
	gui.style.backgroundColor = backgroundColor;

	return gui;
}

// gui library test

let variable1, variable2, variable3;

const myGui = new GUI(
	{
		title: 'MY GUI TITLE',
		width: '540',
		align: 'right',
		opacity: '1',
		theme: 'dark',
	},
	[
		{ type: 'slider', name: 'component name', opt: { min: '0', max: '100', step: '1' } },
		{ type: 'slider', name: 'component name 2', opt: { min: '0', max: '100', step: '1' } },
		{
			type: 'checkbox',
			name: 'my checkbox',
			action: () => {
				console.log('CLICKED CHECKBOX!');
			},
		},
		{ type: 'folder', name: 'misc', content: [{ type: 'slider', name: 'nested component', opt: { min: '0', max: '100', step: '1' } }] },
		{
			type: 'folder',
			name: 'misc',
			content: [
				{ type: 'slider', name: 'nested component', bind: variable1, opt: { min: '0', max: '100', step: '1' } },
				{ type: 'slider', name: 'nested component', bind: variable2, opt: { min: '0', max: '100', step: '1' } },
				{ type: 'slider', name: 'nested component', bind: variable3, opt: { min: '0', max: '100', step: '1' } },
			],
		},
	]
);
// myGui.addComponent('component name', { type: 'slider', opt: { min: '0', max: '100', step: '1' } });
// myGui.addComponent('component name', {
// 	type: 'slider',
// 	min: '0',
// 	max: '100',
// 	step: '1',
// });
// myGui.addComponent(
// 	'component name',
// 	{
// 		type: 'slider',
// 		min: '0',
// 		max: '100',
// 		step: '1',
// 	},
// 	'folderName'
// );
