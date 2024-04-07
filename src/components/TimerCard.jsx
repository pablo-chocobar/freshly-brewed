import { useState, useEffect } from "react";

function Timer(props) {
    // const [countDownTime, setCountDownTime] = useState({
    //     days: props.days,
    //     hours: props.hours,
    //     minutes: props.minutes,
    //     seconds: props.seconds,
    // });
    // const bePersistent = false;
    // const [isTimerRunning, setIsTimerRunning] = useState(false);
    // useEffect(() => {
    //     let initialCountDownTime, initialTimerRunning;

    //     if (bePersistent) {
    //         const storedCountDownTime = localStorage.getItem("countDownTime");
    //         const storedTimerRunning = localStorage.getItem("isTimerRunning");

    //         if (storedCountDownTime && storedTimerRunning) {
    //             initialCountDownTime = JSON.parse(storedCountDownTime);
    //             initialTimerRunning = storedTimerRunning === "true";
    //         } else {
    //             initialCountDownTime = {
    //                 days: props.days,
    //                 hours: props.hours,
    //                 minutes: props.minutes,
    //                 seconds: props.seconds,
    //             };
    //             initialTimerRunning = true;
    //         }
    //     }
    //     else {
    //         initialCountDownTime = {
    //             days: props.days,
    //             hours: props.hours,
    //             minutes: props.minutes,
    //             seconds: props.seconds,
    //         };
    //         initialTimerRunning = true;
    //     }

    //     setCountDownTime(initialCountDownTime);
    //     setIsTimerRunning(initialTimerRunning);

    //     const countdownTimer = () => {
    //         let { days, hours, minutes, seconds } = countDownTime;

    //         if (seconds === 0) {
    //             if (minutes === 0) {
    //                 if (hours === 0) {
    //                     if (days === 0) {
    //                         console.log(isTimerRunning, countDownTime)
    //                         setIsTimerRunning(false);
    //                         props.setHide(false);
    //                         return;
    //                     } else {
    //                         days--;
    //                         hours = 23;
    //                         minutes = 59;
    //                         seconds = 59;
    //                     }
    //                 } else {
    //                     hours--;
    //                     minutes = 59;
    //                     seconds = 59;
    //                 }
    //             } else {
    //                 minutes--;
    //                 seconds = 59;
    //             }
    //         } else {
    //             seconds--;
    //             console.log(countDownTime);
    //         }

    //         setCountDownTime({ days, hours, minutes, seconds });
    //     };

    //     const interval = setInterval(countdownTimer, 1000);

    //     return () => {
    //         clearInterval(interval);

    //         if (bePersistent){
    //             localStorage.setItem("countDownTime", JSON.stringify(countDownTime));
    //             localStorage.setItem("isTimerRunning", isTimerRunning.toString());
    //         }
    //     };
    // }, [props.days , props.hours, props.minutes, props.seconds]);
    const [countDownTime, setCountDownTime] = useState({
        days: props.days,
        hours: props.hours,
        minutes: props.minutes,
        seconds: props.seconds,
    });
    const [isTimerRunning, setIsTimerRunning] = useState(false);

    useEffect(() => {

        let initialCountDownTime, initialTimerRunning, initialTargetDate;
        console.log("boo")
        initialTargetDate = new Date(props.targetDate);
        const timeDiff = initialTargetDate.getTime() - new Date().getTime();
        initialCountDownTime = getCountDownTimeFromTimeDiff(timeDiff);
        initialTimerRunning = true;

        setCountDownTime(initialCountDownTime);
        setIsTimerRunning(initialTimerRunning);

        console.log(initialTimerRunning, initialCountDownTime)

        const intervalId = initialTimerRunning ? startTimer(initialTargetDate) : null;
        return () => {
            clearInterval(intervalId);
            // localStorage.setItem("countDownTime", JSON.stringify(countDownTime));
            // localStorage.setItem("isTimerRunning", isTimerRunning.toString());
            // localStorage.setItem("targetDate", initialTargetDate.toString());
        };
    }, [props.targetDate]);

    const startTimer = (targetDate) => {
        console.log("timer runnin")
        const countdownTimer = () => {
            const timeDiff = targetDate.getTime() - new Date().getTime();
            const { days, hours, minutes, seconds } = getCountDownTimeFromTimeDiff(timeDiff);

            if (timeDiff <= 0) {
                setIsTimerRunning(false);
                props.setHide(false);
                return;
            }

            setCountDownTime({ days, hours, minutes, seconds });
        };

        const interval = setInterval(countdownTimer, 1000);
        return interval;
    };

    const getCountDownTimeFromTimeDiff = (timeDiff) => {
        const days = Math.floor(timeDiff / (1000 * 60 * 60 * 24));
        const hours = Math.floor((timeDiff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((timeDiff % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((timeDiff % (1000 * 60)) / 1000);
        return { days, hours, minutes, seconds };
    };

    return (
        <div className="flex flex-row justify-evenly bg-gradient-to-r from-gradient1 to-gradient2 h-36 min-w-min max-w-max rounded-3xl overflow-clip px-2 sm:pt-0 sm:px-2 sm:min-w-min">
            {countDownTime?.days > 0 && <div className="flex flex-col justify-center sm:w-32 w-16">
                <div className="h-16 text-center sm:text-6xl text-4xl font-poppins text-content1 font-semibold">
                    {countDownTime?.days}
                </div>
                <div className="flex justify-center">
                    <span className="text-sm sm:text-lg font-poppins text-center text-content1 font-normal">
                        {countDownTime?.days == 1 ? "Day" : "Days"}
                    </span>
                </div>
            </div>
            }
            {countDownTime?.days > 0 && <div className="flex flex-col justify-center sm:w-32 w-16">
                <div className="h-16 text-center sm:text-6xl text-4xl font-poppins text-content1 font-semibold">
                    :
                </div>
            </div>}
            {countDownTime?.hours > 0 && <div className="flex flex-col justify-center sm:w-32 w-16">
                <div className="h-16 text-center sm:text-6xl text-4xl font-poppins text-content1 font-semibold">
                    {countDownTime?.hours}
                </div>
                <div className="flex justify-center">
                    <span className="text-sm sm:text-lg font-poppins text-center text-content1 font-normal">
                        {countDownTime?.hours == 1 ? "Hour" : "Hours"}
                    </span>
                </div>
            </div>
            }
            {countDownTime?.hours > 0 && <div className="flex flex-col justify-center sm:w-32 w-16">
                <div className="h-16 text-center sm:text-6xl text-4xl font-poppins text-content1 font-semibold">
                    :
                </div>
            </div>}

            <div className="flex flex-col justify-center sm:w-32 w-16">
                <div className="h-16 text-center sm:text-6xl text-4xl font-poppins text-content1 font-semibold">
                    {countDownTime?.minutes}
                </div>
                <div className="flex justify-center">
                    <span className="text-sm sm:text-lg font-poppins text-center text-content1 font-normal">
                        {countDownTime?.minutes == 1 ? "Minute" : "Minutes"}
                    </span>
                </div>
            </div>
            <div className="flex flex-col justify-center sm:w-32 w-16">
                <div className="h-16 text-center sm:text-6xl text-4xl font-poppins text-content1 font-semibold">
                    :
                </div>
            </div>
            <div className="flex flex-col justify-center sm:w-32 w-16">
                <div className="h-16 text-center overflow-hidden sm:text-6xl text-4xl font-poppins text-content1 font-semibold">
                    <div>{countDownTime?.seconds}</div>
                </div>
                <div className="flex justify-center text-sm sm:text-lg">
                    <span className=" font-poppins text-center text-content1 font-normal">
                        {countDownTime?.seconds == 1 ? "Second" : "Seconds"}
                    </span>
                </div>
            </div>
            {/* <button onClick={() => { localStorage.removeItem("countDownTime"); localStorage.removeItem("isTimerRunning") }}>
                cl
            </button> */}
        </div>
    );
};
export default Timer;

