import React, { useContext, useState } from 'react';
import './Sidebar.css';
import {assets} from '../../assets/assets'
import { Context } from '../../context/Context';

const Sidebar = () => {

    const [extented, setExtented] = useState(true);
    const {onSent, prevPrompts, setRecentPrompt, input, setShowResult, handleNewChat} = useContext(Context);

    const loadPrompt = async (prompt) => {
      setRecentPrompt(prompt)
      await onSent(prompt);
    }

  return (
    <div className='sidebar'> 
      <div className="top">
        <img onClick={() => setExtented(prev => !prev)} className='menu' src={assets.menu_icon} alt="" />
        <div onClick={() => handleNewChat()} className="new-chat">
            <img src={assets.plus_icon} alt="" />
            {extented? <p>New Chat</p>: null}
        </div>
        {extented 
        ?<div className="recent">
            <p className='recent-title'>Recent</p>
            {prevPrompts.map((item, index) => {
              return(
                <div onClick={() => loadPrompt(item)} className="recent-entry">
                  <img src={assets.message_icon} alt=""/>
                  <p>{item.slice(0,18)}...</p>
                </div>
              )
            })}
            
        </div>
        : null
        }
      </div>
      <div className="bottom">
        <div className="bottom-item recent-entry">
            <img src={assets.question_icon} alt="" />
            {extented? <p>Help</p>: null}
        </div>
        <div className="bottom-item recent-entry">
            <img src={assets.history_icon} alt="" />
            {extented? <p>Activity</p>: null}
        </div>
        <div className="bottom-item recent-entry">
            <img src={assets.setting_icon} alt="" />
            {extented? <p>Settings</p> : null}
        </div>
      </div>
    </div>
  );
}

export default Sidebar;
