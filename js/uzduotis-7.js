/*
Pirmos lietuviškos litų monetos išėjo 1925 metais. 
Tai buvo 5, 2 ir 1 lito vertės sidabrinės monetos. 
Duotą pinigų sumą n litais pakeiskite nurodytomis monetomis, panaudojant kuo mažiau monetų. 
Atsakymo galimas pvz: „Norint gauti n sumą litais, mums reikės n1 monetų po 5 lt, n2 monetų po 2 litus ir n3 monetų po 1 litą. 
Viso monetų N skaičius“.
 */

const suma= 3542;
function monetos(suma){
    const m5 = Math.floor(suma/5);
    const m2 = Math.floor((suma-(m5*5))/2);
    const m1 = Math.floor((suma-(m5*5)-(m2*2)));
    return [m5, m2, m1, (m1+m2+m5)];
}

console.log(`Norint gauti ${suma} sumą litais, mums reikės ${monetos(suma)[0]} monetų po 5 lt, ${monetos(suma)[1]} monetų po 2 litus ir ${monetos(suma)[2]} monetų po 1 litą. Viso monetų  skaičius ${monetos(suma)[3]}`);