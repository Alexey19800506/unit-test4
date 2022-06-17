export const getMinSquaredNumber = numbers => {
    if (!Array.isArray(numbers || numbers.length == 0)) {
        return null;
    }
    let min = Infinity;
    for (let key in numbers) {
        if (Math.abs(numbers[key]) < min) {
            min = Math.abs(numbers[key]);
        }
    }
    return min * min;
}