export function sum(...nums: Array<any>): number {

    return nums.reduce((acc, el) => acc + el)
}

export function getTriangleType(a: number, b: number, c: number): any {
    if (a === b && a === c && b === c) {
        return '10'
    }
}

export function getSum(number: number): number {
    return number.toString()
        .split('')
        .map(el => Number(el))
        .reduce((acc, i) => acc + i)
}

export const isEvenIndexSumCreater = (arr: Array<any>): boolean => {
    let a = 0
    let b = 0
    for (let i = 0; i < arr.length; i = i + 2) {
        a += arr[i];
    }
    for (let i = 0; i < arr.length; i++) {
        b += arr[i];
    }
    return a > b ? true : false
    // return a>b

}

export function getBanknoteList(amountOfMoney: number): Array<number> {
    const banknotes = [1000, 500, 100, 50, 20, 10, 5, 2, 1]
let array=[]
    for (let i = 0; i < banknotes.length; i++) {
        if(amountOfMoney-banknotes[i]>0){
            array.push(banknotes[i])
        }
        
    }
    return [1]
}
