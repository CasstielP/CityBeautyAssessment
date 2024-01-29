import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Redirect, Link } from "react-router-dom";
import './introPage.css'
import pic1 from './Group 9.png'
import pic2 from './Group 10.png'
import pic3 from './slide3-1-d.png'
import cbLogo from './city-beauty-logo.png'


function IntroPage () {

    return (
        <>
        <div className="intro-page-wrapper">
            <div className="intro-page-container">
        <div className="logo-container">
        <img src={cbLogo} className="new-citbeauty-logo"/>
        </div>
        <div className="intro-container">
            <div className="intro-left">
            <h1 className="achieve-perfectly-sm">Achieve Perfectly <span className="achieve-perfectly-sm-italic">Smooth</span>,
            <br/><span className="achieve-perfectly-sm-italic">Youthful </span>Skin</h1>
            <div className="get-a-personalized-s">get a personalized skin care treatment</div>
            </div>
            <div className="intro-right">
            <h2 className="choose-your-goal">Choose Your Goal</h2>
            <div className="intro-right-selection">
            <Link style={{ textDecoration: "none", color: "black" }}
                    to={`/quiz/1`}
            >
                <div className="selection-box">
                    <p className="relieve-dry-flaky-s">Remove Crepey Skin</p>
                    <img src={pic1} className="asset-1"/>
                </div>
            </Link>
                <div className="selection-box">
                    <p className="relieve-dry-flaky-s">Relieve Dry, Flaky Skin</p>
                    <img src={pic2} className="asset-1"></img>
                </div>
                <div className="selection-box">
                    <p className="get-firmer-tighter">Get Firmer, Tighter, Younger Looking Skin</p>
                    <img src={pic3} className="asset-1"></img>
                </div>
            </div>
            </div>
        </div>
            </div>
        </div>

        </>
    )
}

export default IntroPage;
