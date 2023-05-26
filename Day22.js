var flat = function (arr, n) {
    const flattened = [];
    const flatten = (data, depth) => {
        for (const val of data) {
            if (Array.isArray(val) && depth < n) flatten(val, depth + 1);
            else flattened.push(val);
        }
    };
    flatten(arr, 0);
    return flattened;
};