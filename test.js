
// 1

// function bot(a) {
//     let k = 0;
//     a.forEach(e => {
//         k += e * e * e;   
//     });
//     return k;
// }
// console.log(bot([1,5,9]));







// 2

// function bot(a) {
//     let k = [];
//     a.forEach(e => {
//         if (e) {
//             k.push(e);
//         }
//     });
//     return k;
// }
// console.log(bot([1,5,9,false,0,"",null,undefined]));





// 3

// function bot(a) {
//     let k = 0;
//     a.forEach(e => {
//         if(e){
//             k++;
//         }
//     });
//     if (k == a.length) {
//         return "true"
//     }
//     return "false"
// }
// console.log(bot([1,5,9,0]));






// 4

// function bot(a) {
//     let k = 0;
//     a.forEach((e,i) => {
//         if (i % 2 == 0) {
//             k += e;
//         }   
//     });
//     return k*a.at(-1);
// }
// console.log(bot([1,5,9]));






// 5

// function bot(a, b) {
//     let k = 0;
//     if (a.length != b.length) {
//         return false;
//     }
//     else {   
//         for (let i = 0; i < a.length; i++){
//             if (a[i] == b[i]) {
//                 k++;
//             }
//         }
//     }
//     if (k == a.length) {
//         return true
//     }
//     else {
//         return false
//     }
// }
// console.log(bot([],[]));








// 6

// function bot(a,b) {
//     let k = a.length > b.length ? a.length : b.length;
//     let s = [];
//     for (let i = 0; i < k; i++){
//         s.push(a[i], b[i]);
//     }
//     return s.filter((e)=>e!=undefined)
// }
// console.log(bot([1,5,9,0],[2,4,8,3,6,7]));









// 7

// function bot(a) {
//     let k = [];
//     let s = [];
//     for (let i = 1; i <= a; i++){
//         k.push(i);
//     }
//     for (let i = 1; i <= a; i++){
//         s.push(k.map((e)=>e*i))
//     }
//     return s;
// }
// console.log(bot(2));







// 8

function bot(a) {
    let k = [];
    for (let i = 0; i < a.length; i++){
        for (let j = 0; j < a.length; j++){
            if (a[i] == a[j]) {
                k.push(a[i]);
            }
        }
    }
    return ;
}
console.log(bot([1,1,2,2,3,3,4,5,5,6,7,7]));









// 9

// function bot(a) {
//     let b = "";
//     b += "(";
//     for (let i = 0; i < a.length; i++){
//         b += a[i];
//         if (i == 2) {
//             b+=") "
//         }
//         else if (i == 5) {
//             b+="-"
//         }
//     }
//     return b;
// }
// console.log(bot([1,2,3,4,5,6,7,8,9,0]));







// 10

// function bot(a) {
//     let k = 1;
//     let s = 0;
//     for (let i = 0; i < a.length; i++){
//         for (let j = 0; j < a[i].length; j++){
//             k *= a[i][j];
//         }
//         s += k;
//         k = 1;
//     }
//     return s;
// }
// console.log(bot([[1,2,3],[1,2,3],[1,2,3],[1,2,3],[1,2,3]]));
