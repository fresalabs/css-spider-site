const isDefined = (a: any) => typeof a !== 'undefined';
const isUndefined = (a: any) => typeof a === 'undefined';
const isObject = (a: any) => { return a !== null && typeof a === 'object'; };

// from https://github.com/npm-dom/is-dom/blob/master/index.js
function isNode (val: any) {
    if (!isObject(val)) return false;
    if (isDefined(window) && isObject(window.Node)) return val instanceof window.Node;
    return typeof val.nodeType === 'number' && typeof val.nodeName === 'string';
}

function stylesWithoutDefaults(element: any) {
    const proto: any = Element.prototype;
    const slice = Function.call.bind(Array.prototype.slice);
    const matches = Function.call.bind(proto.matchesSelector ||
      proto.mozMatchesSelector || proto.webkitMatchesSelector ||
      proto.msMatchesSelector || proto.oMatchesSelector);

    // Returns true if a DOM Element matches a cssRule
    const elementMatchCSSRule = function(element: any, cssRule: any) {
        return matches(element, cssRule.selectorText);
    };

    // Here we get the cssRules across all the stylesheets in one array
    // eslint-disable-next-line @typescript-eslint/ban-ts-ignore
    // @ts-ignore
    const cssRules = getComputedStyle(element);

    const getAppliedCss = function(elm: any) {
        // get only the css rules that matches that element
        const elementRules = [cssRules].filter(elementMatchCSSRule.bind(null, elm));
        const rules =[];
        if(elementRules.length) {
            for(let i = 0; i < elementRules.length; i++) {
                const e: any = elementRules[i];
                const styleKey = e.style[0];
                const styleValue = e.style[styleKey];
                rules.push({
                    order:i,
                    style: {[styleKey]: styleValue}
                })
            }
        }

        if(elm.getAttribute('style')) {
            const styles: any = elm.getAttribute('style').split(';');
            const styleObject: any = {};
            let i= styles.length;
            let style: any, k: any, v: any;

            while (i--)
            {
                style = styles[i].split(':');
                if (style.length > 1) {
                    k = style[0].trim();
                    v = style[1].trim();
                    if (k.length > 0 && v.length > 0)
                    {
                        styleObject[k] = v;
                    }
                }
            }

            rules.push({
                order:elementRules.length,
                style:styleObject
            })
        }

        const stylesResult: any = {};
        rules.forEach((rule: any) => {
            Object.keys(rule.style).forEach((key) => {
                stylesResult[key] = rule.style[key]
            })
        })

        return stylesResult;
    }
    return getAppliedCss(element);
}


/**
 * Returns a collection of CSS property-value pairs
 * @param  {Element} node A DOM element to copy styles from
 * @param  {Object} [target] An optional object to copy styles to
 * @param {(Object|Boolean)} styleList [default=true] A collection of CSS property-value pairs, false: copy none, true: copy all
 * @return {object} collection of CSS property-value pairs
 * @api public
 */
function computedStyles (node: any, target: any = {}, styleList: Record<string, any> | boolean | any = true) {
    if (!isNode(node)) {
        throw new Error('parameter 1 is not of type \'Element\'');
    }

    if (styleList === false) return target;

    const computed: any = stylesWithoutDefaults(node);

    let keysArray;
    if (styleList === true) {
        keysArray = Object.keys(computed);
    } else {
        keysArray = Object.keys(styleList);
    }

    for (let i = 0, l = keysArray.length; i < l; i++) {
        const key = keysArray[i];

        const def = styleList === true || styleList[key];
        if (def === false || isUndefined(def)) continue;  // copy never

        const value = /* computed.getPropertyValue(key) || */ computed[key];  // using getPropertyValue causes error in IE11
        if (typeof value !== 'string' || value === '') continue; // invalid value

        if (def === true || value !== def) {  // styleList === true || styleList[key] === true || styleList[key] !== value
            target[key] = value;
        }
    }

    return target;
}

export default computedStyles;