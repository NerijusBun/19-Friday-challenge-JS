/*
Sugeneruokit atsitiktinių reikšmių masyvą, 
masyvo elementų skaičius 30, 
Masyvo elementų reikšmės nuo 1 iki 10.
Tai yra klasės mokinių vidurkiai. Rasti geriausiai besimokantį ir blogiausiai.
 */

const vidurkiai=[];
for (let i=1; i<=30; i++){
    vidurkiai.push((Math.round(((((Math.random() * (8 - 2)) + 2)))*100))/100);
}
console.log(vidurkiai)
console.log(Math.min(...vidurkiai), Math.max(...vidurkiai));