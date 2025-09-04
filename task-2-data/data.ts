import prompt from 'picoprompt'

console.log("\n💻 Number examiner 💻\n")

function bin(n) {
    return n.toString(2)
}

function oct(n) {
    return n.toString(8)
}

function hex(n) {
    return n.toString(16)
}

function padRight(s, n) {
    if (s.length > n) {
        return s
    }

    let out = s
    for (let i = s.length; i <= n; i++) {
        out += " "
    }

    return out;
}

while (true) {
    const input = prompt("Number to examine: ")
    const base10 = parseInt(input, 10)
    if (isNaN(base10)) {
        break
    }

    const base2 = bin(base10)
    const base8 = oct(base10)
    const base16 = hex(base10)
    const x = base2.length - 1

    console.log(`${input} is ${padRight(base2, x)} in base 2`)
    console.log(`${input} is ${padRight(base8, x)} in base 8`)
    console.log(`${input} is ${padRight(base16, x)} in base 16`)
    console.log("\n")
}
