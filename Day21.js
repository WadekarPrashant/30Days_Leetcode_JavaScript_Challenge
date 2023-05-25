var chunk = function(arr, size) {
    if (arr.length == 0) return [];
    const chunks = [[]];
    for (const val of arr) {
        if (chunks[chunks.length - 1].length == size) chunks.push([]);
        chunks[chunks.length - 1].push(val);
    }
    return chunks;
};