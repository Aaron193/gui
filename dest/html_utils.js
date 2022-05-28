export function getRangeComponentHTML(component) {
    return `<div class="GUI_COMPONENT">
        <label class="GUI_LABEL">${component.name}</label>
        <input class="GUI_SLIDER" type="range" min="${component.opt.min}" max="${component.opt.max}">
        <input class="GUI_STATS" type="text" value="${(component.opt.max - component.opt.min) / 2}">
    </div>`;
}
export function getCheckboxHTML(component) {
    return `<div class="GUI_COMPONENT">
    <label class="GUI_LABEL">${component.name}</label>
    <input  type="checkbox" >
    </div>`;
}
