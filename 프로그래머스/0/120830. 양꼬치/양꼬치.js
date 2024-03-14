function solution(n, k) {
//     if (n>=10) {
//         k = k - Math.floor(n/10)
//     }
    
//     let answer = n*12000 + k*2000;
    
//     return answer;
    
    return n*12000 + (k - Math.floor(n/10))*2000
    
}

