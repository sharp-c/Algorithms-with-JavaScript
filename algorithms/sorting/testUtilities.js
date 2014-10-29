/**
 * author: Tong Zeng
 * Date: 10/11/14
 * Time: 1:15 PM
 *
 */

function ArraySortUtility(numOfElements) {
    this.dataArr = [];
    this.pos = 0;
    this.numOfElements = numOfElements;
    this.insert = insert;
    this.toString = toString;
    this.clear = clear;
    this.setData = setData;
    this.swap = swap;
}

ArraySortUtility.prototype = {
    constructor: ArraySortUtility,
    bubbleSort: bubbleSort,
    selectionSort: selectionSort,
    insertionSort: insertionSort,
    shellSort: shellSort,
    shellSort2: shellSort2,
    shellSort3: shellSort3,
    mergeSort:mergeSort,
    quickSort:quickSort,
    quickSort2:quickSort2
};

function setData() {
    for (var i = 0; i < this.numOfElements; i++) {
        this.dataArr[i] = Math.floor(Math.random() * (this.numOfElements + 1));
    }
}

function clear() {
    this.dataArr.length = 0;
}

function insert(element) {
    this.dataArr[this.pos++] = element;
}

function toString() {
    var restr = "";
    for (var i = 0; i < this.dataArr.length; i++) {
        restr += this.dataArr[i] + " ";
        if (i > 0 && i % 10 == 0) {
            restr += "\n";
        }
    }
    return restr;
}

/**
 * 交换两个元素位置
 * @param arr 数组
 * @param index1
 * @param index2
 */
function swap(arr, index1, index2) {
    var temp = arr[index1];
    arr[index1] = arr[index2];
    arr[index2] = temp;
}

/**
 * 冒泡排序简单实现，在原数组原地排序
 * @param inputArr
 * @returns {*}
 */
function bubbleSort(inputArr) {
    var outer, inner;
    for (outer = 0; outer < inputArr.length; outer++) {
        for (inner = 0; inner < inputArr.length - outer; inner++) {
            if (inputArr[inner] > inputArr[inner + 1]) {
                swap(inputArr, inner, inner + 1);
            }
        }
    }
    return inputArr;
}


/**
 * 选择排序，在待排序数组原地排序
 * @param inputArr
 * @returns {*}
 */
function selectionSort(inputArr) {
    var outer, maxIndex,inner;
    for (outer = 0; outer < inputArr.length; outer++) {
        maxIndex = 0;
        for (inner = 0; inner < inputArr.length - outer; inner++) {
            if (inputArr[inner] > inputArr[maxIndex]) {
                maxIndex = inner;
            }
        }
        swap(inputArr, maxIndex, inputArr.length- outer - 1);
    }
    return inputArr;
}


/**
 * 插入排序，在待排序数组原地排序
 * @param inputArr
 * @returns {*} 返回排序后的数组
 */
function insertionSort(inputArr) {
    var inner, temp, outer;
    for (outer = 0; outer < inputArr.length; outer++) {
        temp = inputArr[outer];
        for (inner = outer; inner > 0 && inputArr[inner - 1] > temp; inner--) {
            inputArr[inner] = inputArr[inner - 1];
        }
        inputArr[inner] = temp;
    }
    return inputArr;
}


/**
 * 希尔排序，在待排序数组原地排序，简化写法
 * @param inputArr
 * @returns {*}
 */
function shellSort3(inputArr) {
    var g, outer, inner, gap, arrayLength,temp;
    arrayLength = inputArr.length;
    for (gap = parseInt(arrayLength / 2); gap > 0; gap = parseInt(gap / 2)) {
        // 对某一个步进内的每一个分组依次进行插入排序
        for (g = 0; g < gap; g++) {
            for (outer = g + gap; outer < arrayLength; outer += gap) {
                temp = inputArr[outer];
                for (inner = outer; inner >= g+gap && inputArr[inner - gap] > temp; inner -= gap) {
                    inputArr[inner] = inputArr[inner - gap];
                }
                inputArr[inner] = temp;
            }
        }
    }
    return inputArr;
}


/**
 * 希尔排序，在待排序数组原地排序，按照定义来写，相对容易理解一点
 * @param inputArr
 * @returns {*}
 */
function shellSort2(inputArr) {
    var outer, inner, gap, arrayLength,temp;
    arrayLength = inputArr.length;

    gap = 1;
    while (gap < arrayLength / 3) {
        gap = 3 * gap + 1;
    }

    for (; gap > 0; gap = (gap - 1) / 3) {
        // 对某一个步进内的每一个分组依次进行插入排序,交换元素时使用临时变量
        for (outer = gap; outer < arrayLength; outer++) {
            temp = inputArr[outer];
            for (inner = outer; inner >=gap && inputArr[inner - gap] > temp; inner -= gap) {
                inputArr[inner] = inputArr[inner - gap];
            }
            inputArr[inner] = temp;
        }
    }
    return inputArr;
}

/**
 * 希尔排序，在待排序数组原地排序，按照定义来写，相对容易理解一点
 * @param inputArr
 * @returns {*}
 */
function shellSort(inputArr) {
    var outer, inner, gap, arrayLength;
    arrayLength = inputArr.length;

    gap = 1;
    while (gap < arrayLength / 3) {
        gap = 3 * gap + 1;
    }

    for (; gap > 0; gap = (gap - 1) / 3) {
        // 对某一个步进内的每一个分组依次进行插入排序，使用swap函数交换两个变量
        for (outer = gap; outer < arrayLength; outer++) {
            for (inner = outer; inner >=gap && inputArr[inner - gap] > inputArr[inner] ; inner -= gap) {
                swap(inputArr,inner-gap,inner);
            }
        }
    }
    return inputArr;
}


