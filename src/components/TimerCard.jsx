import { useState, useEffect } from "react";

function Timer(props) {
    const [countDownTime, setCountDownTime] = useState({
        days: 0,
        hours: 0,
        minutes: 0,
        seconds: 0,
    });
    const [isTimerRunning, setIsTimerRunning] = useState(false);

    useEffect(() => {
        const storedCountDownTime = sessionStorage.getItem("countDownTime");
        const storedTimerRunning = sessionStorage.getItem("isTimerRunning");

        if (storedCountDownTime && storedTimerRunning) {
            setCountDownTime(JSON.parse(storedCountDownTime));
            setIsTimerRunning(storedTimerRunning === "true");
        } else {
            setCountDownTime({
                days: 0,
                hours: props.hours,
                minutes: props.minutes,
                seconds: props.seconds,
            });
            setIsTimerRunning(true);
        }

        const countdownTimer = () => {
            let { days, hours, minutes, seconds } = countDownTime;

            if (seconds === 0) {
                if (minutes === 0) {
                    if (hours === 0) {
                        if (days === 0) {
                            setIsTimerRunning(false);
                            props.setHide(false);
                            return;
                        } else {
                            days--;
                            hours = 23;
                            minutes = 59;
                            seconds = 59;
                        }
                    } else {
                        hours--;
                        minutes = 59;
                        seconds = 59;
                    }
                } else {
                    minutes--;
                    seconds = 59;
                }
            } else {
                seconds--;
            }

            setCountDownTime({ days, hours, minutes, seconds });
        };

        const interval = setInterval(countdownTimer, 1000);

        return () => {
            clearInterval(interval);
            sessionStorage.setItem("countDownTime", JSON.stringify(countDownTime));
            sessionStorage.setItem("isTimerRunning", isTimerRunning.toString());
        };
    }, [props.hours, props.minutes, props.seconds]);


    return (
        <div className="flex flex-row justify-evenly bg-gradient-to-r from-gradient1 to-gradient2 h-36 min-w-min max-w-max rounded-3xl overflow-clip px-2 sm:pt-0 sm:px-2 sm:min-w-min">
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
        </div>
    );
};
export default Timer;

