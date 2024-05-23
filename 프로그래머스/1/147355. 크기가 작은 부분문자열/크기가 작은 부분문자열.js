function solution(t, p) {
    let answer = 0;
    
    const newT = [];
    for (let i=0; i<t.length; i++) {
        const string = t.slice(i, i + p.length);
        if (string.length === p.length) {
            newT.push(string);
        }
    }
    
    answer = newT.filter((num) => num <= p);
    
    
    
    return answer.length;
}