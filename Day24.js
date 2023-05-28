Array.prototype.groupBy = function(fn) {
    const groups = {};
    for (const val of this) {
        const key = fn(val);
        if (!groups[key]) groups[key] = [];
        groups[key].push(val);
    }
    return groups;
};