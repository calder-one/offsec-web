function removeindexed(array1, num1, string1){
    let step1 = array1.sort()
    let step2 = step1.splice(num1, 1)
    step1.push(string1)
    console.log(step1)
}
removeindexed(["this", "is", "a", "test"], 3, "last")