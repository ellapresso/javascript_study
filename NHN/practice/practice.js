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

//실습 4
var todo = {
    complete: false,
    title: '자바스크립트 공부하기'
};

function printTodo() {
    return this.complete ? '완료 : ' + this.title : '미완료 : ' + this.title;
}
// 1
printTodo.call(todo);
// 2
var newPrintTodo = printTodo.bind(todo);
newPrintTodo();
// 3
printTodo.bind(todo)();

//3가지 모두 같은 결과



//실습5
var person = {
    name: 'Steve Jobs'
}

function printPersonName() {
    console.log(this.name);
}


function myBind(func, context) {
    return function () {
        func.call(context); //여기를 구현 근데 왜 안나오지
    };
}

var printPersonNameBinded = myBind(printPersonName, person);

printPersonNameBinded(); // "Steve Jobs"


//실습 6

function createTodo(title) {
    //리터럴 쓰지말고
    var newTodo = {};
    newTodo.title = title;
    newTodo.complete = false;
    newTodo.getTitle = function () {
        return this.title;
    };
    newTodo.setComplete = function (complete) {
        this.complete = complete;
    }
    return newTodo;
}

var todo1 = createTodo('출근하기');
var todo2 = createTodo('퇴근하기');

todo1.getTitle() === '출근하기';
todo2.getTitle() === '퇴근하기';


//실습 7

function Todo(title) {
    this.complete = false;
    this.title = 'title';
    this.getTitle = function () {
        return this.title;
    }
    this.setComplete = function (complete) {
        this.complete = complete;
    }
}

var todo = new Todo('타이틀');
