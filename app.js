let today = new Date('1990-01-01 00:00:00')
let btn = document.getElementById('pause');
let ispause = true;

let interval = setInterval(() => {
    if (!ispause) {
        btn.innerText = "Pause"
        today.setMilliseconds(today.getMilliseconds() + 123);
    }
    document.getElementById('time').innerHTML = moment(today).format('HH:mm:ss:SS');
    
    
}, 100)

function pause() {
    ispause = !ispause;
    btn.innerText = "Start"
}

function reset() {
    today = new Date('1990-01-01 00:00:00')
    btn.innerText = "Start"
    ispause = true
    clearinterval()
}

function clearinterval() {
    clearinterval(interval)
}