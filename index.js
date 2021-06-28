// Write your solution here!
let cats = ["Milo", "Otis", "Garfield"];

function destructivelyAppendCat(name){
    cats.push(name);
}

function destructivelyPrependCat(name){
    cats.unshift(name);
}

function destructivelyRemoveLastCat(name){
    cats.pop(name);
}

function destructivelyRemoveFirstCat(name){
    cats.shift(name);
}

function appendCat(name){
    let newArray =  [...cats, name];
    return newArray
    }

function prependCat(name){
    let newArray = [name, ...cats];
    return newArray
}

function removeLastCat(){
    return cats.slice(0,-1)
    // return console.log(name.slice(0,-1));
}

function removeFirstCat(){
    return cats.slice(1,cats.length)
    // return console.log(name.slice(0,-1));
}

// removeLastCat(['dom','tom','nom'])

// function removeFirstCat()
