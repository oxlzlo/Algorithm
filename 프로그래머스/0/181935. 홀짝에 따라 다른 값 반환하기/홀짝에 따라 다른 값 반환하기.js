function solution(n) {
    let evenNumber = 0;
    let oddNumber = 0;
    
    for (let i=1; i<=n; i++) {
        if (i%2 === 0) {
            evenNumber += i*i;        
        } else {
            oddNumber += i;
        }
    }    
    
    return (n%2 === 0) ? evenNumber : oddNumber;
}