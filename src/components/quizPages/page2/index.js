import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Redirect, Link } from "react-router-dom";
import cbLogo from './city-beauty-logo.png'
import './page2.css'
const Page2 = () => {

    const p2BoxTitles = ['Niacinamide', 'Lipid Compound', 'Ribose', 'Jojoba Leaf Extract', 'Glycerin']

    const p2BoxTexts = ['This is a form of vitamin B that supports protien and collagen to promote optimal skin health',
        'This improves moisture retention in the skin\'s barrier for long-lasting hydration',
        'This reduces the appearance of thinning, wrinkled skin',
        'This is rich in antioxidants and helps stimulate the production of collagen',
        'This helps keep skin hydrated']


    const [checkedStates, setCheckedStates] = useState(new Array(4).fill(false))

    let [isUnsure, setIsUnsure] = useState(false)

    const handleCheckBox = (index) => {
        const updatedCheckedStates = checkedStates.map((item, idx) =>
            idx === index ? !item : item
        )
        setCheckedStates(updatedCheckedStates)
    }


    const handleUnsure = () => {
        setIsUnsure(prevState => !prevState)
        // if (isUnsure == true) {
        //         checkedStates.map((item) => item = false)
        // }
    }
    useEffect(() => {

    }, [isUnsure])


    return (
        <>
            <div className="p2-wrapper">
                <div className="p2-container">
                    <div className="logo-container-p2">
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
                    <div className="p2-what-hydrating-ingre">
                        What hydrating ingredients are you interested in?
                    </div>

                    {checkedStates.map((isChecked, index) => (
                        <div key={index} className="selection-box-page1"
                            style={{ borderColor: isChecked ? '#E2C47C' : 'transparent' }}>
                            <div className="p1-text-container">
                                <div className="check-box" onClick={() => handleCheckBox(index)}

                                >
                                    {isChecked && <span className="check-mark">&#10003;</span>}
                                </div>
                                <div className="p2-box-text-container">
                                    <h3 className="p2-box-title">{p2BoxTitles[index]}</h3>
                                    <p className="page2-box-text">{p2BoxTexts[index]}</p>
                                </div>
                            </div>
                        </div>

                    ))
                    }
                    <div className="p2-line-break"></div>

                    <div className="unsure-btn" key={isUnsure} onClick={handleUnsure}
                        style={{ borderColor: isUnsure ? '#E2C47C' : 'initial' }}>
                        <div className="unsure-btn-content-container">
                            <span className="p2-x-mark">&#10006;</span>
                            <div className="unsure-what-my-ski">Unsure what my skin needs</div>
                        </div>
                    </div>
                    <div className="p1-btm-button-container">
                        <Link style={{ textDecoration: "none", color: 'none' }} to={'/quiz/3'}>
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
                        </Link>
                        <Link style={{ textDecoration: 'none', color: 'none' }}
                            to={'/quiz/3'}>
                            <div className="p1-btm-buttons"
                                id='p1ButTextSkip'
                            >
                                <div id='textSkip'>
                                    Skip
                                </div>
                            </div>
                        </Link>
                    </div>

                </div>
            </div>
        </>
    )

}











export default Page2
