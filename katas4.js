const showResults = (imp) => {
    const div = document.getElementById('container');
    const h4 = document.createElement('h4');
    h4.innerText = imp;
    div.appendChild(h4);
    console.log(imp);
}

const gotCitiesCSV = "King's Landing,Braavos,Volantis,Old Valyria,Free Cities,Qarth,Meereen";

const lotrCitiesArray = ["Mordor","Gondor","Rohan","Beleriand","Mirkwood","Dead Marshes","Rhun","Harad"];

const bestThing = "The best thing about a boolean is even if you are wrong you are only off by a bit";

const kata1 = () => {
    let resultado = gotCitiesCSV.split(',');
    let array = [];
    for (let i = 0; i < resultado.length; i++) {
        array.push(resultado[i]);
    }
    return array;
}
showResults(kata1());

const kata2 = () => {
    let resultado = bestThing.split(' ');
    let array = [];
    for (let i = 0; i < resultado.length; i++) {
        array.push(resultado[i]);
    }
    return array;
}
showResults(kata2());

const kata3 = () => {
    return gotCitiesCSV.split(',').join('; ');
}
showResults(kata3());

const kata4 = () => {
    return lotrCitiesArray.join(', ');
}
showResults(kata4());

const kata5 = () => {
    return lotrCitiesArray.slice(0, 5);
}
showResults(kata5());

const kata6 = () => {
    return lotrCitiesArray.slice(4, 9);
}
showResults(kata6());

const kata7 = () => {
    return lotrCitiesArray.slice(2, 5);
}
showResults(kata7());

const kata8 = () => {
    lotrCitiesArray.splice(2,1 );
    return lotrCitiesArray;
}
showResults(kata8());

const kata9 = () => {
    lotrCitiesArray.splice(5,2 );
    return lotrCitiesArray;
}
showResults(kata9());

const kata10 = () => {
    // implemente aqui o código
}
// showResults(kata10());

const kata11 = () => {
    // implemente aqui o código
}
// showResults(kata11());

const kata12 = () => {
    // implemente aqui o código
}
// showResults(kata12());

const kata13 = () => {
    // implemente aqui o código
}
// showResults(kata13());

const kata14 = () => {
    // implemente aqui o código
}
// showResults(kata14());

const kata15 = () => {
    // implemente aqui o código
}
// showResults(kata15());

const kata16 = () => {
    // implemente aqui o código
}
// showResults(kata16());

const kata17 = () => {
    // implemente aqui o código
}
// showResults(kata17());

const kata18 = () => {
    // implemente aqui o código
}
// showResults(kata18());

const kata19 = () => {
    // implemente aqui o código
}
// showResults(kata19());

const kata20 = () => {
    // implemente aqui o código
}
// showResults(kata20());