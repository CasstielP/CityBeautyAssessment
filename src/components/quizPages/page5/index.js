



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
    const [sliderValue, setSliderValue] = useState(1);
    const [indicatorLeft, setIndicatorLeft] = useState(0)
    const sliderRef = useRef(null)

    const p5ContentArr = [
        {title: 'Newcomer', text: 'Whenever I touch my skin it feels flaky, but I leave it alone'},
        {title: 'Newcomer', text: 'I have applied lotion before to my dry, crepey skin (Rarely)'},
        {title: 'Newcomer', text: 'I do apply lotion/cream sometimes on dry skin'},
        {title: 'Newcomer', text: 'I do apply lotion/cream to my skin to feel moisturized'},
        {title: 'Amateur', text: 'I try to apply lotion/cream, but still not regularly'},
        {title: 'Amateur', text: 'I apply lotion/cream fairly regularly, at least once a week'},
        {title: 'Amateur', text: 'I apply lotion/cream after every shower consistenly for the last 1-3 months'},
        {title: 'Pro', text: 'I\'m committed to moisturize my skin whenever I can'},
        {title: 'Pro', text: 'Oh trust me. I deeply hydrate my skin, but I want to take it to the next level'},
        {title: 'Pro', text: 'I\'m on fire. Deeply hydrating my skin every day is a must to stimulate collagen/elastin'},
    ]

    const p5ContentArray = [
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
            // const max = types.length - 1;
            const max = 10;
            const newPos = (sliderValue / max) * (slider.offsetWidth) -40
            setIndicatorLeft(newPos)
        }
    }, [sliderValue]);



    return (
        <>
            <div className='p5-wrapper'>
                <div className='p5-container'>
                    <div className="logo-container-p5">
                        <img src={cbLogo} className="new-citbeauty-logo" />
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
                        <div className="progress-content-p5"></div>
                    </div>
                    <div className="num-indicator">
                        4/6
                    </div>
                </div>
                <h2>How often do you moisturize your skin?</h2>
                <p>Choose your current level to align with your routine:</p>
                <div className="p5-slider-wrapper">

                                <div className='p5-1-10'>
                                    <div>1</div>
                                    <div>10</div>
                                </div>

                                    <div className="p5-slider-value-text-container" style={{
                                        position: 'absolute',
                                        left: `${indicatorLeft}px`,
                                    }}>
                                        <div className="p3-slider-value">
                                        {sliderValue}
                                        </div>

                                </div>
                                <div className="slider-container">
                                    <input ref={sliderRef} type="range" min="1" max="10" value={sliderValue}
                                        class="slider" className="p5-slider"
                                        onChange={handleSliderChange} />
                                    <div className="new-pro-container">
                                        <div className="new">Newcomer</div>
                                        <div className="pro">Pro</div>
                                    </div>
                                </div>
                            </div>
                <div className='p5-info-box'>
                    <div className='p5-info-title'>
                        {p5ContentArr[sliderValue-1].title}
                    </div>
                    <div className='p5-info-text'>
                        {p5ContentArr[sliderValue-1].text}
                    </div>
                </div>

                <div className="p1-btm-button-container">
                        <Link style={{ textDecoration: "none", color: 'none', marginTop: '17px' }}
                        to={'/quiz/6'}>
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
                            to={'/quiz/6'}>
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


export default Page5
