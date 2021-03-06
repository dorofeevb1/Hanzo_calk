const digits = {
    Z: 2000,
    M: 1000,
    CM: 900,
    D: 500,
    CD: 400,
    C: 100,
    XC: 90,
    L: 50,
    XL: 40,
    X: 10,
    IX: 9,
    VIII: 8,
    VII: 7,
    VI: 6,
    V: 5,
    IV: 4,
    III: 3,
    II: 2,
    I: 1
}
const stringValidation = string => {  // Точка начала Ниже строкой Глобально добавили исключение в квадратных скобках
    let pattern = /[^IVX0-9+*\/\-\s]/g
    if ([...string.matchAll(pattern)].length >= 1) {  // Проверка
        throw new Error ("В строке есть некорректные симвылы")
    }

    pattern = /[+*\/-]{2,}/g
    if ([...string.matchAll(pattern)].length >= 1) {
        throw new Error ("Строка указана некорректно, в строке более одного операнда для вычисления")
    }
    return true
}
const getOperation = string => {  // 2 Пункт
    return [...string.match(/[+*\/-]/g)][0]
}
const getNums = string => { // Промежуточные между 3-4
    // let nums = string.split(/[+*\/-]/g).map(num.trim())
    return nums = string.split(/[+*\/-]/g).map(num => num.trim())
    // console.log(nums)
}
const romanToArabic = string => {  // 5 я Точка
    return string.split('').reduce((prevVal, currValue, i =  0, arr) => {
        debugger
        const [a,b,c] = [
            digits[arr[i]],
            digits[arr[i+1]],
            digits[arr[i+2]]
        ]
        if (b && c && a <= b && b < c) {
            throw new Error ("Bug Nums")
        }
        return a > b ? prevVal - a:prevValue + a // ???
    }, 0)
}
const isRoman = string => {  // 4 Я точка Проверка на Римские
    const pattern = /^[IVX]+$/
    let arrNums = string.split(/[+*\/-]/g).map(num => num.trim())
    // console.log('Is Roman arrNums', arrNums)
    const countRoman = arrNums.reduce((prevVal, currValue) => prevVal + pattern.test(currValue), 0)
    if (countRoman===1) {
        throw new Error ("Оба числа должны быть римскими")
    } else if (countRoman===2) {
        // arrNums = arrNums.map(num => romanToArabic(num))
        // console.log(arrNums)
        return true
    }
    // return arrNums
}
const sum = nums => {
    return nums.reduce((a,b) => a + b)
}
const multpl = nums => {
    return nums.reduce((a,b) => a * b)
}
const division = nums => {
    return nums.reduce((a,b) => a / b)
}
const subsrtaction = nums => {
    return nums.reduce((a,b) => a - b)
}
const checkOperation = (str, nums) => {
    let result;
    if (str === '+'){
        result = sum(nums)
    } else if (str === '*') {
        result = multpl(nums)
    } else if (str === '/') {
        result = division(nums)
    } else if (str === '*') {
        result = subsrtaction (nums)}
    return result
}
const calculator = string => {  // 3 я Точка
    const isValid = stringValidation(string)
    const operation = getOperation(string)
    let nums = getNums(string)
    const roman = isRoman(string)
    if (roman) {
        nums = nums.map(num => romanToArabic(num))
    }
    nums = nums.map(num => +num)
    // console.log(nums)
    return checkOperation(operation, nums)
}
//console.log(calculator ("1+1"));
// function calculator(string){} This Like =>
//console.log(calculator("1/1"))
//console.log(calculator("X/V"))
//Сложение арабских чисел
console.log(calculator("1+1"))
console.log(calculator("1+2"))
console.log(calculator("4+5"))
console.log(calculator("10+10"))
//Вычитание арабских чисел
// console.log(calculator("1-1"))
// console.log(calculator("1-2"))
// console.log(calculator("4-"))
// console.log(calculator("10-10"))
//Умножение арабских чисел
// console.log(calculator("1*1"))
// console.log(calculator("1*2"))
// console.log(calculator("4*5"))
// console.log(calculator("10*10"))
//Деление арабских чисел
// console.log(calculator("1/1"))
// console.log(calculator("1/2"))
// console.log(calculator("4/5"))
// console.log(calculator("10/10"))


