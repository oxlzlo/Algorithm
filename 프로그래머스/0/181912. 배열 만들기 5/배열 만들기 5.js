function solution(intStrs, k, s, l) {
    const newArr = [];
    
    for (let i=0; i<intStrs.length; i++) {
        const strs = intStrs[i].slice(s, s+l);
        newArr.push(strs);
    }
    
    const result = newArr.filter(newStrs => newStrs > k);
    
    const answer = result.map(Number)
    
    return answer;
}