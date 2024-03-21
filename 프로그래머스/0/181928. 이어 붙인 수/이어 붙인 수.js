function solution(num_list) {    
    // let odd = num_list.filter(num => num%2 !== 0)
    // let even = num_list.filter(num => num%2 === 0)
    
    let odd = [];
    let even = [];
    
    for (let i=0; i<num_list.length; i++) {
        if(num_list[i]%2 !== 0) {
            odd.push(num_list[i])
        } else {
            even.push(num_list[i])
        }
    }
    
    let oddSum = odd.reduce((acc, cur) => {
        return acc + String(cur)
    })
    let evenSum = even.reduce((acc, cur) => {
        return acc + String(cur)
    })
    
    return Number(oddSum) + Number(evenSum)
   
}