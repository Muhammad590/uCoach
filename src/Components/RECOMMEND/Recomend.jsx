import React from 'react'
import player from "../../Assets/recpic.png"
import Date from "../Date/Date"
import "./Recomend.scss"
import layer2 from "../../Assets/layer2.png"

const Recomend = () => {
    return (
        <>
            <div className="rec__container">
                <p className="web__title">@ UCOACHU 2022
                </p>
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
                        <div className="img__border"></div>
                        <img src={player} alt="" className="header__img" />
                        <div className="img__bottom__para">
                            <p className="bottom__para1">Your Swing</p>
                            <p className="bottom__para2">Ideal Swing</p>
                        </div>
                    </div>



                </div>

                <div className="rec__body">
                    <div className="rec__body1">
                        <div className="body1__heading">Context</div>
                        <div className="body1__para">At line 3, your head can be turned slightly to your trail side. An optimal head position allows it to ‘re-centre’ your body as you transition to your downswing, which will help you maintain your swing radius and return your pressure to the lead side in the proper manner.</div>
                    </div>
                    <div className="rec__body2">
                        <div className="body1__heading">Consequence of poor execution</div>
                        <div className="body2__para">When your head is turned too far to the trail side, it will encourage an over-rotation of your shoulders. It can also affect your vision of the ball especially if you are right- eye dominant.</div>
                    </div>
                    <div className="rec__body3">
                        <div className="body1__heading">How to fix it</div>
                        <div className="body3__div">
                            <div className="left__border"></div>

                            <div className="body3__para">A great way to prevent your head from turning too much to the trail side is to hit balls wearing an eye patch over your lead eye. If your head turns too much, you will lose sight of the golf ball.</div>
                        </div>

                    </div>



                </div>
            </div>
        </>
    )
}

export default Recomend
