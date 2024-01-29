import './page6.css'
import cbLogo from '../Page1/city-beauty-logo.png'
import { Link } from 'react-router-dom'
import { useState } from 'react'

const Page6 = () => {

    const boxContent = [
        '10 Minutes',
        '30 Minutes',
        '1 Hour',
        '5 Minutes',
    ]

    const [selectOption, setSelectOption] = useState('')

    const handleChange = (event) => {
        setSelectOption(event.target.value)
    }

    const getDivStyle  = (optionValue) => {
        return selectOption === optionValue ? {borderColor: '#E2C47C'} : {}
    }

    return (
        <>
            <div className='p6-wrapper'>
                <div className='p6-container'>
                    <div className="logo-container-p6">
                        <img src={cbLogo} className="new-citbeauty-logo" />
                    </div>
                    <div className="progress-bar-container">
                        <Link style={{ textDecoration: "none", color: 'white' }} to={'/quiz/5'}>
                            <div className="rectangle">
                                <span class="material-symbols-outlined">
                                    chevron_left
                                </span>
                            </div>
                        </Link>
                        <div className="progress-bar-box">
                            <div className="progress-content-p6"></div>
                        </div>
                        <div className="num-indicator">
                            5/6
                        </div>
                    </div>
                    <div className='how-much-time'>How much time do you spend on <br />body care daily:</div>

                    <div className='p6-choice-box-container'>
                        {
                            boxContent.map((content, index)=>(
                        <div className='p6-choice-box'
                            style={getDivStyle(`bodyCareTime${index}`)}>
                            <div className='p6-choice-box-content-wrapper'>

                                <input type="radio" name="bodyCareTime"
                                value= {`bodyCareTime${index}`}
                                className='p6-radio-input'
                                onChange={handleChange}
                                checked={selectOption === `bodyCareTime${index}`}
                                />
                                <label htmlFor="bodyCareTimeOption" className="p6-radio-label"></label>
                                <div className='p6-box-text'>{content}</div>
                            </div>
                        </div>
                            ))
                        }
                    </div>

                    <div className="p1-btm-button-container">
                        <Link style={{ textDecoration: "none", color: 'none', marginTop: '17px' }}
                        to={'/quiz/7'}>
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
                            to={'/quiz/7'}>
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

export default Page6
