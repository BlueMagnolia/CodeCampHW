// let arr = [85,3,6,10,30,60,36]
// let target = 35;

// start = 0;
// end = arr.length-1;

// while ( start < end ) {
//     mid = (start+end)/2;
//     if (arr[mid] = target) {console.log('Found!')}
//     if (arr[mid] = target) {end = mid - 1;}
//     else end = start + 1
// }
// console.log('Not Found...')

function factorial(num) {
    if (num == 0) return 1
    console.log(num);
    return num * factorial(num-1)
}
// factorial(3);

// LAB 6
function GCD(num1,num2) {
    if(num2 == 0) return num1
    return GCD(num2,num1%num2)
    // if (num1 < num2) num = num2%num1;
    // if (num1 > num2) num = num1%num2;
    // console.log(`GCD is ${num}`)
}
// console.log(GCD(108,32))

// LAB 7
