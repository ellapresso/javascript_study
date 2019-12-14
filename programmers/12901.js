//2016
function solution(a, b) {
    const birthday = new Date("2016," + a + "," + b);
    const dayInfo = String(birthday).split(' ');
    return dayInfo[0].toLocaleUpperCase()
}
