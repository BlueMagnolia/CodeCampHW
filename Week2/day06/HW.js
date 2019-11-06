// Easy algorithm | 01-10
// Editor: Nutthida Yusenas
// Date: 31 Oct 2020

// 01 | Calculate Point
// calPoint(25,25,30)

function calPoint(a,b,c) {
    let sum = a+b+c;
    return  (a<0 || a>30) ? console.log('New input | a'):
            (b<0 || b>30) ? console.log('New input | b'):
            (c<0 || c>40) ? console.log('New input | c'): 
            (sum<0 || sum>100) ? console.log('Error'):
            (sum >= 80 && sum <= 100) ? console.log('A'):
            (sum >= 75 && sum <= 79) ? console.log('B+') :
            (sum >= 70 && sum <= 74) ? console.log('B') :
            (sum >= 65 && sum <= 69) ? console.log('C+') :
            (sum >= 60 && sum <= 64) ? console.log('C') :
            (sum >= 55 && sum <= 59) ? console.log('D+') :
            (sum >= 0 && sum <= 49) ? console.log('D') : console.log('Error')
}

// 02 | Min Max
// let arr = [5,1,2,3,4,5];
const test = (arr) => {
    let max=arr[1], min=arr[1];
    // console.log(arr)
    for (let i=0; i<arr.length; i++) {  
        // console.log(i)
        max = (max>arr[i]) ? max : arr[i];
        min = (min<arr[i]) ? min : arr[i];
        // console.log(` MAX | ${max} MIN | ${min}`)
    }
    console.log(` MAX | ${max} MIN | ${min}`)
}

// test(arr);

// 03 | Matrix addition
let index = [[],[],[]]
let matrix1 = [[1,2,3],[3,2,1],[1,3,2]]
let matrix2 = [[1,1,1],[1,1,1],[1,1,1]]

function MatrixAdd(index,mat1,mat2) {
    let newMatrix = index;
    for (i=0; i<mat1.length; i++) {
       for (j=0; j<mat2.length; j++) {
           newMatrix[i][j] = mat1[i][j] + mat2[i][j]
       }
    }
    console.log(newMatrix);
}

MatrixAdd(index,matrix1,matrix2);

// 04 | Character checker

function charCheck(str) {
    // const mapCharBig = new Map();
    // mapCharBig.set('A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z');

    // const mapCharSmall = new Map();
    // mapCharSmall.set('a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z');

    // foreach
    // let check = (mapCharBig.get(str[i])) ? check.push('B') :
    //                (mapCharSmall.get(str[i])) ? check.push('S') :
    return (str == str.toUpperCase()) ? console.log('All capital letter'):
           (str == str.toLowerCase()) ? console.log('All small letter'): console.log('Mix');
}

// charCheck('ABCDEFG');
// charCheck('abcdefg');
// charCheck('AbCdEfG');

// 05 | Pythagorus
// pythagorus(3,4)

function pythagorus(a,b) {
    let c = Math.sqrt(Math.pow(a,2)+Math.pow(b,2))
    console.log(c.toFixed(6));
}

// 07 | Herman
// herman(1) 

function herman(r) {
    let imgA = Math.PI*(Math.pow(r,2));
    let relA = 2*Math.pow(r,2); 
    console.log(`Imagine Area | ${imgA}  Real Area | ${relA}`)
}

// 08 | X2
// findX2(11,15)

function findX2(x1,s) {
    let x2 = (2*s) - x1;
    console.log(x2)
}

// 09 | ABC
// abc([1,5,3],'ABC')

function abc(arr,str) {
    let newStr = Array.from(str);
    let num = arr.sort(function(a,b) { return a-b;})    
    console.log(num)
    let order = [];
    for (i=0; i<arr.length; i++) {
        order[i] = (newStr[i] == 'A') ? num[0]:
                   (newStr[i] == 'B') ? num[1]:
                   (newStr[i] == 'C') ? num[2]: console.log('Error');
    }
    console.log(`${order} | ${str}`)
}

// 10 | Trik
const trink = (str) => {
    let newStr = Array.from(str);
    console.log(newStr);
    let ball = 1;
    for (i=0; i<newStr.length; i++) {
        if (ball == 1) {
            if (newStr[i] == 'A') {
                ball = 2;
            }
            if (newStr[i] == 'C') {
                ball = 3;
            }
        }
        if (ball == 2) {
            if (newStr[i] == 'A') {
                ball = 1;
            }
            if (newStr[i] == 'B') {
                ball = 3;
            }
        }
        if (ball == 3) {
            if (newStr[i] == 'B') {
                ball = 2;
            }
            if (newStr[i] == 'C') {
                ball = 1;
            }
        }
    }
    console.log(`Ball position | ${ball}`)
}

// trink('AA')

// 14 | GCD
// gcd(7,3)

function gcd(num1,num2) {
    if (num1 > num2) {gcd = (num1 % num2)};
    if (num2 > num1) {gcd = (num2 % num1)};
    console.log(gcd)
}