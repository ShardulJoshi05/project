function startTimer() {
    var startDate = document.getElementById('sDate').value;
    var startTime = document.getElementById('sTime').value;
    var endDate = document.getElementById('eDate').value;
    var endTime = document.getElementById('eTime').value;
    var startObj = new Date(startDate + ' ' + startTime);
    var endObj = new Date(endDate + ' ' + endTime);

    function x(){
        var timer = setInterval(function () {
            startObj = addSeconds(startObj, 1);
            if (calculateDifference(startObj, endObj) == 0) {
                clearInterval(timer);
            }
        }, 1000);
    }
    x();
}

function calculateDifference(start,end) {
    
    var difference = (end - start) / 1000;

    if (difference < 0) {
        console.log("Countdown Completed");
        return 0;
    }
    var differenceObj = {
        days: Math.floor(difference / 3600 / 24),
        hours: Math.floor(difference / 3600) % 24,
        minutes: Math.floor(difference / 60) % 60,
        seconds : Math.floor(difference)%60
    }
    console.log(differenceObj);
}

function addSeconds(sdate, seconds) {
    sdate.setSeconds(sdate.getSeconds() + seconds);
    return sdate;
}