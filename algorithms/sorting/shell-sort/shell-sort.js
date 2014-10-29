/**
 * author: Tong Zeng
 * Date: 10/29/14
 * Time: 4:48 PM
 *
 */



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
