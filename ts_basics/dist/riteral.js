"use strict";
let user1 = 'marshall';
let user2;
user2 = '3';
const user3 = {
    name: 'marshall',
    job: 'developer',
};
const aStudent = {
    name: 'marshall',
    grade: 3,
};
// 유니언 타입으로 인터페이스를 정의
function getGift(gift) {
    // console.log(gift.color);
    if (gift.name === 'bag') {
        gift.open();
    }
    else {
        gift.call();
    }
}
getGift({
    name: 'mobile',
    color: 'red',
    call: () => {
        console.log('call');
    },
});
const bagMobile = {
    name: 'marshall',
    color: 'red',
    price: 2000,
    open() { },
};
const arr = [1, 2, 3];
arr.map((item) => item * 2);
