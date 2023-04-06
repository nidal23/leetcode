var isPalindrome = function(x) {
    let arr = x.toString().split('')
    let count = 0;

    for(let i=0; i< arr.length/2; i++){
        if(arr[i]=== arr[arr.length-i-1])
        {
            count++
        }
    }

    if(count>= arr.length/2) {
        return true
    } else return false
};