function checkSum(arr, sum) {
    const arr1 = []
    for (let i = 0; i< arr.length; i++) {
        if (arr1.indexOf(arr[i]) > -1) {
            return true
        } else {
            arr1.push(sum - arr[i])
        }
    }
    return false;
}

console.log(checkSum([1, 3, 2, 6, 4, 7, 5, 8, 9, 10], 9))
console.log(checkSum([1, 3, 2, 6, 4, 7, 5, 8, 9, 10], 99))
console.log(checkSum([1, 3, 2, 6, 4, 7, 5, 8, 9, 10], 19))
console.log(checkSum([1, 3, 2, 6, 4, 7, 5, 8, 9, 10], 12))