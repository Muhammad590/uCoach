import React from 'react'
import player from "../../Assets/recpic.png"

import "./Recomend.scss"

const Recomend = () => {
    return (
        <>
            <div className="rec__container">
                <div className="rec__header">

                    <div className="header__box">
                        <div className="box__upper">
                            <p className="box__heading">RECOMENDED</p>
                            <p className="box__heading2">FIX</p>
                        </div>
                        <div className="box__bottom">
                            <div className="box__left">
                                <p className="box__para">Line 3</p>
                                <p className="box__para">Head Tum too much</p>
                                <p className="box__para">trial side</p>
                            </div>
                            <div className="box__right">
                                <p className="right__heading"> 3</p>
                            </div>
                        </div>
                    </div>


                    <div className="header__img__div">
                        <img src={player} alt="" className="header__img" />
                        <div className="img__bottom__para">
                            <p className="bottom__para1">Your Swing</p>
                            <p className="bottom__para2">Ideal Swing</p>
                        </div>
                    </div>



                </div>
            </div>
        </>
    )
}

export default Recomend
