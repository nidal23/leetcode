var threeSum = function (nums) {
    let targetSum;
    const triplets = [];
    nums = nums.sort((a, b) => a - b)
    for (let i = 0; i < nums.length; i++) {
        targetSum = -nums[i]

        if (i > 0 && nums[i] === nums[i - 1]) {
            continue;
        }

        getSum(nums, targetSum, i + 1, triplets)
    }

    return triplets

};

const getSum = (nums, targetSum, leftPointer, triplets) => {

    let rightPointer = nums.length - 1

    while (leftPointer < rightPointer) {
        const currentSum = nums[leftPointer] + nums[rightPointer]
        if (currentSum === targetSum) {
            triplets.push([-targetSum, nums[leftPointer], nums[rightPointer]])
            leftPointer++
            rightPointer--

            while (leftPointer < rightPointer && nums[leftPointer] === nums[leftPointer - 1]) {
                leftPointer++
            }
            while (rightPointer > leftPointer && nums[rightPointer] === nums[rightPointer + 1]) {
                rightPointer--
            }
        }
        else if (currentSum > targetSum) {
            rightPointer--
        } else if (currentSum < targetSum) {
            leftPointer++
        }
    }
}

console.log(threeSum([-3, 0, 1, 2, -1, 1, -2]))