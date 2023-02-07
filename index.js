//Напишіть функцію min(a, b), яка повертає менше з двох чисел a та b.

function min(a, b) {
    if (a > b) {
        return b
    } else {
        return a
    }
}

console.log(min(15, 10))

//Напишіть функцію pow(x, n), яка повертає число x

function pow(x, n) {
    return x ** n
}

console.log(pow(3, 2));


//Перепишіть функцію, використовуючи 1) '?'

function checkAge(age) {
    return (age > 18) ? true : confirm('Батьки дозволили?');
}

console.log(checkAge(13))

//Перепишіть функцію, використовуючи 2) '||' або '&&'

function checkAgeTwo(age) {
    return (age >= 18) == true || (age < 18) == confirm('Батьки дозволили?')
}

console.log(checkAgeTwo(19))