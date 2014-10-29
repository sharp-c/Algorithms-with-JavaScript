/**
 * author: Tong Zeng
 * Date: 10/29/14
 * Time: 3:52 PM
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