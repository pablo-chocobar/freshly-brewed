import { useCallback, useEffect, useRef, useState } from "react";


function Timer(props) {
    const [countDownTime, setCountDownTime] = useState({
            days: 0,
            hours: props.hours,
            minutes: props.minutes,
            seconds: props.seconds,
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
            setCountDownTime({
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
            setCountDownTime({
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
                    <div ref={secondTimer}>{countDownTime?.seconds}</div>
                </div>
                <div className="flex justify-center text-sm sm:text-lg">
                    <span className=" font-poppins text-center text-content1 font-normal">
                        {countDownTime?.seconds == 1 ? "Second" : "Seconds"}

                    </span>
                </div>
            </div>
        </div>
    );

    const storedCountDownTime = localStorage.getItem("countDownTime");
    const storedTimerRunning = localStorage.getItem("isTimerRunning");
    const storedTargetDate = localStorage.getItem("targetDate");
};
export default Timer;
    // if (storedCountDownTime && storedTimerRunning && storedTargetDate) {
    //   initialCountDownTime = JSON.parse(storedCountDownTime);
    //   initialTimerRunning = storedTimerRunning === "true";
    //   initialTargetDate = new Date(storedTargetDate);
    // } else {

    //   useEffect(() => {
    //     const savedTime = sessionStorage.getItem('countDownTime');
    //     if (savedTime) {
    //       setCountDownTime(JSON.parse(savedTime));
    //       console.log(savedTime);
    //     }else {
    //         setCountDownTime({
    //             days: 0,
    //             hours: props.hours,
    //             minutes: props.minutes,
    //             seconds: props.seconds,
    //         })
    //         console.log("props" , props)
    //         console.log(savedTime);
    //     }
    //     return () => {timerInterval && clearInterval(timerInterval)};
    //   }, [timerInterval, props.hours, props.minutes, props.seconds]);
    
    //   useEffect(() => {
    //     let totalSeconds = countDownTime.days * 86400 + countDownTime.hours * 3600 + countDownTime.minutes * 60 + countDownTime.seconds;
    
    //     if (totalSeconds === 0) {
    //       props.setHide(false);
    //       console.log('Timer ended');
    //       clearInterval(timerInterval); 
    //     } else {
    //         if (timerInterval) {
    //             clearInterval(timerInterval);
    //         }
    //       const interval = setInterval(() => {
    //         totalSeconds--;
    //         const newDays = Math.floor(totalSeconds / 86400);
    //         const newHours = Math.floor((totalSeconds % 86400) / 3600);
    //         const newMinutes = Math.floor((totalSeconds % 3600) / 60);
    //         const newSeconds = totalSeconds % 60;
    
    //         const newCountDownTime = {
    //           days: newDays,
    //           hours: newHours,
    //           minutes: newMinutes,
    //           seconds: newSeconds,
    //         };
    //         setCountDownTime(newCountDownTime);
    //         console.log(newCountDownTime);
    //         sessionStorage.setItem('countDownTime', JSON.stringify(newCountDownTime));
    //       }, 1000);
    //       setTimerInterval(interval);
    //     }
    //   }, []);

