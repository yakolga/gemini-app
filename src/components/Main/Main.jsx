import React from "react";
import './Main.css';
import { assets } from "../../assets/assets";
import { Context } from "../../context/Context";
import { useContext } from "react";

const Main = () => {

    const {onSent, recentPrompt, showResult, loading, resultData, setInput, input} = useContext(Context);
    return (
        <div className="main">
            <div className="nav">
                <p>Gemini</p>
                <img src={assets.user_icon} alt=""></img>
            </div>
            <div className="main-container">
                {!showResult
                ? <>
                    <div className="greet">
                        <p><span>Hello, Dev.</span></p>
                        <p>How can i help you today?</p>
                    </div>
                    <div className="cards">
                        <div className="card">
                            <p>Suggest beautiful places to see on an upcoming road trip</p>
                            <img src={assets.compass_icon} alt=""></img>
                        </div>
                        <div className="card">
                            <p>Briefly summarize this concept: urban planning</p>
                            <img src={assets.bulb_icon} alt=""></img>
                        </div>
                        <div className="card">
                            <p>What is React JS?</p>
                            <img src={assets.message_icon} alt=""></img>
                        </div>
                        <div className="card">
                            <p>Write a schedule of learning ReactJS</p>
                            <img src={assets.code_icon} alt=""></img>
                        </div>
                    </div>
                </> : 
                <div className="result">
                    <div className="result-title">
                        <img src={assets.user_icon} alt=""></img>
                        <p>{recentPrompt}</p>
                    </div>
                    <div className="result-data">
                        <img src={assets.gemini_icon} alt=""></img>
                        {loading ? 
                        <div className="loader">
                            <hr></hr>
                            <hr></hr>
                            <hr></hr>
                        </div> 
                        : 
                        <p dangerouslySetInnerHTML={{__html:resultData}}></p>}
                    </div>
                </div>
                }
                <div className="main-bottom">
                    <div className="search-box">
                        <input onChange={(e) => setInput(e.target.value)} value={input} type="text" placeholder="Enter a prompt here"></input>
                        <div>
                            <img src={assets.gallery_icon} alt=""></img>
                            <img src={assets.mic_icon} alt=""></img>
                            <img onClick={() => onSent()} src={assets.send_icon} alt=""></img>
                        </div>
                    </div>
                    <p className="bottom-info">
                        Gemini may display inaccurate info, including about people, so double-check its responce. Your privacy and Gemini Apps.
                    </p>
                </div>
            </div>
        </div>
    )
}

export default Main;