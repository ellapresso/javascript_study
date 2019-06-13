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


//실습 8
//Todo를 프로토타입을 이용해 정의한다.
function Todo(title) {
    // 작성해주세요 :)
    this.title = title;
    this.complete = false;
}

Todo.prototype.getTitle = function () {
    return this.title;
}

Todo.prototype.setComplete = function (complete) {
    this.complete = complete;
}

// Todo.prototype // Todo.prototype을 확장해주세요 :)

Todo.prototype = {
    // 이렇게 사용하는 사람도 있지만 이것보다는....
};




const parent = {
    pMethod: () => {

    }
}
const child = {
    __proto__: parent,
    cMethod: () => {

    }
}
const gchild = {
    __proto__: child,
    cMethod: () => {

    }
}
const ggchild = {
    __proto__: gchild,
    aMethod: () => {

    }
}

//ggchild를 실행하고 __proto__를 열어보면 계속 나옴 ㅋㅋ
//실제로 쓰면 앙댐


//실습9 Object.create

const parent = {};

const child = Object.create(parent);
const gChild = Object.create(child);

// 메소드 만들어서 넣어보면 좋을듯.
// __proto__가 계속 열리는걸 볼 수 있다.




//생성자 기반 프로토타입 체인 상속(5) :LIVE:

function Parent() {}
Parent.prototype.ddd = 3;
Parent.prototype.pMethod = function () {};

function Child() {}
Child.prototype = Object.create(Parent.prototype);
Child.prototype.constructor = Child;
Child.prototype.cMethod = function () {};

var p2 = new Child();



//////
function Pr() {}
Pr.prototype.ddd = 3;
Pr.prototype.pMethod = function () {}

function Ch() {}
Ch.prototype = Object.create(Pr.prototype);
Ch.prototype.constructor = Ch;
Ch.prototype.cMethod = function () {}

function gCh() {}
gCh.prototype = Object.create(Ch.prototype)
Ch.prototype.constructor = gCh;
Ch.prototype.gcMethod = function () {}
