function my(a, b) {
    let count = 0;
    for (let i = a; i <= b; i++) {
        for (let j = 1; j < i; j++) {
            count += Math.floor(i / (Math.pow(5, j)))
        }
    }
    return count
}
console.log(my(15, 25))