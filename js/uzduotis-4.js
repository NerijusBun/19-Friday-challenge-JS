/*
Parašykite programą, kuri suskaičiuotų , 
kiek duotas skaičius num turi lyginių ir nelyginių skaitmenų .
@param {number} num            @example:
                               63258 => ‘3 skaičiai lyginiai, 2 nelyginiai’ 
*/

function number (num) {
    let skaiciuSeka = num.toString();
    let even = 0;
    let odd = 0;
    for (let i = 0; i < skaiciuSeka.length; i++) { 
        if (skaiciuSeka[i] % 2 === 0) { 
            even++;
        } else { 
            odd++;
        }
    }
    return (num + ' -> ' + even + ' skaiciai lyginiai, ' + odd + ' nelyginiai.');
}

console.log(number(63258));