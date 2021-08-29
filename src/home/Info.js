import { Link } from 'react-router-dom';
import React, { useState, useEffect } from 'react';
import YouTubeIcon from '@material-ui/icons/YouTube';
import TelegramIcon from '@material-ui/icons/Telegram';
import FacebookIcon from '@material-ui/icons/Facebook';
import InstagramIcon from '@material-ui/icons/Instagram';
import Reveal from 'react-reveal/Reveal';

const Info = () => {

    return (
        <div className="Info">
                <>
                    <div className="side2">
                        {/* <img 
                            className="image" 
                            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQGrOgUd6OMZngtCzWkDf-ktAUguHGRWMfTMA&usqp=CAU"  
                            alt="startegiya" 
                        /> */}
                    </div>
                    <div className="side1">
                        <Reveal effect="fadeInUp" duration="1250">
                            <h1 className="title">Birgalikda ta'limni rivojlantiramiz</h1>
                            <p className="description">Lorem ipsum dolor sit amet consectetur adipisicing elit. Cupiditate et inventore nobis reiciendis soluta? Distinctio maxime nihil delectus eius vel blanditiis libero  beatae, impedit accusantium tempore doloremque officia. Quod, nam.</p>
                        </Reveal>
                        <div className="buttons">
                            <a className="linkBtn" target="_blank" href="https://t.me/ALI_4122">
                                Bog'lanish
                            </a>
                            <Link className="linkBtn" to="/about">
                                Blog
                            </Link>
                        </div>
                        <div className="socialNet">
                            <a className="links" href="#" target="_blank">
                                <YouTubeIcon  className="iconSvg" />
                            </a>
                            <a className="links" href="https://t.me/ALI_4122" target="_blank">
                                <TelegramIcon className="iconSvg" />
                            </a>
                            <a className="links" href="#" target="_blank">
                                <FacebookIcon className="iconSvg" />
                            </a>
                            <a className="links" href="#" target="_blank">
                                <InstagramIcon className="iconSvg" />
                            </a>
                        </div>
                    </div>
                </>
            
        </div>
    );
};


export default Info;