/**
 * 将两个有序数组合并成新数组
 * @param leftArr
 * @param rightArr
 * @returns {Array}
 */
function mergeArray(leftArr,rightArr){
    var result=[];
    var leftIndex= 0,
        rightIndex= 0,
        leftLength=leftArr.length,
        rightLength=rightArr.length;
    while(leftIndex<leftLength&&rightIndex<rightLength){
        if(leftArr[leftIndex]<rightArr[rightIndex]){
            result.push(leftArr[leftIndex++]);
        }else{
            result.push(rightArr[rightIndex++]);
        }
    }
    return result.concat(leftArr.slice(leftIndex)).concat(rightArr.slice(rightIndex));
}

/**
 * 归并排序的递归实现
 * @param inputArr
 * @returns {*}
 */
function mergeSort(inputArr){
    if(inputArr.length < 2){
        return inputArr;
    }

    var middle=Math.floor(inputArr.length / 2),
        leftArr = inputArr.slice(0, middle),
        rightArr = inputArr.slice(middle);
    return mergeArray(mergeSort(leftArr),mergeSort(rightArr));
}



/**
 * 一种快速排序算法的实现, 原地排序
 * @param inputArr The array to be sort
 * @param left start pos
 * @param right end pos
 * @returns {*} sorted array
 */
function quickSort(inputArr,left,right){
    if(inputArr.length>1&&left<right){
        //console.log(inputArr.toString());
        var pivot = inputArr[left],
            i = left,
            j = right;
        while (i < j) {
            while (i < j && inputArr[j] >= pivot) {
                j--;
            }
            if (i < j) {
                inputArr[i] = inputArr[j];
                i++;
            }

            while (i < j && inputArr[i] < pivot) {
                i++;
            }
            if (i < j) {
                inputArr[j] = inputArr[i];
                j--;
            }
        }
        inputArr[i] = pivot;
        quickSort(inputArr, left, i - 1);
        quickSort(inputArr, i + 1, right);
    }
    return inputArr;
}


/**
 * 另一种 快速排序算法实现，比较容易理解，但是需要花费额外的临时空间,并且花费时间较长，1000000元素排序花费130ms，相比 in place 版本的22ms，慢了很多
 * @param inputArr 待排序
 * @returns {*}
 */
function quickSort2(inputArr) {
    if (inputArr.length <= 1) {
        return inputArr;
    }
    var pivotIndex = Math.floor(inputArr.length / 2);
    //取出枢轴元素
    var pivot = inputArr.splice(pivotIndex, 1)[0];
    //小于枢轴元素的存在左边
    var left = [];
    //大于枢轴元素的存在右边
    var right = [];
    for (var i = 0; i < inputArr.length; i++) {
        if (inputArr[i] < pivot) {
            left.push(inputArr[i]);
        } else {
            right.push(inputArr[i]);
        }
    }
    //递归调用，拼接
    return quickSort2(left).concat([pivot], quickSort2(right));
}





/*
var myNums = new ArraySortUtility(100000);
myNums.setData();
var bubbleSortStart = new Date().getTime();
myNums.bubbleSort(myNums.dataArr);
var bubbleSortStop = new Date().getTime();
console.log("bubbleSort 排序100000元素耗时：" + (bubbleSortStop - bubbleSortStart) + "ms");
console.log(myNums.toString());
myNums.clear();
*/





/*
var myNums = new ArraySortUtility(100000);
myNums.setData();
var selectionSortStart = new Date().getTime();
myNums.selectionSort(myNums.dataArr);
var selectionSortStop = new Date().getTime();
console.log("selectionSort 排序100000元素耗时：" + (selectionSortStop - selectionSortStart) + "ms");
console.log(myNums.toString());
myNums.clear();
*/




/*
var myNums = new ArraySortUtility(100000);
myNums.setData();
var insertionSortStart = new Date().getTime();
myNums.insertionSort(myNums.dataArr);
var insertionSortStop = new Date().getTime();
console.log("insertionSort 排序100000元素耗时：" + (insertionSortStop - insertionSortStart) + "ms");
console.log(myNums.toString());
myNums.clear();
*/





/*
var myNums = new ArraySortUtility(100000);
myNums.setData();
var mergeSortStart = new Date().getTime();
myNums.dataArr=myNums.mergeSort(myNums.dataArr);
var mergeSortStop = new Date().getTime();
console.log("mergeSort 排序100000元素耗时：" + (mergeSortStop - mergeSortStart) + "ms");
console.log(myNums.toString());
myNums.clear();
*/


/*
 var myNums = new ArraySortUtility(100000);
 myNums.setData();
 var shellSortStart = new Date().getTime();
 myNums.shellSort(myNums.dataArr);
 var shellSortStop = new Date().getTime();
 console.log("shellSort 排序100000元素耗时：" + (shellSortStop - shellSortStart) + "ms");
 console.log(myNums.toString());
 myNums.clear();
*/


/*
 var myNums = new ArraySortUtility(100000);
 myNums.setData();
 var quickSortStart = new Date().getTime();
 myNums.dataArr=myNums.quickSort2(myNums.dataArr);
 var quickSortStop = new Date().getTime();
 console.log("quickSort 排序100000元素耗时：" + (quickSortStop - quickSortStart) + "ms");
 console.log(myNums.toString());
 myNums.clear();
 */



var myNums = new ArraySortUtility(100000);
myNums.setData();
var quickSortStart = new Date().getTime();
myNums.quickSort(myNums.dataArr,0,myNums.dataArr.length-1);
var quickSortStop = new Date().getTime();
console.log("quickSort 排序100000元素耗时：" + (quickSortStop - quickSortStart) + "ms");
console.log(myNums.toString());
myNums.clear();







