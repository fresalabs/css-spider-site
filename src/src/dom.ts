import {mixin} from './utils';
import computedStyles from "./computedStyles";
import {requiredValue} from "./constants";

export function isDOM(obj: any = {}) {
    return (typeof obj === 'object') && (obj.nodeType === 1) && (typeof obj.style === 'object') && (typeof obj.ownerDocument === 'object');
}

export function $(selector: any, parent: any) {
    if (!parent) return document.querySelector(selector);
    if (isDOM(parent)) return parent.querySelector(selector);
    return document.querySelector(selector);
}

export function addRule(selector: any, cssObj: any) {
    Object.keys(cssObj).forEach(item => {
        selector.style[item] = cssObj[item];
    });
}

export function findIndex(ele: any, currentTag: any) {
    let nth = 0;
    while (ele) {
        if (ele.nodeName.toLowerCase() === currentTag) nth += 1;
        ele = ele.previousElementSibling;
    }
    return nth;
}

function findPos(ele: any) {
    let computedStyle: any = getComputedStyle(ele);
    let _x = ele.getBoundingClientRect().left - parseFloat(computedStyle['margin-left']);
    let _y = ele.getBoundingClientRect().top - parseFloat(computedStyle['margin-top']);
    let el = ele.parent;
    while (el) {
        computedStyle = getComputedStyle(el);
        _x += el.frameElement.getBoundingClientRect().left - parseFloat(computedStyle['margin-left']);
        _y += el.frameElement.getBoundingClientRect().top - parseFloat(computedStyle['margin-top']);
        el = el.parent;
    }
    return {
        top: _y,
        left: _x
    };
}


export function getElementInfo(ele: any) {
    const computedStyle = computedStyles(ele);
    requiredValue.forEach((item: any) => {
        computedStyle[item] = parseFloat(computedStyle[item]) || 0;
    })

    mixin(computedStyle, {
        width: ele.offsetWidth - computedStyle['border-left-width'] - computedStyle['border-right-width'] - computedStyle['padding-left'] - computedStyle['padding-right'],
        height: ele.offsetHeight - computedStyle['border-top-width'] - computedStyle['border-bottom-width'] - computedStyle['padding-top'] - computedStyle['padding-bottom']
    });
    mixin(computedStyle, findPos(ele));

    return computedStyle;
}

export function getMaxZIndex() {
    // eslint-disable-next-line @typescript-eslint/ban-ts-ignore
    // @ts-ignore-next-line
    return [...document.all].reduce((r, e) => Math.max(r, +window.getComputedStyle(e).zIndex || 0), 0);
}

export function isParent(obj: any, parentObj: any) {
    while (obj !== undefined && obj !== null && obj.tagName.toUpperCase() !== 'BODY') {
        if (obj === parentObj) return true;
        obj = obj.parentNode;
    }
    return false;
}

export default $;