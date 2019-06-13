// 실습 파일

// 수정전
// var todo = {
//     complete: false,
//     title: "",
//     getTitle: function () {},
//     setComplete: function (complete) {}
// }

var todo = {
    complete: false,
    title: "",
    getTitle: function () {
        return this.title;
    },
    setComplete: function (complete) {
        this.complete = complete;
    }
};

//state라는 프로퍼티를 추가하면서 getter를 추가해주었다.
Object.defineProperty(todo, 'state', {
    get: function () {
        // if (this.complete) {
        //     return '완료';
        // } else {
        //     return '미완료';
        // }
        return this.complete ? '완료' : '미완료';
    }
});

var todo = {
    complete: false,
    title: '자바스크립트 공부하기'
};

function printTodo() {
    return this.complete ? '완료 : ' + this.title : '미완료 : ' + this.title;
}

//call 이용
printTodo.call(todo); //완료 : 자바스크립트 공부하기
//bind 이용
var newPrintTodo = printTodo.bind(todo);
newPrintTodo(); //완료 : 자바스크립트 공부하기
printTodo.bind(todo)(); //완료 : 자바스크립트 공부하기
