//문자열 내 p와 y의 개수
function solution(s) {
    var ya = /p/gi,
        pa = /y/gi;
    var regP = s.match(pa),
        regY = s.match(ya);
    regP == null ? regP = [] : regP
    regY == null ? regY = [] : regY
    var pl = regP.length,
        yl = regY.length;
    return (pl == yl);
}

//이상한 문자 만들기
