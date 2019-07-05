># this

+ this는 실행되기 전 즉 전체가 실행되기 전에 `동적으로`결정이 된다.
+ 즉, 함수를 어떻게 호출했느냐에따라서 결정된다는 뜻.
+ 글로벌 컨텍스트에서는 사용하지 않는다.(사용할수는 있지만, window와 동일하기때문에 지양함. console에 this를 실행하면 window{...}가 나옴)
+ 글로벌 컨텍스트란 어떤 함수에도 속하지않는 함수밖의 공간, 모든 함수를 감싼것.
실행하라고 명령 ->글로벌 컨텍스트안 모든 this가 결정됨 ->글로벌 실행->안의 함수실행


_함수는 동작을 정의한 객체 => 자기 자신을 수행_

_메소드는 객체가 가지고 있는 동작. => 객체를 통해서 수행_

메소드는 혼자 실행 X. 

함수는 혼자 실행 O, 또한 메서드를 가질수 있는 객체. 그래서 함수를 일급객체라고 한다.

>## this의 변조
+ 함수를 실행할때 this를 임의로 정해서 실행 -> call(), apply()
```js
var todo = {
  complete: false,
  title: "자바스크립트 공부하기"
}

function setComplete(complete) {
  this.complete = complete;
}

setComplete(true);//삭제

window.complete === true;//삭제

// call: 첫번째 인자 this로 만들 객체, 두번째 인자부터 함수에 전달할 인자
setComplete.call(todo, true);
// apply: 첫번째 인자 this로 만들 객체, 두번째 인자에 함수에 전달할 인자들을 배열로
setComplete.apply(todo, [true]);

todo.complete === true;
```

+ 함수의 this가 변경되지 않도록 고정 -> bind() (es5 spec)
```js
var todo = {
  complete: false,
  title: "자바스크립트 공부하기"
}

function setComplete(complete) {
  this.complete = complete;
}

var setCompleteOfTodo = setComplete.bind(todo);

setCompleteOfTodo(true);

todo.complete === true;
```

>## method 안에서의 this

우리가 아는 그것.
```js
var todo = {
    complete: false,
    title: "",
    getTitle: function () {
        return this.title;
    },
    setComplete: function (complete) {
        this .complete = complete;
    }
}
```
>## 함수 안에서의 this = window
+ strict mode에서는 undefined

```js
function test(){
    console.log(this)
}
test()
```
결과 )
Window{...}

>## 문제01
(A)와 (B)위치에서의 this는 무엇을 가르킬까?
```js
function Prefixer(prefix) {
  this.prefix = prefix;
}

Prefixer.prototype.prefixArray = function (arr) {
  // (A)
  return arr.map(function (x) {
    return this.prefix + ' ' + x; // (B)
  });
};

var pre = new Prefixer('Hi');
console.log(pre.prefixArray(['Lee', 'Kim']));
```

>## Arrow Function에서의 this
+ `언제나` 상위 스코프의 this를 가르킨다 => Lexical this/ Lexical scopping
```js
var name = 'zero';
function log() {
  console.log(name); // '언제나' name은 상위의 zero를 가리킨다.
}

function wrapper() {
  var name = 'nero';
  log();
}
wrapper();
```
결과 ) 'zero'

>## 이벤트 리스너의 this
this === element;
```js
button.addEventListener('click', function() {
  console.log(this === button); // => true
});
```
> 화살표 함수를 사용하면 ?
```js
button.addEventListener('click', () => {
  console.log(this === window); // => true
});
```

>## 2. 문제 01을 수정해보자!
```js
```

##### 참고 사이트
##### https://www.zerocho.com/category/JavaScript/post/5740531574288ebc5f2ba97e
##### https://poiemaweb.com/es6-arrow-function
##### https://nhnent.dooray.com/share/posts/dgMm_b6-R2KN8qZSrW5W_w (7월10일 만료)
##### http://insanehong.kr/post/javascript-object/