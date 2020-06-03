function findA(string) {
    let ret = ''
    for (let index = 0; index < string.length; index++) {
        const element = string[index];
        if (string[index] === 'a') {
            ret = 'a'
        }
    }
    return ret
}

findA('bdcsa')
console.log(findA('bdcsa'));