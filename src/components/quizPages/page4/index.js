import cbLogo from '../Page1/city-beauty-logo.png'
import './page4.css'
import leftImg from './woman-crepe-halfway-there.gif'
import { Link } from 'react-router-dom'

const Page4 = () => {





    return (
        <>
            <div className="p4-wrapper">
                <div className="p4-container">
                    <div className="logo-container-p3">
                        <img src={cbLogo} className="new-citbeauty-logo" />
                    </div>
                    <div className='p4-body-content-container'>
                        <div className='p4-l-content-container'></div>
                        <img className='p4-img' src={leftImg}></img>
                        <div className='p4-r-content-container'>
                            <h3>Halfway there!</h3>
                            <h2>Why do people give up protecting <br />and hydrating their skin?</h2>
                            <p className='p4-pararaph'>
                                <span style={{ fontWeight: 'bold' }}>The No.1 reason is using the wrong products that just
                                    <br />aren't effective</span>
                                <br />
                                <br />
                                You'll achieve much more in just a jew weeks of
                                <br />
                                starting City Beauty's treatment.
                                <br />
                                <br />
                                our primary goal is to deliver deep, long-lasting
                                <br />
                                hydration that will prevent harsh aging and reduce the
                                <br />
                                appearance of thinning, crepey skin. Visibly achieve
                                <br />
                                healthy, supple skin with us.
                            </p>
                            <div className="p1-btm-button-container">
                                <Link style={{ textDecoration: "none", color: 'none' }}
                                    to={'/quiz/5'}>
                                    <div className="p1-btm-buttons"
                                        id="p1-btm-buttons-continue"
                                    >

                                        <div className="p1-but-text-con"
                                            id='p1-btm-continue-txt'>
                                            Got it
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
                                    to={'/quiz/5'}>
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
                </div>
            </div>
        </>
    )
}


export default Page4
