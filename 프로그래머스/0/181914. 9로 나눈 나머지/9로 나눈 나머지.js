function solution(number) {
    let numArr = number.split('');
    let sum = numArr.reduce((acc, cur) => {
        return Number(acc)+Number(cur)
    }, 0)
    
    return sum%9
}