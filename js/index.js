let reset = 0;
let timer;
function startTimer() {
    var startDate = document.getElementById('sDate').value;
    var startTime = document.getElementById('sTime').value;
    var endDate = document.getElementById('eDate').value;
    var endTime = document.getElementById('eTime').value;
    var startObj = new Date(startDate + ' ' + startTime);
    var endObj = new Date(endDate + ' ' + endTime);
    

    if (startDate == '' || startTime == '' || endDate == '' || endTime == '') {
        let msg = 'Please fill all the fields';
        document.getElementById('message').innerText = msg;

        return;
    } else if (startObj > endObj) {
        let msg = 'Start Date/Start Time cannot be less than End Date/End Time';
        document.getElementById('message').innerText = msg;
        return;
    }
    else {
        function x() {
            timer = setInterval(function () {
                startObj = addSeconds(startObj, 1);
                if (calculateDifference(startObj, endObj)==0) {
                    clearInterval(timer);
                    let msg = 'Time Up';
                    document.getElementById('message').innerText = msg;
                    return;

                }
            }, 1000);
        }
        x();
    }
}

function resetElements() {
    document.getElementById('sDate').value='';
    document.getElementById('eDate').value = '';
    document.getElementById('sTime').value = '';
    document.getElementById('eTime').value = '';
    document.getElementById('days').innerText='';
    document.getElementById('hours').innerText = '';
    document.getElementById('minutes').innerText='';
    document.getElementById('seconds').innerText = '';
    document.getElementById('message').innerText = 'Welcome';
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

    document.getElementById('days').innerText = differenceObj.days;
    document.getElementById('hours').innerText = differenceObj.hours;
    document.getElementById('minutes').innerText = differenceObj.minutes;
    document.getElementById('seconds').innerText = differenceObj.seconds;
}

function addSeconds(sdate, seconds) {
    sdate.setSeconds(sdate.getSeconds() + seconds);
    return sdate;
}


function resetTimer() {
    reset = 1;
    clearInterval(timer);
    resetElements();
    reset = 0;
    return;
}