import React, { useContext } from 'react';
import './Main.css';
import { assets } from '../../assets/assets';
import { Context } from '../../context/Context';

const Main = () => {

    const {onSent, recentPrompt, showResult,setShowResult, loading, resultData, setInput, input,handleNewChat} = useContext(Context);

    const handleEnter = (e) => {
     if (e.key === 'Enter'){
        onSent();
     }   
    }

  return (
    <div className='main'>
      <div className="nav">
        <p onClick={() => handleNewChat()}>Athena</p>
        <img src={assets.user_icon} alt="" />
      </div>
      <div className="main-container">

        {!showResult 
        ?<>
        <div className="greet">
            <p><span>Hello, Pratyush.</span></p>
            <p>How can I help you today?</p>
        </div>
        <div className="cards">
            <div onClick={() => onSent('Suggest beautiful places to see on an upcoming road trip')} className="card">
                <p>Suggest beautiful places to see on an upcoming road trip</p>
                <img src={assets.compass_icon} alt="" />
            </div>
            <div onClick={() => onSent('Briefly summarize this concept: urban planning')} className="card">
                <p>Briefly summarize this concept: urban planning</p>
                <img src={assets.bulb_icon} alt="" />
            </div>
            <div onClick={() => onSent('Brainstorm team bonding activities for our work retreat')} className="card">
                <p>Brainstorm team bonding activities for our work retreat</p>
                <img src={assets.message_icon} alt="" />
            </div>
            <div onClick={() => onSent('Improve the readability of the following code')} className="card">
                <p>Improve the readability of the following code</p>
                <img src={assets.code_icon} alt="" />
            </div>
        </div>
        </>
        : 
        <div className='result'>
            <div className="result-title">
                <img src={assets.user_icon} alt="" />
                <p>{recentPrompt}</p>
            </div>
            <div className="result-data">
                <img src={assets.gemini_icon} alt="" />
                {loading 
                ?<div className='loader'>
                    <hr />
                    <hr />
                    <hr />
                </div>
                : <p dangerouslySetInnerHTML={{__html:resultData.replace('undefined', '').trim()}}></p>}
            </div>
        </div>
        }

        <div className="main-bottom">
            <div className="search-box">
                <input onKeyDown={handleEnter} onChange={(e) => setInput(e.target.value)} value={input} type="text" placeholder='Enter a prompt here' />
                <div>
                    <img src={assets.gallery_icon} alt="" />
                    <img src={assets.mic_icon} alt="" />
                    <img onClick={() => onSent()} src={assets.send_icon} alt="" />
                </div>
            </div>
            <p className="bottom-info">
                Gemini may display inaccurate info, including about people, so double-check its responses. Your privacy and Gemini Apps.
            </p>
        </div>
      </div>
    </div>
  );
}

export default Main;