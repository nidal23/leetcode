var letterCombinations = function (digits) {
    if (digits.length === 0) {
        return []
    }
    const kb = ["", "", "abc", "def", "ghi", "jkl", "mno", "pqrs", "tuv", "wxyz"];
    let maps = {}
    for (let i = 0; i < kb.length; i++) {
        if (kb[i].length > 0) {
            kb[i] = kb[i].split('')
        }
    }
    kb.map((item, index) => maps[index] = item)
    let iterate = (nums) => {
        const res = []
        if (nums.length === 1) return maps[nums];
        let first = nums.slice(0, 1)
        let others = iterate(nums.slice(1))

        for (let i = 0; i < maps[first].length; i++) {
            for (let j = 0; j < others.length; j++) {
                res.push(maps[first][i] + others[j])
            }
        }
        return res
    }




    return iterate(digits);
};