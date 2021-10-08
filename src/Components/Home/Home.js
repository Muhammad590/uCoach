import React from 'react'
import "./Home.css"
import line from "../../Images/Group 39.png"
import golf from "../../Images/Group 34.png"
function Home() {
    return (
        <>
            <div className="container">

                <div className="main">
                    {/* black div */}
                    <div className="black_one">

                        <div className="black_img">
                            <img src={line} />
                            <h5 className="black_p">U<span className="black_span">COACH</span>U</h5>
                            <p className="black_p2">SWING A.I. UNFAIR ADVANTAGE</p>
                        </div>

                    </div>

                    {/* red div */}

                    <div className="red_main">
                        <div className="red_child1">
                            <div className="red_child2">
                                <h4 className="red_h4">Swing <br /> Report</h4>
                                {/* <h4>Report</h4> */}
                            </div>
                        </div>
                    </div>


                    {/* img golf */}
                    <div>
                        <div>
                            <img className="golf_img" src={golf} />
                        </div>
                    </div>


                    {/* hello sam div */}

                    <div className="sam_main">
                        <div className="sam_child">
                            <h2 className="sam_h2">Hello Sam!</h2>
                            <p className="sam_p">Here's your Sunday Morning Session Report</p>
                        </div>
                    </div>

                    <div style={{ height: '2rem' }}></div>

                </div>


            </div>



        </>
    )
}

export default Home
