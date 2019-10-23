// 1 | Create new array of {0,1,2,3,4,5,6,7,8,9,10}
// let nums1 = new Array();
// for (let i=0; i<11; i++) {
//     nums1[i] = i;
// }
// console.log(nums1);
// 1 | Deleted even number
// let numOdd = 0;
// let k=0;
// let numOdd = nums1.filter(function odd(num) {
//     return num%2;
// });
// console.log(numOdd);
// 2 | Create new array of {0,9,1,8,2,7,3,6,4,5}
// let nums2 = [0, 9, 1, 8, 2, 7, 3, 6, 4, 5];
// console.log(nums2.sort());
// 3 | Create new array of {0,1,2,3,4,5,6,7,8,9,10}
let nums1 = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
let newOdd = [];
function oddFind(num) {
    
    let k=0;
    for (i = 0; i < num.length; i++) {
    
        if (num[i]%2 !== 0) {
            return newOdd.push(num);
        }
}
}
// oddFind(nums1);
// console.log(newOdd);

// 4 | Create map recore name is key, age is {{Adam:28},{Sophie:22},{Aorum,13}} 
let testMap = new Map([['Adam',28],['Sophie',22],['Aorum',13]]);
// console.log(testMap.get('Adam')); // 28
// console.log(testMap.get('Sophie')); // 22
// console.log(testMap.get('Aorum')); //13

// 5 | Create array of {0,9,1,8,2,7,3,6,4,5} use sort w/o sort

function bubbleSort(array) {
    let done = false;
    while (!done) {
        done = true;
        for (let i=1; i<array.length; i += 1) {
            if (array[i-1]>array[i]) {
                done = false;
                let tmp = array[i-1];
                array[i-1] = array[i];
                array[i] = tmp;
            }
        }
    }
    return array;
}
let num2 = [0, 9, 1, 8, 2, 7, 3, 6, 4, 5];
console.log(bubbleSort(num2));
