//Home 1
function chengeColor() {
    document.getElementById('chenge').style.color = 'red';
}
function removeColor() {
    document.getElementById('chenge').style.color = '';
}
// Home 2

function toThaiDateString(date) {

    let monthNames = [
        "มกราคม", "กุมภาพันธ์", "มีนาคม", "เมษายน",
        "พฤษภาคม", "มิถุนายน", "กรกฎาคม", "สิงหาคม.",
        "กันยายน", "ตุลาคม", "พฤศจิกายน", "ธันวาคม"
    ];

    let year = date.getFullYear() + 543;
    let month = monthNames[date.getMonth()];
    let numOfDay = date.getDate();

    let hour = date.getHours().toString().padStart(2, "0");
    let minutes = date.getMinutes().toString().padStart(2, "0");
    let second = date.getSeconds().toString().padStart(2, "0");

    return `${numOfDay} ${month} ${year} ` +
        `${hour}:${minutes}:${second} น.`;
}
let date1 = new Date();
// home 3
function idle() {
    document.getElementById('move').src = 'images/Idle.png';
}
function slide() {
    document.getElementById('move').src = 'images/Slide.png';
}
// home 4 

function showTable() {
    document.getElementById('show-table').style.display = '';
}
function DeleteTable() {
    document.getElementById('show-table').style.display = 'none';
}

// home5





// let sum  = (input1) + (input2) + (input3);
// let result = args.reduce((a,b) => a + b) / args.length ;


// const average = (...sum) => args.reduce((a,b) => a+b ) / sum.length;
function Calculate() {
    let x = parseInt(document.getElementById('number1').value);
    let y = parseInt(document.getElementById('number2').value);
    let z = parseInt(document.getElementById('number3').value);
    let sum = x + y + z;
    let all = [x, y, z];
    let average = sum / 3;
    let min = Math.min(...all);
    let max = Math.max(...all);

    document.getElementById('sum3').innerHTML = "ค่าต่ำสุด :" + min;
    document.getElementById('sum2').innerHTML = "ค่าสูงสุด :" + max;
    document.getElementById('sum1').innerHTML = "ค่าเฉลี่ย :" + average;
}

