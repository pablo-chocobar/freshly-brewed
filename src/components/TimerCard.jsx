import { useCallback, useEffect, useRef, useState } from "react";
function Timer(props) {
    const [countDownTime, setCountDownTIme] = useState({
        days: 0,
        hours: 0,
        minutes: 0,
        seconds: 0,
    });
    const secondTimer = useRef(null);
    
    const getTimeDifference = (countDownDate) => {
        const currentTime = new Date().getTime();
        const timeDiffrence = countDownDate - currentTime;
        const days = Math.floor(timeDiffrence / (24 * 60 * 60 * 1000));
        const hours = Math.floor(
            (timeDiffrence % (24 * 60 * 60 * 1000)) / (1000 * 60 * 60)
        );
        const minutes = Math.floor(
            (timeDiffrence % (60 * 60 * 1000)) / (1000 * 60)
        );
        const seconds = Math.floor((timeDiffrence % (60 * 1000)) / 1000);
        if (timeDiffrence < 0) {
            setCountDownTIme({
                days: 0,
                hours: 0,
                minutes: 0,
                seconds: 0,
            });
            props.setHide(false);
            console.log("hi");
            clearInterval();
            return;
        } else {
            setCountDownTIme({
                days: days,
                hours: hours,
                minutes: minutes,
                seconds: seconds,
            });
        }
    };
    const startCountDown = useCallback(() => {
        const customDate = new Date();
        const countDownDate = new Date(
            customDate.getFullYear(),
            customDate.getMonth(),
            customDate.getDate(),
            customDate.getHours() + props.hours,
            customDate.getMinutes() + props.minutes,
            customDate.getSeconds() + props.seconds
        );
        setInterval(() => {
            getTimeDifference(countDownDate.getTime());
        }, 1000);
    }, []);

    useEffect(() => {
        startCountDown();
    }, []);
    return (
        <div className="flex flex-row justify-evenly bg-gradient-to-r from-primary to-secondary h-36 min-w-min max-w-max rounded-lg overflow-clip px-2 sm:pt-0 sm:px-2 sm:min-w-min">
            {countDownTime?.hours > 0 && <div className="flex flex-col justify-center sm:w-32 w-16">
                <div className="h-16 text-center sm:text-6xl text-4xl font-poppins text-white font-semibold">
                    {countDownTime?.hours}
                </div>
                <div className="flex justify-center">
                    <span className="text-sm sm:text-lg font-poppins text-center text-white font-normal">
                        {countDownTime?.hours == 1 ? "Hour" : "Hours"}
                    </span>
                </div>
            </div>
            }
            {countDownTime?.hours > 0 && <div className="flex flex-col justify-center sm:w-32 w-16">
                <div className="h-16 text-center sm:text-6xl text-4xl font-poppins text-white font-semibold">
                    :
                </div>
            </div>}

            <div className="flex flex-col justify-center sm:w-32 w-16">
                <div className="h-16 text-center sm:text-6xl text-4xl font-poppins text-white font-semibold">
                    {countDownTime?.minutes}
                </div>
                <div className="flex justify-center">
                    <span className="text-sm sm:text-lg font-poppins text-center text-white font-normal">
                        {countDownTime?.minutes == 1 ? "Minute" : "Minutes"}
                    </span>
                </div>
            </div>
            <div className="flex flex-col justify-center sm:w-32 w-16">
                <div className="h-16 text-center sm:text-6xl text-4xl font-poppins text-white font-semibold">
                    :
                </div>
            </div>
            <div className="flex flex-col justify-center sm:w-32 w-16">
                <div className="h-16 text-center overflow-hidden sm:text-6xl text-4xl font-poppins text-white font-semibold">
                    <div ref={secondTimer}>{countDownTime?.seconds}</div>
                </div>
                <div className="flex justify-center text-sm sm:text-lg">
                    <span className=" font-poppins text-center text-white font-normal">
                        {countDownTime?.seconds == 1 ? "Second" : "Seconds"}

                    </span>
                </div>
            </div>
        </div>
    );
};
export default Timer;
/*
    Extenal css to add 
.animate-timer {
         position: relative;
          animation: animatetop 1s infinite;
        }
        @keyframes animatetop {
          from {
            top: -50px;
          }
          to {
            top: 20px;
          }
        }
 */
