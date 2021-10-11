import React, { useState } from 'react'
import "./Table.css"
import { Row, Col } from "react-bootstrap"
import Date from "../Date/Date"
function Table() {
    const [item, setItem] = useState([{ line: "line 0", num: "2" }, { line: "line 1", num: "3" }, { line: "line 2", num: "4" }, { line: "line 3", num: "5" },
    { line: "line 4", num: "6" }, { line: "line 5", num: "7" }, { line: "line 6", num: "8" },
    { line: "line 7", num: "9" }, { line: "line 8", num: "10" }, { line: "line 9", num: "11" },])

    const [data, setData] = useState([{ line: "Fix 1", num: "12" }, { line: "Fix 2", num: "13" }, { line: "Fix 3", num: "14" }])
    return (
        <>
            <div className="bgd_img">

                <div className="container tble">
                    <Row>
                        <Col xl={12} lg={12} md={12} sm={12} xs={12}>
                            {/* black div */}
                            <div className="table_black">
                                <div className="table_child1">
                                    <h3 className="table_h3">Table of
                                        <br /> contents</h3>
                                </div>

                            </div>

                            {/* Swing overview */}
                            <Row>
                                <Col xl={1} lg={1} md={0} sm={0} xs={0}></Col>
                                <Col xl={5} lg={5} md={6} sm={6} xs={12}>
                                    <div className="swing_main">
                                        <h2>Swing Overview</h2>
                                    </div>
                                </Col>
                                <Col xl={6} lg={6} md={6} sm={6} xs={0}></Col>

                            </Row>


                            <Row style={{ margin: "0px" }}>

                                <Col xl={2} lg={2} md={2} sm={0} xs={0} className="none"></Col>
                                <Col xl={2} lg={2} md={2} sm={3} xs={3} className="over_col" style={{ padding: "0px" }}>
                                    <div className="textss_center">Overview</div>
                                </Col>
                                <Col xl={7} lg={7} md={7} sm={8} xs={8} className="Col_eights" style={{ padding: "0px" }}>
                                    <div className="line_d">
                                        <hr className="hr"></hr>
                                    </div>
                                </Col>
                                <Col xl={1} lg={1} md={1} sm={1} xs={1}>
                                    <div className="textss_centers">1</div>
                                </Col>
                            </Row>




                            {/* line overwiew */}
                            <Row>
                                <Col xl={1} lg={1} md={0} sm={0} xs={0}></Col>
                                <Col xl={5} lg={5} md={6} sm={6} xs={12}>

                                    <div className="line_main">
                                        <h2>Line Overview</h2>
                                    </div>
                                </Col>
                                <Col xl={6} lg={6} md={6} sm={6} xs={0}></Col>

                            </Row>


                            {item.map((ite, index) => (
                                <Row style={{ margin: "0px" }}>
                                    <Col xl={2} lg={2} md={2} sm={0} xs={0} className="none"></Col>
                                    <Col xl={2} lg={2} md={2} sm={3} xs={3} className="over_col" style={{ padding: "0px" }}>
                                        <div className="textss_center">{ite.line}</div>
                                    </Col>
                                    <Col xl={7} lg={7} md={7} sm={8} xs={8} className="Col_eight" style={{ padding: "0px" }}>
                                        <div className="line_d">
                                            <hr className="hr"></hr>
                                        </div>
                                    </Col>
                                    <Col xl={1} lg={1} md={1} sm={1} xs={1}>
                                        <div className="textss_centers">{ite.num}</div>
                                    </Col>
                                </Row>))}


                            <Row>
                                <Col xl={1} lg={1} md={0} sm={0} xs={0}></Col>
                                <Col xl={5} lg={5} md={6} sm={6} xs={12}>

                                    <div className="line_main">
                                        <h2>Recommended Fixes</h2>
                                    </div>

                                </Col>
                                <Col xl={6} lg={6} md={6} sm={6} xs={0}></Col>

                            </Row>


                            {data.map((dat, index) => (
                                <Row style={{ margin: "0px" }}>
                                    <Col xl={2} lg={2} md={2} sm={0} xs={0} className="none"></Col>
                                    <Col xl={2} lg={2} md={2} sm={3} xs={3} className="over_col" style={{ padding: "0px" }}>
                                        <div className="textss_center">{dat.line}</div>
                                    </Col>
                                    <Col xl={7} lg={7} md={7} sm={8} xs={8} className="Col_eight" style={{ padding: "0px" }}>
                                        <div className="line_d">
                                            <hr className="hr"></hr>
                                        </div>
                                    </Col>
                                    <Col xl={1} lg={1} md={1} sm={1} xs={1}>
                                        <div className="textss_centers">{dat.num}</div>
                                    </Col>
                                </Row>))}



                        </Col>

                        <Col xl={1} lg={1} md={1} sm={1} xs={1}>
                            <Date />
                        </Col>
                    </Row>

                </div>

            </div >

        </>
    )
}
export default Table
