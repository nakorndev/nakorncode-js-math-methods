console.log(Math.random()) // 0 - 1

function rand(min, max) {
    return Math.round(Math.random() * (max - min) + min)
}

console.log(rand(1, 10))
