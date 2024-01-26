import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Redirect, Link } from "react-router-dom";
import './page1.css'

function Page1() {
    return (
        <>
            <div className="progress-bar-container">
                <div className="rectangle">
                    <span class="material-symbols-outlined">
                        chevron_left
                    </span>
                </div>
                <div className="progress-bar-box">
                    <div className="progress-content"></div>
                </div>
            </div>
        </>
    )
}

export default Page1;
