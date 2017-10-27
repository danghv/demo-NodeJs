//1. Bubble Sort
function bubbleSort(arr){
    let temp;
    for (let outer = arr.length; outer >= 2; outer--) {
        for (let inner = 0; inner < outer - 1; inner++) {
            if (arr[inner] > arr[inner + 1]) {
                temp = arr[inner];
                arr[inner] = arr[inner + 1];
                arr[inner + 1] = temp;
            }
        }
    }
    return arr;
}
// console.log(bubbleSort([29, 11, 42, 31]));

//2. Selection Sort

function selectionSort(arr){
    let min;
    let temp;
    for (let outer = 0; outer < arr.length - 1; outer ++) {
        min = outer;
        for (let inner = outer + 1; inner < arr.length; inner ++){
            if (arr[inner] < arr[min]) {
                min = inner;
            }
        }
        //swap 
        temp = arr[min];
        arr[min] = arr[outer];
        arr[outer] = temp;
    }
    return arr;
}

// console.log(selectionSort([72, 54, 59, 30, 31, 78, 2, 77, 82, 72]));
//3. Insertion Sort

function insertionSort(arr){
    let temp, inner;
    for (let outer = 1; outer < arr.length; outer ++){
        temp = arr[outer];
        inner = outer;
        while(inner > 0 && (arr[inner - 1] > temp)){
            arr[inner] = arr[inner - 1];
            inner --;
        }
        arr[inner] = temp;
    }
    return arr;
    
}
console.log(insertionSort([72, 54, 59, 30, 31, 78, 2, 77, 82, 72]));