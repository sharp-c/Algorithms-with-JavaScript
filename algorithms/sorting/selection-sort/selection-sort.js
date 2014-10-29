/**
 * author: Tong Zeng
 * Date: 10/29/14
 * Time: 4:14 PM
 *
 */



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
