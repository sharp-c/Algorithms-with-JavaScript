/**
 * author: Tong Zeng
 * Date: 10/29/14
 * Time: 4:49 PM
 *
 */


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