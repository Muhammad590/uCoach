import React from 'react'
import "./Swing.scss"
import layer from "../../Assets/layer1.png"


import { Doughnut } from 'react-chartjs-2';

import Date from "../Date/Date"

// const data =

const arr = [
    {
        datasets: [
            {
                label: '# of Votes',
                data: [60, 15, 25],
                backgroundColor: [
                    'red',
                    'green',
                    "orange"

                ],
                borderColor: [
                    'red',
                    'green',
                    "orange"
                ],
                borderWidth: 1,
            },
        ],
        text: "Line 0"
    },
    {
        datasets: [
            {
                label: '# of Votes',
                data: [50, 35, 15],
                backgroundColor: [
                    'red',
                    'green',
                    "orange"

                ],
                borderColor: [
                    'red',
                    'green',
                    "orange"
                ],
                borderWidth: 1,
            },
        ],
        text: "Line 1"
    },
    {
        datasets: [
            {
                label: '# of Votes',
                data: [30, 60, 10],
                backgroundColor: [
                    'red',
                    'green',
                    "orange"

                ],
                borderColor: [
                    'red',
                    'green',
                    "orange"
                ],
                borderWidth: 1,
            },
        ],
        text: "Line 2"
    },
    {
        datasets: [
            {
                label: '# of Votes',
                data: [35, 25, 30],
                backgroundColor: [
                    'red',
                    'green',
                    "orange"

                ],
                borderColor: [
                    'red',
                    'green',
                    "orange"
                ],
                borderWidth: 1,
            },
        ],
        text: "Line 3"
    },
    {
        datasets: [
            {
                label: '# of Votes',
                data: [70, 10, 20],
                backgroundColor: [
                    'red',
                    'green',
                    "orange"

                ],
                borderColor: [
                    'red',
                    'green',
                    "orange"
                ],
                borderWidth: 1,
            },
        ],
        text: "Line 4"
    },
    {
        datasets: [
            {
                label: '# of Votes',
                data: [10, 40, 50],
                backgroundColor: [
                    'red',
                    'green',
                    "orange"

                ],
                borderColor: [
                    'red',
                    'green',
                    "orange"
                ],
                borderWidth: 1,
            },
        ],
        text: "Line 5"
    },
    {

        datasets: [
            {
                label: '# of Votes',
                data: [70, 15, 15],
                backgroundColor: [
                    'red',
                    'green',
                    "orange"

                ],
                borderColor: [
                    'red',
                    'green',
                    "orange"
                ],
                borderWidth: 1,
            },
        ],
        text: "Line 6"
    },
    {

        datasets: [
            {
                label: '# of Votes',
                data: [20, 30, 50],
                backgroundColor: [
                    'red',
                    'green',
                    "orange"

                ],
                borderColor: [
                    'red',
                    'green',
                    "orange"
                ],
                borderWidth: 1,
            },
        ],
        text: "Line 7"
    },
    {

        datasets: [
            {
                label: '# of Votes',
                data: [25, 35, 40],
                backgroundColor: [
                    'red',
                    'green',
                    "orange"

                ],
                borderColor: [
                    'red',
                    'green',
                    "orange"
                ],
                borderWidth: 1,
            },
        ],
        text: "Line 8"
    },
    {

        datasets: [
            {
                label: '# of Votes',
                data: [100],
                backgroundColor: [

                    'green',


                ],
                borderColor: [

                    'green',

                ],
                borderWidth: 1,
            },
        ],
        text: "Line 9"
    },
]


const Swing = () => {
    return (
        <>

            <div className="swing__container">
                <div className="date__component">
                    <Date />
                </div>
                <div className="swing__header">
                    <div className="header__heading">Swing Overview</div>
                    <div className="header__para">Sam Savage</div>
                    <div className="header__para2">Sunday Morning Session - Front View</div>
                </div>
                <div className="swing__body">
                    <div className="swing__body__left">
                        <div className="body__left">
                            <div className="left__upper">
                                <div className="para1">Swing</div>
                                <div className="para1">Score</div>
                            </div>
                            <div className="body__right">76</div>
                        </div>
                    </div>
                    <div className="swing__body__right">
                        <div className="para1">Needs Work</div>
                        <div className="border1"></div>
                        <div className="para2">Slight Issue</div>
                        <div className="border2"></div>
                        <div className="para3">About Right</div>
                        <div className="border3"></div>

                    </div>
                </div>

                <div className="swing__footer">
                    {
                        arr.map((val) => {
                            return (

                                <div className="donut__parent">
                                    <p className="donut__para">{val.text}</p>
                                    <Doughnut style={{ height: "165x", width: "165px" }} data={val} />
                                </div>
                            )
                        })
                    }


                </div>
            </div>
        </>
    )
}

export default Swing
