var removeElement = function (nums, val) {
    let k = 0;
    for (let i = 0; i < nums.length; i++) {
        if (nums[i] !== val) {
            nums[k] = nums[i]
            k = k + 1
        }
    }

    return k
};

// Change the array nums such
// that the first k elements of
// nums contain the elements which
//  are not equal to val.
//  The remaining elements of nums
//  are not important as well as
//  the size of nums.