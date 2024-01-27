import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Redirect, Link } from "react-router-dom";
import './page1.css'
import cbLogo from './city-beauty-logo.png'
import leg from './slide4-legs.png'
import arm from './slide4-arm.png'
import belly from './slide4-belly.png'
import neck from './slide4-neck.png'



function Page1() {

    const boxTexts = ['Loose skin on thighs and legs',
        'Thinning skin on arms',
        'Loose neck/jaw',
        'Saggy belly']

    const boxImgs = [leg, arm, neck, belly]

    const [checkedStates, setCheckedStates] = useState(new Array(4).fill(false))

    // const [isHighlighted, setIsHighlighted] = useState(new Array(4).fill(false))



    const handleCheckBox = (index) => {
        const updatedCheckedStates = checkedStates.map((item, idx) =>
            idx === index ? !item : item
        )
        setCheckedStates(updatedCheckedStates)

        // const updatedIsHighLighted = isHighlighted.map((item, idx)=>
        //     idx === index ? !item :item
        // )
        // setIsHighlighted(updatedCheckedStates)
    }


    return (
        <>
            <div className="page-1-wrapper">
                <div className="page-1-container">
                    <div className="logo-container-p1">
                        <img src={cbLogo} className="new-citbeauty-logo" />
                    </div>
                    <div className="progress-bar-container">
                        <Link style={{ textDecoration: "none", color: 'white' }} to={'/'}>
                            <div className="rectangle">
                                <span class="material-symbols-outlined">
                                    chevron_left
                                </span>
                            </div>
                        </Link>
                        <div className="progress-bar-box">
                            <div className="progress-content"></div>
                        </div>
                        <div className="num-indicator">
                            1/6
                        </div>
                    </div>
                    <div className="select-problem-areas">
                        Select problem areas
                    </div>


                    {checkedStates.map((isChecked, index) => (
                        <div key={index} className="selection-box-page1"
                        style={{borderColor: isChecked ? '#E2C47C' : 'initial'}}>
                            <div className="p1-text-container">
                                <div className="check-box" onClick={() => handleCheckBox(index)}
                                    style={{borderColor: isChecked ? '#E2C47C' : 'initial'}}
                                >
                                    {isChecked && <span className="check-mark">&#10003;</span>}
                                </div>
                                <p className="page1-box-text">{boxTexts[index]}</p>
                            </div>
                            <img src={boxImgs[index]} className="image-page1" alt="Leg" />
                        </div>
                    ))
                    }
                    <div className="p1-btm-button-container">
                        <div className="p1-btm-buttons"
                            id="p1-btm-buttons-continue"
                        >

                            <div className="p1-but-text-con"
                                id='p1-btm-continue-txt'>
                                Continue
                            </div>
                            <div className="p1-but-text-con">
                                <span class="material-symbols-outlined"
                                      id='p1BtmArrow'>
                                    arrow_forward
                                </span>
                            </div>

                        </div>
                        <div className="p1-btm-buttons"
                             id='p1ButTextSkip'
                        >
                                <div id='textSkip'>
                                Skip
                                </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Page1;
