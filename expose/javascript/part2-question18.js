function printTime() {
    let d = new Date();
    console.log(d.toLocaleTimeString());
}
setInterval(printTime, 1000);