function uniteUnique(...arr) {
    let newArr = []


    for (let i = 0; i < arr.length; i++) {
        for (let j = 0; j < arr[i].length; j++) {
            if (newArr.indexOf(arr[i][j]) === -1) {
                newArr.push(arr[i][j])
            }
        }

    }
    console.log(newArr)

    return newArr;
}

uniteUnique([1, 3, 2], [5, 2, 1, 4], [2, 1]);
uniteUnique([1, 2, 3], [5, 2, 1, 4], [2, 1], [6, 7, 8])
uniteUnique([1, 3, 2, 3], [5, 2, 1, 4], [2, 1])