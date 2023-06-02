var fibGenerator = function* () {
    let two_behind = 0;
    yield 0
    let one_behind = 1
    yield 1
    while (true) {
        let ans = one_behind + two_behind
        two_behind = one_behind
        one_behind = ans
        yield ans
    }
};