import React from 'react'
import "./Swing.scss"
import layer from "../../Assets/layer1.png"


import { Doughnut } from 'react-chartjs-2';

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
    },
]


const Swing = () => {
    return (
        <>

            <div className="swing__container">
                {/* <img className="layer2" src={layer} alt="" /> */}
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
                                    <p className="donut__para">Line 0</p>
                                    <Doughnut data={val} />
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
