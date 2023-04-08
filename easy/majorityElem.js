//Booyer-Moore majority voting algo


var majorityElement = function (nums) {
    let candidate;
    let count = 0;

    for (const num of nums) {
        if (count === 0) {
            candidate = num;
        }
        count += (num === candidate) ? 1 : -1
    }

    return candidate
};

//output struture for the array [4,3,3,2,3,3,4]

// num : 4
// candidate : 4
// count : 1
// num : 3
// count : 0
// num : 3
// candidate : 3
// count : 1
// num : 2
// count : 0
// num : 3
// candidate : 3
// count : 1
// num : 3
// count : 2
// num : 4
// count : 1