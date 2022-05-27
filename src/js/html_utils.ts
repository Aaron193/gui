export function getRangeComponentHTML(component: any): string {
	return `<div class="GUI_COMPONENT">
        <div class="GUI_ITEM_TITLE_CONTAINER">
            <div class="GUI_ITEM_TITLE">${component.name}</div>
        </div>
        <input class="GUI_SLIDER" type="range" min="${component.opt.min}" max="${component.opt.max}">
        <input class="GUI_STATS" type="text" value="${(component.opt.max - component.opt.min) / 2}">
    </div>`;
}

export function getCheckboxHTML(component: any): string {
	return `<div class="GUI_COMPONENT">
    <div class="GUI_ITEM_TITLE_CONTAINER">
     <div class="GUI_ITEM_TITLE">${component.name}</div>
    </div>
    <input  type="checkbox" >
    </div>`;
}
