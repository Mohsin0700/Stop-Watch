    let secs = 0;
    let mins = 0;
    let hrs = 0;

    let timeStart = false;

    const start = () => {
        timeStart = true;
        let runSec = document.getElementById("secs");
        let runMin = document.getElementById("mins");
        let runHrs = document.getElementById("hrs");
        let seconds = setInterval(function() {
            secs++
            if (secs < 10) {
                runSec.innerHTML = (`0${secs}`);
            } else {
                runSec.innerHTML = secs;
            }
            if (secs > 59) {
                secs = 0;
                runSec.innerHTML = "00";
                mins++;
                if (mins < 10) {
                    runMin.innerHTML = (`0${mins}`);
                } else {
                    runMin.innerHTML = mins;
                }
            }
            if (mins > 59) {
                mins = 0;
                runMin.innerHTML = "00";
                hrs++;
                if (hrs < 10) {
                    runHrs.innerHTML = (`0${hrs}`);
                } else {
                    runHrs.innerHTML = hrs;
                }
            }
        }, 1000)
        return  stop = () => {
            timeStart = false;
            clearInterval(seconds);     
        }
    }
    const reset = () => {
        // timeStart = false;
        document.getElementById("secs").innerHTML = "00";
        document.getElementById("mins").innerHTML = "00";
        document.getElementById("hrs").innerHTML = "00";
        secs = 0;
        mins = 0;
        hrs = 0;
    }

    