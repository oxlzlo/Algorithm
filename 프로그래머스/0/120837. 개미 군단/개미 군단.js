function solution(hp) {
    let answer = 0;
    let leftHp = hp;

    answer += Math.floor(leftHp / 5);
    leftHp %= 5;
    
    answer += Math.floor(leftHp / 3);
    leftHp %= 3;
    
    answer += leftHp

    return answer;
}