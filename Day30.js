var inorderTraversal = function*(arr) {
    const stack = [arr];
    while (stack.length) {
        const item = stack.pop();
        if (Array.isArray(item)) {
            stack.push(...[...item].reverse());
        } else {
            yield item;
        }
    }
};