import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Redirect, Link } from "react-router-dom";
import cbLogo from './city-beauty-logo.png'
import './page2.css'
const Page2 = () => {



    return (
        <>
            <div className="p2-wrapper">
                <div className="p2-container">
                    <div className="logo-container-p1">
                        <img src={cbLogo} className="new-citbeauty-logo" />
                    </div>
                    <div className="progress-bar-container">
                        <Link style={{ textDecoration: "none", color: 'white' }} to={'/quiz/1'}>
                            <div className="rectangle">
                                <span class="material-symbols-outlined">
                                    chevron_left
                                </span>
                            </div>
                        </Link>
                        <div className="progress-bar-box">
                            <div className="progress-content-p2"></div>
                        </div>
                        <div className="num-indicator">
                            2/6
                        </div>
                    </div>
                </div>
            </div>
        </>
    )

}











export default Page2
