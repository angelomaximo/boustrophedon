const ls = `yard
year
yellow
yes
yesterday
yet
yield
you
young
youngster
your
yours
yourself
youth`;

const fLs = ls.split("\n")

function mkŋShort(word) {
    // search in 2,
    // if words contain "ed",  then replace wi "ð"

    if(word.includes("ed")) {
        
    }
}

function mkngObj(ls) {
    let compendium = ``

    for (let i = 0; i < ls.length; i++) {


        compendium += `'${ls[i]}': '',\n`
    }
    const model = `'ls[i]': '',`

    return compendium;
}




console.log( mkngObj(fLs) );
// console.log( fLs );