"use strict";
// temp for now
const COLOR_THEMES = {
    dark: 'rgb(10,10,10)',
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
class GUI {
    constructor(options) {
        // this.loadStyles();
        this.options = options;
        this.gui = document.createElement('div');
        this.render();
    }
    // loadStyles(): void {
    // 	const css_ele = document.createElement('style');
    // 	css_ele.type = 'text/css';
    // 	css_ele.appendChild(STYLES);
    // 	document.body.appendChild(css_ele);
    // }
    render() {
        const body = document.querySelector('body');
        if (!body)
            throw new Error('Body element does not exist');
        this.gui.className = '__GUI__';
        // add gui container
        addCSS(this.gui, this.options);
        // add gui title to container
        const guiTitle = document.createElement('div');
        guiTitle.className = 'GUI_TITLE';
        guiTitle.textContent = this.options.title;
        this.gui.append(guiTitle);
        body.append(this.gui);
    }
    addComponent(name, component) {
        switch (component.type) {
            case 'slider':
                const containter = document.createElement('div');
                containter.className = 'GUI_COMPONENT';
                const titleCont = document.createElement('div');
                titleCont.className = 'GUI_ITEM_TITLE_CONTAINER';
                const title = document.createElement('div');
                title.className = 'GUI_ITEM_TITLE';
                title.textContent = name;
                titleCont.append(title);
                const slider = document.createElement('input');
                slider.className = 'GUI_RANGE';
                slider.type = 'range';
                slider.min = component.min;
                slider.max = component.max;
                const stats = document.createElement('input');
                stats.className = 'GUI_STATS';
                stats.type = 'text';
                stats.value = '43'; // TODO: here
                containter.append(titleCont);
                containter.append(slider);
                containter.append(stats);
                this.gui.append(containter);
                break;
        }
    }
}
function addCSS(gui, options) {
    let backgroundColor = COLOR_THEMES[options.theme];
    gui.style.position = 'absolute';
    options.align === 'left' ? (gui.style.left = '0px') : (gui.style.right = '0px');
    gui.style.width = options.width + 'px';
    gui.style.height = options.height + 'px';
    gui.style.opacity = options.opacity;
    gui.style.backgroundColor = backgroundColor;
    return gui;
}
// gui library test
const myGui = new GUI({
    title: 'MY GUI TITLE',
    width: '540',
    height: '400',
    align: 'right',
    opacity: '0.9',
    theme: 'dark',
});
myGui.addComponent('component name', {
    type: 'slider',
    min: '0',
    max: '100',
    step: '1',
});
myGui.addComponent('component name', {
    type: 'slider',
    min: '0',
    max: '100',
    step: '1',
});
myGui.addComponent('component name', {
    type: 'slider',
    min: '0',
    max: '100',
    step: '1',
});
