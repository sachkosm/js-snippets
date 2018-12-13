
const cloneObject = function (object) {
            var copy = {};
            var keys = Object.keys(object);
            for (var i = 0; i < keys.length; i++) {
                var key = keys[i];
                var value = object[key];
                copy[key] = value;
            }
            return copy;
        };

===============================================

function clone(/*anything*/ src) {
    // summary:
    //		Clones objects (including DOM nodes) and all children.
    //		Warning: do not clone cyclic structures.
    // src:
    //		The object to clone
    if (!src || typeof src != "object" || lang.isFunction(src)) {
        // null, undefined, any non-object, or function
        return src;	// anything
    }
    if (src.nodeType && "cloneNode" in src) {
        // DOM Node
        return src.cloneNode(true); // Node
    }
    if (src instanceof Date) {
        // Date
        return new Date(src.getTime());	// Date
    }
    if (src instanceof RegExp) {
        // RegExp
        return new RegExp(src);   // RegExp
    }
    var r, i, l;
    if (lang.isArray(src)) {
        // array
        r = [];
        for (i = 0, l = src.length; i < l; ++i) {
            if (i in src) {
                r[i] = lang.clone(src[i]);
            }
        }
        // we don't clone functions for performance reasons
        //		}else if(d.isFunction(src)){
        //			// function
        //			r = function(){ return src.apply(this, arguments); };
    } else {
        // generic objects
        r = src.constructor ? new src.constructor() : {};
    }
    return lang._mixin(r, src, lang.clone);
}
