function solution(a, b) {
    let firstAnswer = Number(String(a)+String(b));
    let secondAnswer = 2 * a * b;
    
    let answer = firstAnswer >= secondAnswer ? firstAnswer : secondAnswer
    
    return answer;
}