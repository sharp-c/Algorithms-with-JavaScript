/**
 * author: Tong Zeng
 * Date: 10/29/14
 * Time: 4:06 PM
 *
 */

/**
 * 插入排序，在原数组原地排序
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