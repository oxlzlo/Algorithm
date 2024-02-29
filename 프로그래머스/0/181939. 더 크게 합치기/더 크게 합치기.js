function solution(a, b) {
    let num1 = Number(a.toString() + b.toString());
    let num2 = Number(b.toString() + a.toString());
    
    if (num1 >= num2) {
        return num1
    }
        
    return num2;
}