/**
 * author: Tong Zeng
 * Date: 10/27/14
 * Time: 8:18 PM
 *
 */


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
以下是大神 Nicholas C. Zakas 写的版本，在上也传播得最广
 */
function swap(items, firstIndex, secondIndex){
    var temp = items[firstIndex];
    items[firstIndex] = items[secondIndex];
    items[secondIndex] = temp;
}

function partition(items, left, right) {

    var pivot   = items[Math.floor((right + left) / 2)],  // pivot value is middle item
        i       = left,     // starts from left and goes right to pivot index
        j       = right;    // starts from right and goes left to pivot index


    // while the two indices don't match
    while (i <= j) {

        // if the item on the left is less than the pivot, continue right
        while (items[i] < pivot) {
            i++;
        }

        // if the item on the right is greater than the pivot, continue left
        while (items[j] > pivot) {
            j--;
        }

        // if the two indices still don't match, swap the values
        if (i <= j) {
            swap(items, i, j);

            // change indices to continue loop
            i++;
            j--;
        }
    }

    // this value is necessary for recursion
    return i;
}

/**
 * A quicksort implementation in JavaScript. The array
 * is sorted in place.
 * @param {Array} items An array of items to sort.
 * @return {Array} The sorted array.
 */
function quickSort(items, left, right) {

    var index;

    // performance - don't sort an array with zero or one items
    if (items.length > 1) {

        // fix left and right values - might not be provided
        left = typeof left != "number" ? 0 : left;
        right = typeof right != "number" ? items.length - 1 : right;

        // split up the entire array
        index = partition(items, left, right);

        // if the returned index
        if (left < index - 1) {
            quickSort(items, left, index - 1);
        }

        if (index < right) {
            quickSort(items, index, right);
        }

    }

    return items;
}
