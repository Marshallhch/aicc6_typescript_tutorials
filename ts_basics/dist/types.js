"use strict";
// string
let car = 'BMW';
car = '3';
// number
let num = 1;
num = 2;
// array
// let arr1: Array<number> = [1, 2, 3];
let arr1 = [1, 2, 3]; // 많이 사용
// let arr2: Array<String> = ["1", "2"]
let arr2 = ['1', '2', '3']; // 많이 사용
arr1.push(4);
arr2.push('5');
// tuple 타입
let person;
person = ['marshall', 20]; // 순서가 바뀌면 안된다.
console.log(person);
// enum 타입 - 비슷한 성격의 요소들을 나열하는 타입
var Os;
(function (Os) {
    Os[Os["Windows"] = 10] = "Windows";
    Os[Os["Ios"] = 11] = "Ios";
    Os[Os["Android"] = 12] = "Android";
})(Os || (Os = {}));
let myOs;
myOs = Os.Windows;
console.log(myOs);
console.log(Os['Ios']);
console.log(Os[2]);
