import React from "react"
import { Link } from "react-router-dom"

function Home() {
    return (
        <div className="flex flex-col gap-4 px-4 pt-4 w-screen h-screen text-content1 bg-secondary/50">
            <div className="font-poppins text-2xl font-semibold">
                Hi there , this is my submission for the assignment round. I am unsure on how to present the different flows w.r.t the timer and the color schemes in the Figma design. That is why I have separated them and linked them here. Hope I did well :)
                <br/>
                <span className="text-sm">p.s I have not implemented the refreshing-doesnt-refresh-the-timer feature in the "low timer" flows because I want to demonstrate the showcaseCard flow but will work in the high timer flow as expected.
                </span>
            </div>
            <div className="flex flex-col">
                <Link state={{ timer: "high" }} to={"/launchdark"} className="font-poppins text-2xl underline decoration-cyan-400 decoration-4" >Launch Dark High Timer</Link>
                <Link state={{ timer: "high" }} to={"/launchlight"} className="font-poppins text-2xl underline decoration-cyan-400 decoration-4" >Launch Light High Timer</Link>
            </div>

            <div className="flex flex-col">
                <Link state={{ timer: "low" }} to={"/launchdark"} className="font-poppins text-2xl underline decoration-cyan-400 decoration-4" >Launch Dark Low Timer</Link>
                <Link state={{ timer: "low" }} to={"/launchlight"} className="font-poppins text-2xl underline decoration-cyan-400 decoration-4" >Launch Light Low Timer</Link>
            </div>

            <div className="flex flex-col">
                <Link state={{ timer: "none" }} to={"/launchdark"} className="font-poppins text-2xl underline decoration-cyan-400 decoration-4" >Launch Dark No Timer</Link>
                <Link state={{ timer: "none" }} to={"/launchlight"} className="font-poppins text-2xl underline decoration-cyan-400 decoration-4" >Launch Light No Timer</Link>
            </div>


        </div>
    )
}

export default Home