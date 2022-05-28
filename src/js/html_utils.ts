export function getRangeComponentHTML(component: any, id: string): string {
	return `<div data-id="${id}" class="GUI_COMPONENT">
        <label class="GUI_LABEL">${component.name}</label>
        <input class="GUI_SLIDER" type="range" min="${component.opt.min}" max="${component.opt.max}">
        <input class="GUI_STATS" type="text" value="${(component.opt.max - component.opt.min) / 2}">
    </div>`;
}

export function getCheckboxHTML(component: any, id: string): string {
	return `<div data-id="${id}" class="GUI_COMPONENT">
    <label class="GUI_LABEL">${component.name}</label>
    <input class="GUI_CHECKBOX" type="checkbox" >
    </div>`;
}
