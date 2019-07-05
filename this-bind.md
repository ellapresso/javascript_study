# this

this는 실행되기 전에 결정된다.
전체가 실행되기 전에 결정이 된다.
즉 글로벌 컨텍스트에서는 사용하지 않는다.(사용할수는 있지만, window와 동일하기때문에 지양함.)
글로벌 컨텍스트란 어떤 함수에도 속하지않는 함수밖의 공간, 모든 함수를 감싼것.
실행하라고 명령 ->글로벌 컨텍스트안 모든 this가 결정됨 ->글로벌 실행->안의 함수실행

함수는 동작을 정의한 객체 => 자기 자신을 수행
메소드는 객체가 가지고 있는 동작. => 객체를 통해서 수행
메소드는 혼자 실행 못함. 함수는 혼자 실행가능 또한 메서드를 가질수 있는 객체. 그래서 함수를 일급객체라고 한다.

## method 안에서의 this

우리가 아는 그것.
예시)
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

## 함수 안에서의 this = window

예시 )
function test(){
console.log(this)
}
test()
결과 )
Window....어쩌구
