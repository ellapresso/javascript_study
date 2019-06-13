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
newPrintTodo(); //미완료 : 자바스크립트 공부하기
printTodo.bind(todo)(); //미완료 : 자바스크립트 공부하기


let ToDo = title => {
    this.complete = false;
    this.title = title;
}

ToDo.prototype.getTitle = () => {
    return this.title;
}

ToDo.prototype.setComplete = complete => {
    this.complete = complete;
}

ToDo.prototype.getDisplayText = () => {
    return this.complete ? "완료 : " + this.getTitle() : "미완료 : " + this.getTitle()
}

ToDo.prototype.print = () => {
    console.log(this.getDisplayText());
}

let OfficeToDo = (title) => {
    ToDo.call(this, title);
}

OfficeToDo.prototype = Object.create(Todo.prototype);
OfficeToDo.prototype.constructor = OfficeToDo;

OfficeToDo.prototype.getDisplayText = () => {
    return "-Office-" + ToDo.prototype.getDisplayText.call(this);
}
//Arrow는 this가 고정되어서 코드실행이 안됨.

/////////////강의자료에 나와있는 코드
function Todo(title) {
    this.complete = false;
    this.title = title;
}

Todo.prototype.getTitle = function () {
    return this.title;
};

Todo.prototype.setComplete = function (complete) {
    this.complete = complete;
};

Todo.prototype.print = function () {
    console.log(this.getDisplayText());
}

Todo.prototype.getDisplayText = function () {
    return this.complete ? "완료 : " + this.getTitle() : "미완료 : " + this.getTitle()
}

function OfficeTodo(title) {
    Todo.call(this, title);
}

OfficeTodo.prototype = Object.create(Todo.prototype);
OfficeTodo.prototype.constructor = OfficeTodo; //constructor===Object

OfficeTodo.prototype.getDisplayText = function () {
    return '-Office-' + Todo.prototype.getDisplayText.call(this);
}

var td = new Todo('js');
td.print();

var ot = new OfficeTodo('js');
ot.print();
