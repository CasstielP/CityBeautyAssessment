import { Link } from "react-router-dom";
import cbLogo from './city-beauty-logo.png'
import './page3.css'
import normal from './pg-3-normal-d.png'
import dry from './pg-3-dry-d.png'
import microWrinkle from './pg-3-microwrinkles-d.png'
import scaly from './pg-3-scaly-d.png'
import itchy from './pg-3-itchy-d.png'
import crepey from './pg-3-crepey-d.png'
import { useEffect, useRef, useState } from "react";


const Page3 = () => {

    const [sliderValue, setSliderValue] = useState(0);
    const [indicatorLeft, setIndicatorLeft] = useState(0)
    const sliderRef = useRef(null)

    const p3ContentArray = [
        {skinTypes: 'Normal Skin',img: normal},
        {skinTypes: 'Dry Skin',img: dry},
        {skinTypes: 'Microwrinkles',img: microWrinkle},
        {skinTypes: 'Scaly, Rough Skin',img: scaly},
        {skinTypes: 'Itchy, Irritated Skin',img: itchy},
        {skinTypes: 'Crepey Skin',img: crepey},
    ]


    const types = ['Normal Skin', 'Dry Skin', 'Microwrinkles',
        'Scaly, Rough Skin', 'Itchy, Irritated Skin', 'Crepey Skin']

    const handleSliderChange = (event) => {
        setSliderValue(event.target.value)
    }


    useEffect(() => {
        if (sliderRef.current) {
            const slider = sliderRef.current;
            const max = types.length - 1;
            const newPos = (sliderValue / max) * (slider.offsetWidth - 20)
            setIndicatorLeft(newPos)
        }
    }, [sliderValue]);


    return (
        <>
            <div className="p3-wrapper">
                <div className="p3-container">
                    <div className="logo-container-p3">
                        <img src={cbLogo} className="new-citbeauty-logo" />
                    </div>
                    <div className="progress-bar-container">
                        <Link style={{ textDecoration: "none", color: 'white' }} to={'/quiz/2'}>
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
                            3/6
                        </div>
                    </div>

                    <div className="p3-content-container">
                        <div className="p3-left-content">
                            <img className="p3-img" src={p3ContentArray[sliderValue].img}></img>
                        </div>
                        <div className="p3-right-content">

                            <div className="how-would-you-desc">How would you describe your skin?</div>
                            <div className="slider-wrapper">
                                    <div className="p3-slider-value-text-container" style={{
                                        position: 'absolute',
                                        left: `${indicatorLeft}px`,
                                    }}>
                                        <div className="p3-slider-value">
                                        {p3ContentArray[sliderValue].skinTypes}
                                        </div>
                                </div>
                                <div className="slider-container">
                                    <input ref={sliderRef} type="range" min="0" max="5" value={sliderValue}
                                        class="slider" className="p3-slider"
                                        onChange={handleSliderChange} />
                                    <div className="dry-norm-foot-text-container">
                                        <div className="dry-norm-foot-text-l">Normal <br/>Skin</div>
                                        <div className="dry-norm-foot-text-r">Crepey <br/>Skin</div>
                                    </div>
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

                </div>
            </div>
        </>
    )
}

export default Page3
