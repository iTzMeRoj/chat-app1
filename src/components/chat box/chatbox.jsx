import React from "react";
import './chatbox.css'
import assets from "../../assets/assets";

const Chatbox = () => {
    return (
        <div className="chat-box">
            <div className="chat-user">
                <img src={assets.profile_img} alt="" />
                <p>Rando <img className="dot" src={assets.green_dot} alt="" /></p>
                <img src={assets.help_icon} className="help" alt="" />
            </div>

            <div className="chat-msg">
                {/* sender's message */}
                <div className="s-msg">
                    <p className="msg">placeholder used ..</p>
                    <div>
                        <img src={assets.profile_img} alt="" />
                        <p>10:00 pm</p>
                    </div>
                </div>

                <div className="s-msg">
                    <img className="msg-img" src={assets.pic1} alt="" />
                    <div>
                        <img src={assets.profile_img} alt="" />
                        <p>10:00 pm</p>
                    </div>
                </div>

                {/* receiver's message */}
                <div className="r-msg">
                    <p className="msg">placeholder used ..</p>
                    <div>
                        <img src={assets.profile_img} alt="" />
                        <p>10:00 pm</p>
                    </div>
                </div>
            </div>



            <div className="chat-input">
                <input type="text" placeholder="send a message" />
                <input type="file" id="image" accept="image/png, image/jpeg" hidden />
                <label htmlFor="image">
                    <img src={assets.gallery_icon} alt="" />
                </label>
                <img src={assets.send_button} alt="" />
            </div>
        </div>
    )
}

export default Chatbox