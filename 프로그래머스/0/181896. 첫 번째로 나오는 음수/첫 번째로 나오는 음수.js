function solution(num_list) {
    let answer = 0
    
    const negaNum = (num_list) => num_list < 0;
    if (negaNum) {
        answer = num_list.findIndex(negaNum);
    } else {
        answer = -1
    }
    
    return answer
    
}