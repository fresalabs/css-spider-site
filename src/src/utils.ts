export function mixin(target: any, source: any) {
    const targetCopy = target;
    Object.keys(source).forEach(item => {
        if ({}.hasOwnProperty.call(source, item)) {
            targetCopy[item] = source[item];
        }
    });
    return targetCopy;
}

export function throttle(func: any, wait = 100) {
    let timeout: any;
    let elapsed;
    let lastRunTime = Date.now();
    // eslint-disable-next-line @typescript-eslint/ban-ts-ignore
    // @ts-ignore-next-line
    return function none(...args) {
        // eslint-disable-next-line @typescript-eslint/ban-ts-ignore
        // @ts-ignore-next-line
        // eslint-disable-next-line @typescript-eslint/no-this-alias
        const _this = this;

        clearTimeout(timeout);

        elapsed = Date.now() - lastRunTime;

        function later() {
            lastRunTime = Date.now();
            timeout = null;
            func.apply(_this, args);
        }

        if (elapsed > wait) {
            later();
        } else {
            timeout = setTimeout(later, wait - elapsed);
        }
    };
}

export function isNull(obj: any) {
    return Object.prototype.toString.call(obj).replace(/\[object[\s]/, '').replace(']', '').toLowerCase() === 'null';
}

export default null;
