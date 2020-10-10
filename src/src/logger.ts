const sep = 'DomInspector: ';

const proxy = ['log', 'warn', 'error'];

const exportObj: any = {};

proxy.forEach(item => {
    // eslint-disable-next-line @typescript-eslint/ban-ts-ignore
    // @ts-ignore
    exportObj[item] = function funcName(...args) {
        // eslint-disable-next-line @typescript-eslint/ban-ts-ignore
        // @ts-ignore
        return console[item].call(this, sep + args[0], args[1] || '');
    };
});

export default exportObj;