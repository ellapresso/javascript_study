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
function solution(s) {
    var words = s.split(/ /, -1)
    var whole = ''
    words.map((e, i) => {
        var char = e.split('')
        var txt = ""
        char.map((e, i) => {
            e = ((i % 2 == 0) ? char[i] = e.toUpperCase() : e.toLowerCase())
            txt = txt + e
        })
        whole = (whole == '') ? (txt) : (whole + " " + txt)
    })
    return (whole)
}

//멋쪙...
function toWeirdCase(s) {
    return s.toUpperCase().replace(/(\w)(\w)/g, function (a) {
        return a[0].toUpperCase() + a[1].toLowerCase();
    })
}
