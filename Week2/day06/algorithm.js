let num1 = 2;
let num2 = 3;
let num3 = 4;
let num4 = '1AF3';
let num5 = '243';
let num6 = 'GGG';
let num7 = 4;

// LAB 1
// checkNumType(num1);
// checkNumType(num2);
// checkNumType(num4);
// checkNumType(num5);
// checkNumType(num6);

function checkNumType(num) {
    if (num == '') {
        num = hexToDec(num);
    }
    if (num % 2 == 0) {
        console.log(`${num} is even`)
    } else {
        console.log(`${num} is odd`)
    }
}

function hexToDec(num) {
    let numHex = Array.from(num)
    let numDec = new Map();
    numDec.set('0',0)
        .set('1',1)
        .set('2',2)
        .set('3',3)
        .set('4',4)
        .set('5',5)
        .set('6',6)
        .set('7',7)
        .set('8',8)
        .set('9',9)
        .set('A',10)
        .set('B',11)
        .set('C',12)
        .set('D',13)
        .set('E',14)
        .set('F',15);
    return numDec.get(numHex[numHex.length[n - 1]]);
}

// function nanoToDec (num) {

// }

// LAB 2
// diffNum(num1,num2)

function diffNum(num1,num2) {
    console.log(`Math abs | ${Math.abs(num1 - num2)}`);
    if (num1-num2 < 0) {
        console.log(`Math w/o abs | ${-(num1-num2)}`)
    } else {
        console.log(`Math w/o abs | ${(num1 - num2)}`)
    }
}

// LAB 3
maxNumSort(3,4,5);

function maxNumSort(num1,num2,num3) {
    let arr=[num1,num2,num3];
    let max = num1;
    for (i=0; i<3; i++) {
        max = (max < arr[i]) ? arr[i] : max;
    }
    console.log(max);
}

//  LAB 4
// loopNum(num3); // 4
// woLoopNum(num3);

function loopNum(num) {
    let loopNumI = 0;
    for (i=1; i<=num; i++) {
        loopNumI = loopNumI + i;
    }
    console.log(`Num loop | ${loopNumI}`);
}

function woLoopNum(num) {
    console.log(`Num w/o loop | ${(num/2)*(1+num)}`)
}

// LAB 5
// decToBi(num7);
// biToDec(bi);

function decToBi(num) {
    let numBi = [];
    while (this.num == 0) {
        numBi.push (this.num%2);
    }
    numBi.reverse()
    // numBi.join('')
    console.log(`Decimal to binary | ${numBi}`);
    return parseInt(numBi)
}

function biToDec(num) {
    let numDec = 0;
    for (let i=0; i<num.length; i++) {
        numDec = (numDec*2)+parseInt(num[i])
    }
    console.log(`Binary to decimal | ${numDec}`)
}

// LAB 6
// let num8 = 3;
// console.log(primeNumSqrt(num8));

// function primeNum(num) {
//     if ( num%2 == 0 || num%3 == 0 || num%5 == 0 || num%7 == 0 || num%11 == 0 || num%13 == 0 ) {
//         recheckNum(num);
//     } else {
//         console.log(false);
//     }
// }
// function recheckNum(num) {
//     if (num == 2 || num == 3 || num == 5 || num == 7 || num == 11 || num == 13 ) {
//         console.log(true);
//     }
// }

function primeNumSqrt(num) {
    if (num%2 == 0 || num%3 == 0) {
        return false
    }
    for(let i=2; i<Math.sqrt(num); i++) {
        if(num%i == 0)
        {
            f=1; break;
        }
        else f = 0;
    }
    if (f==0) return true
    if (f==1) return false
}

// LAB 7
// let num9 = [3,5,4,2,1]
// outputNum(num9);

function outputNum(num) {
    let sum = 0;
    let max = 0;
    let index = 0;
    for (i=0; i<num.length; i++) {
        sum = sum + num[i];
        if (max<num[i]) {
            max = num[i];
            index = i;
        }
    }
    console.log(`Sum | ${sum}  Max | ${max}  Index | ${index}`)
}

// LAB 8
// let num10 = [2,3,8,6]
// let num10Out = 10;
// console.log(bigO(num10,num10Out));

function bigO(num,numOut) {
    for (i=0; i<num.length; i++) {
       for (j=0; j<num.length; j++) {
           if (num[i]+num[j] == numOut) {
               return true;
           }
       }
        
    }
}