function solution(my_string, letter) {
    let answer = my_string.replaceAll(letter, '');
    
    // for (let i=0; i<my_string.length; i++) {
    //     if (my_string[i] !== letter) {
    //         answer += my_string[i]
    //     }
    // }
    
    
    
    return answer;
}