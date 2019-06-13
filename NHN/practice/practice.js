var obj = {};
Object.defineProperty(obj, 'name', {
    value: 'nhn',
    configurable: false,
    writable: true,
    enumerable: true
})
//안지워짐


var obj = {};
Object.defineProperty(obj, 'age', {
    value: '29',
    configurable: true,
    writable: false,
    enumerable: true
});
//true반환하지만 안지워짐

var obj = {};
Object.defineProperty(obj, 'id', {
    value: '29',
    configurable: true,
    writable: true,
    enumerable: false
});

for (var key in obj) {
    console.log(key);
}
// name, age 반환

var obj = {};
var ageNum = 0;

Object.defineProperty(obj, 'age', {
    set: function (value) {
        ageNum = value;
    },
    get: function () {
        return ageNum + "살";
    }
});

//obj.age = 40 넣고 출력할 경우 40살이 나와야됨.... (근데 난 왜 안나오냐 ㅋㅋㅋ)
