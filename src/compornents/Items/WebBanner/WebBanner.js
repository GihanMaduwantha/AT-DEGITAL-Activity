import React from "react";
import './WebBanner.css';
import { useMediaQuery } from "react-responsive";
import web_banner_new from "../../../assets/HeroImage.jpg";
import web_banner_mobile from "../../../assets/HeroSection.jpg";


const WebBanner = () => {
    const isMobile = useMediaQuery({ query: "(max-width: 768px)" });


 return (
   <div className="image-container banner-cont">
    <img src={isMobile ? web_banner_mobile : web_banner_new}
     alt="banner"
     style={{
        width: '100%',
        maxWidth: '100%',
        height: '100%',
      }}
     />

     <div className="description-container">
      <div className="description">
        <div className="description-content">
          <h1 className="d-c" style={{ paddingLeft:'20px', margin:'0px',marginBottom:'10px' }}>
          We crush your
          competitors, goals, and
          sales records - without
          the B.S.
          </h1>
        
        <div className="btn-container">
        <button className="description-btn">
        <span className="span-btn">Get free consultation</span>

      </button>
          
        </div>
        
        </div>
        
        
      </div>
     </div>

   </div>
   
    
 )   
}
export default WebBanner;