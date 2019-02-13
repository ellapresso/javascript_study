const _ = require("underscore");
const arr = [3, 6, 8, 2, 43];

console.log(arr[0]);
console.log(_.first(arr));
console.log(_.last(arr));

//terminal npm 참고사항
//npm -install `module` -g  : 전역적으로 사용할 모듈 설치
//npm -install `module`  : 현재 디렉토리에서 사용할 부품으로써 설치
//npm -install `module` --save  : 프로젝트에 의존성을 명시적으로 가지게 함
//npm init : 모듈 설치전 현재 프로젝트(프로그램) 패키지 초기화
