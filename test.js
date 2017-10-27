const arr1 = [{x: 1, y: 1}, {x: 3, y: 3}, {x:5, y: 5}]

const arr2 = []
let temp = {}
for (let i = 0; i < arr1.length; i ++) {
    // let temp = {}
    temp.x = arr1[i].x
    temp.y = arr1[i].y
    arr2.push(temp)
}
console.log(arr2)