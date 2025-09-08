import prompt from 'picoprompt'

console.log("\n💻 Number examiner 💻\n")

function bin(n:number): string {
    return n.toString(2)
}

function oct(n:number): string {
    return n.toString(8)
}

function hex(n:number): string {
    return n.toString(16)
}

function padRight(str: string, length: number): string {
    if (str.length >= length) {
        return str;
    }

    let out = str
    for (let i = str.length; i < length; i++) {
        out += " ";
    }

    return out;
}

while (true) {
    const input: string | null = prompt("Number to examine: ");
    if (input === null || isNaN(parseInt(input, 10))) {
        break
    }

    const base10: number = parseInt(input, 10);
    const base2: string = bin(base10);
    const base8: string = oct(base10);
    const base16: string = hex(base10);
    const x: number = base2.length - 1;

    console.log(`${input} is ${padRight(base2, x)} in base 2`);
    console.log(`${input} is ${padRight(base8, x)} in base 8`);
    console.log(`${input} is ${padRight(base16, x)} in base 16`);
    console.log("\n");
}