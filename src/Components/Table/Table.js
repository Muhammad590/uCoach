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

            <div className="container tble">
                <Row>
                    <Col xl={11} lg={11} md={11} sm={11}>
                        {/* black div */}
                        <div className="table_black">
                            <div className="table_child1">
                                <h3 className="table_h3">Table of contents</h3>
                            </div>

                        </div>

                        {/* Swing overview */}
                        <div className="swing_main">
                            <h2>Swing Overview</h2>
                        </div>

                        <Row style={{ margin: "0px" }}>
                            <Col xl={5} lg={5} md={5} sm={5}></Col>
                            <Col xl={2} lg={2} md={2} sm={2} className="over_col" style={{ padding: "0px" }}>
                                <div className="text-center">Overview</div>
                            </Col>
                            <Col xl={4} lg={4} md={4} sm={4} style={{ padding: "0px" }}>
                                <div className="line_d">
                                    <hr className="hr"></hr>
                                </div>
                            </Col>
                            <Col xl={1} lg={1} md={1} sm={1} >
                                <div>1</div>
                            </Col>
                        </Row>


                        {/* line overwiew */}
                        <div className="line_main">
                            <h2>Line Overview</h2>
                        </div>

                        {item.map((ite, index) => (
                            <Row style={{ margin: "0px" }}>
                                <Col xl={5} lg={5} md={5} sm={5}></Col>
                                <Col xl={2} lg={2} md={2} sm={2} className="over_col" style={{ padding: "0px" }}>
                                    <div className="text-center">{ite.line}</div>
                                </Col>
                                <Col xl={4} lg={4} md={4} sm={4} style={{ padding: "0px" }}>
                                    <div className="line_d">
                                        <hr className="hr"></hr>
                                    </div>
                                </Col>
                                <Col xl={1} lg={1} md={1} sm={1} >
                                    <div>{ite.num}</div>
                                </Col>
                            </Row>))}


                        <div className="line_main">
                            <h2>Recommended Fixes</h2>
                        </div>

                        {data.map((dat, index) => (
                            <Row style={{ margin: "0px" }}>
                                <Col xl={5} lg={5} md={5} sm={5}></Col>
                                <Col xl={2} lg={2} md={2} sm={2} className="over_col" style={{ padding: "0px" }}>
                                    <div className="text-center">{dat.line}</div>
                                </Col>
                                <Col xl={4} lg={4} md={4} sm={4} style={{ padding: "0px" }}>
                                    <div className="line_d">
                                        <hr className="hr"></hr>
                                    </div>
                                </Col>
                                <Col xl={1} lg={1} md={1} sm={1} >
                                    <div>{dat.num}</div>
                                </Col>
                            </Row>))}



                    </Col>

                    <Col xl={1} lg={1} md={1} sm={1} xs={1}>
                        <Date />
                    </Col>
                </Row>

            </div>

        </>
    )
}

export default Table
