function solution(a, b) {
    let firstAnswer = Number(a.toString() + b.toString());
    let secondAnswer = 2 * a * b;
    
    let answer = firstAnswer >= secondAnswer ? firstAnswer : secondAnswer
    
    return answer;
}