import React from 'react'
import "./Home.css"
import { Row, Col } from "react-bootstrap"
import line from "../../Images/Group 39.png"
import golf from "../../Images/Group 34.png"
import Date from "../Date/Date"
import liness from "../../Images/lines.jpg"
import Address from '../Address/Address'
import Table from '../Table/Table'
function Home() {
    return (
        <>
            <div className="bcg_img">

                <Row style={{ margin: '0px' }}>
                    <Col xl={11} lg={11} md={11} sm={11} xs={11} style={{ padding: '0px' }}>
                        <div style={{ paddingTop: '4rem', paddingBottom: '4rem' }}>


                            <div className="black_one">
                                <div className="black_img">
                                    <img src={line} />
                                    <h5 className="black_p">U<span className="black_span">COACH</span>U</h5>
                                    <p className="black_p2">SWING A.I. UNFAIR ADVANTAGE</p>
                                </div>

                            </div>



                            {/* img golf */}
                            <div className="image-wrapper">
                                <div className="image454">
                                    <img className="golf_img" src={liness} />
                                </div>

                                {/* red div */}

                                <div className="red_child1">
                                    <div className="red_child2">
                                        <h4 className="red_h4">Swing <br /> Report</h4>
                                    </div>
                                </div>

                            </div>


                            <div className="sam_main">
                                <div className="sam_child">
                                    <h2 className="sam_h2">Hello Sam!</h2>
                                    <p className="sam_p">Here's your Sunday Morning Session Report</p>
                                </div>
                            </div>


                            <div className="lst_div" ></div>

                        </div>
                    </Col>
                    <Col style={{ padding: '0px' }} xl={1} lg={1} md={1} sm={1} xs={1}>  <Date /></Col>
                </Row>


            </div>
            {/* <Table />
            <Address /> */}
        </>
    )
}

export default Home
