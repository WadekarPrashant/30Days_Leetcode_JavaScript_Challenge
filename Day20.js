function objDiff(obj1, obj2) {
    let ans = {};
    if (toType(obj1) != toType(obj2)) {
        return [obj1, obj2];
    }
    if (typeof obj1 == 'object' && obj1 !== null) {
        let keys = Object.keys(obj1);
        for (let i = 0; i < keys.length; i++) {
            let key = keys[i];
            if (obj2[key] !== undefined) {
                let diff = objDiff(obj1[key], obj2[key]);
                if (!_.isEmpty(diff)) {
                    ans[key] = diff;
                }
            }
        }
    } else if (obj1 !== obj2) {
        return [obj1, obj2];
    }
    return ans;

    function toType(obj) {
        return ({}).toString.call(obj).match(/\s([a-zA-Z]+)/)[1].toLowerCase()
    }
};