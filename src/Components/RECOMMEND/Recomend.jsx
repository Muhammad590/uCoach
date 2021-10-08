import React from 'react'
import player from "../../Assets/recpic.png"

import "./Recomend.scss"

const Recomend = () => {
    return (
        <>
            <div className="rec__container">
                <div className="rec__header">
                    <img src={player} alt="" className="header__img" />

                </div>
            </div>
        </>
    )
}

export default Recomend
