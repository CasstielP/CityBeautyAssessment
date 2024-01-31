import cbLogo from '../Page1/city-beauty-logo.png'
import './page7.css'
import { Link } from 'react-router-dom'
import { useState, useEffect, useRef } from 'react'


const Page7 = () => {

    const p7ContentArr = [
        'Overwhelmed, too many products to keep track of',
        'Ovecomplicated, hard to understand ingredients',
        'Hopelessness',
        'No Results',
        'Anxiety',
    ]

    let [isNoneAbove, setIsNoneAbove] = useState(false)

    const [isDone, setIsDone] = useState(false)

    const [checkedStates, setCheckedStates] = useState(new Array(5).fill(false))

    const handleCheckBox = (index) => {
        const updatedCheckedStates = checkedStates.map((item, idx) =>
            idx === index ? !item : item
        )
        setCheckedStates(updatedCheckedStates)
    }

    let isAnyTrue = checkedStates.some(state => state == true) || isNoneAbove

    const handleContinue = () => {
        if (isAnyTrue || isNoneAbove) {
            setIsDone(true)
        }
    }

    const handleSkip = () => {
        if (isAnyTrue || isNoneAbove) {
            window.alert('Please Click the Continue button')
        } else {
            setIsDone(true)
        }
    }

    const divRef = useRef(null)

    const handleNoneAbove = () => {
        setIsNoneAbove(prevState => !prevState)
    }
    useEffect(() => {

    }, [isNoneAbove])


    useEffect(() => {
        if (isDone && divRef.current) {
            divRef.current.scrollIntoView({ behavior: 'smooth' });
        }
    }, [isDone]);



    return (
        <>
            <div className="p7-wrapper">
                <div className="p7-container">
                    <div className="logo-container-p7">
                        <img src={cbLogo} className="new-citbeauty-logo" />
                    </div>
                    <div className="progress-bar-container">
                        <Link style={{ textDecoration: "none", color: 'white' }} to={'/quiz/6'}>
                            <div className="rectangle">
                                <span class="material-symbols-outlined">
                                    chevron_left
                                </span>
                            </div>
                        </Link>
                        <div className="progress-bar-box">
                            <div className="progress-content-p7"></div>
                        </div>
                        <div className="num-indicator">
                            6/6
                        </div>
                    </div>

                    <div className='have-you-exp'>
                        Have you experienced any of these issues <br />in your previous skincare attempts?
                    </div>



                    {checkedStates.map((isChecked, index) => (
                        <div key={index} className="selection-box-page7"
                            style={{ borderColor: isChecked ? '#E2C47C' : 'transparent' }}>
                            <div className="p1-text-container">
                                <div className="check-box" onClick={() => handleCheckBox(index)}

                                >
                                    {isChecked && <span className="check-mark">&#10003;</span>}
                                </div>
                                <div className="p2-box-text-container">
                                    <p className="page7-box-text">{p7ContentArr[index]}</p>
                                </div>
                            </div>
                        </div>

                    ))
                    }

                    <div className="p2-line-break"></div>


                    <div className="unsure-btn" key={isNoneAbove} onClick={handleNoneAbove}
                        style={{ borderColor: isNoneAbove ? '#E2C47C' : 'initial' }}>
                        <div className="unsure-btn-content-container">
                            <span className="p2-x-mark">&#10006;</span>
                            <div className="unsure-what-my-ski">None of the above</div>
                        </div>
                    </div>


                    <div className="p1-btm-button-container"
                    >
                        <div className="p1-btm-buttons"
                            id="p1-btm-buttons-continue"
                            onClick={handleContinue}
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
                            onClick={handleSkip}
                        >
                            <div id='textSkip'>
                                Skip
                            </div>
                        </div>
                    </div>

                    {isDone &&
                        <div ref={divRef} className='p7-thank-you'>
                            <div className='p7-thankyou-content-container'>
                                <div className='thankyou-title'>Thanks for sharing!</div>
                                <div className='thankyou-text'>We've discovered that a lot of people have faced the
                                    <br />same setbacks. City Beauty has a clear one-step
                                    <br />treatment that is easy to follow with long-term
                                    <br />results. In less than two minutes, you will feel better
                                    <br />than ever.
                                </div>
                            </div>
                        </div>
                    }

                </div>
            </div>
        </>
    )
}


export default Page7
