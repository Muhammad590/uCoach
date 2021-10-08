import React, { useState } from 'react'
import golf from "../../Images/Group 34.png"
import "./Address.css"
import { Row, Col } from "react-bootstrap"
function Address() {
    const [data, setData] = useState([{ lead: "Trail Foot", about: "ABOUT RIGHT" }, { lead: "Shaft Lean", about: "ABOUT RIGHT" },
    { lead: "Lead Knee", about: "ABOUT RIGHT" }, { lead: "Trial Knee", about: "ABOUT RIGHT" }])

    const [item, setItem] = useState([{ leads: "Spine Tilt" }, { leads: "Elbow Seperation" }
        , { leads: "Shoulder Tilt Head" }, { leads: "Height" }])
    return (
        <>
            <div className="b_img">
                <div className="address_main">
                    {/* img */}

                    <div className="exa"></div>
                    <div className="header">
                        <div className="img_div">
                            <img className="gol_img" src={golf} />
                        </div>

                        {/* black */}
                        <div className="bla_div">
                            <div className="bl_div">
                                <div className="blc_child1">
                                    <div className="sp_div">
                                        <span className="sp_line">Line</span>
                                        <span className="sp_number">0</span>
                                    </div>

                                    <h2 className="pos">Address Position</h2>
                                </div>
                            </div>
                        </div>
                    </div>



                    {/* results */}
                    <Row style={{ margin: "0px", marginBottom: "20px" }}>
                        <Col xl={2} lg={2} md={2} sm={2} xs={2}></Col>
                        <Col xl={10} lg={10} md={10} sm={10} xs={10} style={{ padding: "0px" }}>
                            <div className="results">
                                <h2>Your Results</h2>
                            </div>
                        </Col>
                    </Row>


                    {/* {data.map((dat, index) => ( */}
                    <Row style={{ margin: "0px", padding: "10px 0px" }}>
                        <Col xl={2} lg={2} md={2} sm={2} xs={2}></Col>
                        <Col xl={5} lg={5} md={5} sm={5} xs={5} style={{ padding: "0px" }}>
                            <div className="stance">Stance Width Lead</div>
                        </Col>

                        <Col xl={5} lg={5} md={5} sm={5} xs={5}>
                            <div className="stance green">ABOUT RIGHT</div>
                        </Col>
                    </Row>

                    {/* 2nde */}

                    <Row style={{ margin: "0px", padding: "10px 0px" }}>
                        <Col xl={2} lg={2} md={2} sm={2} xs={2}></Col>
                        <Col xl={5} lg={5} md={5} sm={5} xs={5} style={{ padding: "0px" }}>
                            <div className="stance">Foot</div>
                        </Col>

                        <Col xl={5} lg={5} md={5} sm={5} xs={5}>
                            <div className="stance red">TOO CLOSED</div>
                        </Col>
                    </Row>

                    {/* 3rd map */}
                    {data.map((dat, index) => (<Row style={{ margin: "0px", padding: "10px 0px" }}>
                        <Col xl={2} lg={2} md={2} sm={2} xs={2}></Col>
                        <Col xl={5} lg={5} md={5} sm={5} xs={5} style={{ padding: "0px" }}>
                            <div className="stance">{dat.lead}</div>
                        </Col>

                        <Col xl={5} lg={5} md={5} sm={5} xs={5}>
                            <div className="stance green">{dat.about}</div>
                        </Col>
                    </Row>
                    ))}

                    {/* 4rth */}
                    <Row style={{ margin: "0px", padding: "10px 0px" }}>
                        <Col xl={2} lg={2} md={2} sm={2} xs={2}></Col>
                        <Col xl={5} lg={5} md={5} sm={5} xs={5} style={{ padding: "0px" }}>
                            <div className="stance">Hip Tilt</div>
                        </Col>

                        <Col xl={5} lg={5} md={5} sm={5} xs={5}>
                            <div className="stance yellow">SLIGHTLY TOO LITTLE</div>
                        </Col>
                    </Row>
                    {/* 5th */}

                    {item.map((ite, index) => (<Row style={{ margin: "0px", padding: "10px 0px" }}>
                        <Col xl={2} lg={2} md={2} sm={2} xs={2}></Col>
                        <Col xl={5} lg={5} md={5} sm={5} xs={5} style={{ padding: "0px" }}>
                            <div className="stance">{ite.leads}</div>
                        </Col>

                        <Col xl={5} lg={5} md={5} sm={5} xs={5}>
                            <div className="stance green">ABOUT RIGHT</div>
                        </Col>
                    </Row>
                    ))}

                    {/* 6th */}
                    <Row style={{ margin: "0px", padding: "10px 0px" }}>
                        <Col xl={2} lg={2} md={2} sm={2} xs={2}></Col>
                        <Col xl={5} lg={5} md={5} sm={5} xs={5} xs={5} style={{ padding: "0px" }}>
                            <div className="stance">Head Turn</div>
                        </Col>

                        <Col xl={5} lg={5} md={5} sm={5} xs={5}>
                            <div className="stance yellow">SLIGHTLY TRIAL SIDE</div>
                        </Col>
                    </Row>

                    {/* 7th */}
                    <Row style={{ margin: "0px", padding: "10px 0px" }}>
                        <Col xl={2} lg={2} md={2} sm={2} xs={2}></Col>
                        <Col xl={5} lg={5} md={5} sm={5} xs={5} style={{ padding: "0px" }}>
                            <div className="stance">Ball Position</div>
                        </Col>

                        <Col xl={5} lg={5} md={5} sm={5} xs={5}>
                            <div className="stance green">ABOUT RIGHT</div>
                        </Col>
                    </Row>

                    {/* 8th */}

                    <Row style={{ margin: "0px", padding: "10px 0px" }}>
                        <Col xl={2} lg={2} md={2} sm={2} xs={2}></Col>
                        <Col xl={5} lg={5} md={5} sm={5} xs={5} style={{ padding: "0px" }}>
                            <div className="stance">Balance of Mass</div>
                        </Col>

                        <Col xl={5} lg={5} md={5} sm={5} xs={5}>
                            <div className="stance yellow">SLIGHTLY TRIAL SIDE</div>
                        </Col>
                    </Row>

                </div>
            </div>

        </>
    )
}

export default Address
