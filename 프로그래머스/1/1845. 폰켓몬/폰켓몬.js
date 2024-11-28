function solution(nums) {    
    const maxNum = nums.length / 2;
    
    const chosenNum = new Set();
    
    for (let i=0; i<nums.length; i++) {
        chosenNum.add(nums[i])
    }
    
    if (chosenNum.size >= maxNum) {
        return maxNum;
    }
    
    console.log(chosenNum)
    
    return chosenNum.size;
}