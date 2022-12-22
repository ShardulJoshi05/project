let reset = 0;
let timer;

// This function is called on click of "Confirm" button
function startTimer() {
    var startDate = document.getElementById('sDate').value;
    var startTime = document.getElementById('sTime').value;
    var endDate = document.getElementById('eDate').value;
    var endTime = document.getElementById('eTime').value;
    var startObj = new Date(startDate + ' ' + startTime);
    var endObj = new Date(endDate + ' ' + endTime);
    
    // This the check to see if all fields are filled or not
    if (startDate == '' || startTime == '' || endDate == '' || endTime == '') {
        let msg = 'Please fill all the fields';
        document.getElementById('message').innerText = msg;
        return;
    }
    // This is the check to see if user selected start Date and Time ahead of end date and time
    else if (startObj > endObj) {
        let msg = 'Start Date/Start Time cannot be less than End Date/End Time';
        document.getElementById('message').innerText = msg;
        return;
    }
    // This function in else block will calculate the difference every second, with the updated date and time.    
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

//This function is created to reset all the values of elements if "Reset" button is clicked
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

//This function calculates the difference between start date and end date
function calculateDifference(start,end) {
    
    var difference = (end - start) / 1000;

    // Once the countdown is completed, the function will stop.
    if (difference < 0) {
        return 0;
    }

    // Created this object, to convert time from milliseconds to Days Hours Minutes Seconds and store it.
    var differenceObj = {
        days: Math.floor(difference / 3600 / 24),
        hours: Math.floor(difference / 3600) % 24,
        minutes: Math.floor(difference / 60) % 60,
        seconds : Math.floor(difference)%60
    }

    // Once calculated, below code will overwrite the values on the page
    document.getElementById('days').innerText = differenceObj.days;
    document.getElementById('hours').innerText = differenceObj.hours;
    document.getElementById('minutes').innerText = differenceObj.minutes;
    document.getElementById('seconds').innerText = differenceObj.seconds;
}

//This function adds 1 second to start date and time
function addSeconds(sdate, seconds) {
    sdate.setSeconds(sdate.getSeconds() + seconds);
    return sdate;
}

// This function gets called when user clicks on reset button
function resetTimer() {
    reset = 1;
    clearInterval(timer);
    resetElements();
    reset = 0;
    return;
}