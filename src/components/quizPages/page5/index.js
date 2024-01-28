import './page5.css'
import cbLogo from '../Page1/city-beauty-logo.png'
import { Link } from 'react-router-dom'
import { useState, useRef, useEffect } from 'react'
import normal from '../page3/pg-3-normal-d.png'
import dry from '../page3/pg-3-dry-d.png'
import microWrinkle from '../page3/pg-3-microwrinkles-d.png'
import scaly from '../page3/pg-3-scaly-d.png'
import itchy from '../page3/pg-3-itchy-d.png'
import crepey from '../page3/pg-3-crepey-d.png'

const Page5 = () => {
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
            <div className='p5-wrapper'>
                <div className='p5-container'>
                    <div className="logo-container-p3">
                        <img src={cbLogo} className="new-citbeauty-logo" />
                    </div>
                </div>
                <div className="progress-bar-container">
                    <Link style={{ textDecoration: "none", color: 'white' }} to={'/quiz/4'}>
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
                        4/6
                    </div>
                </div>
                <h2>How often do you moisturize your skin?</h2>
                <p>Choose your current level to align with your routine:</p>

                <div className="slider-wrapper">

                                <div className='p5-1-10'>
                                    <div>1</div>
                                    <div>10</div>
                                </div>
                                    <div className="p3-slider-value-text-container" style={{
                                        position: 'absolute',
                                        left: `${indicatorLeft}px`,
                                    }}>
                                        <div className="p3-slider-value">
                                        {sliderValue}
                                        </div>
                                </div>
                                <div className="slider-container">
                                    <input ref={sliderRef} type="range" min="0" max="10" value={sliderValue}
                                        class="slider" className="p5-slider"
                                        onChange={handleSliderChange} />
                                    <div className="dry-norm-foot-text-container">
                                        <div className="dry-norm-foot-text-l">Newcomer</div>
                                        <div className="dry-norm-foot-text-r">Pro</div>
                                    </div>
                                </div>
                            </div>




            </div>
        </>
    )
}


export default Page5
