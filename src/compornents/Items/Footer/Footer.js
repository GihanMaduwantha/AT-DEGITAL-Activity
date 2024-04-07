import React from "react";
import { Link } from 'react-router-dom';
import logo from '../../../assets/WhiteLogo.png'
import line from "../../../assets/Line7.png"

function Footer() {

    return(
        <footer
      className="sm:w-full bg-neutral-100 text-left text-neutral-600 lg:text-left" style={{margin:'0', backgroundColor: '#6B3CC9', color:'white'}}>
    

      
      <div className="mx-6 py-5 text-center md:text-left">
        <div className="grid-1 grid gap-8 md:grid-cols-1 lg:grid-cols-2 ">
          {/* <!-- Tailwind Elements section --> */}
          <div className="">
           
            
            <p className="">
              <img src={logo} style={{width:'230px'}}/>
              <p className="mb-4 flex text-left md:justify-center sm:justify-center" style={{ fontSize: '16px',marginTop:'5px',width:'413px',fontStyle:'Lato' }}>Your goal is our target. Not anything in between. We use online marketing platforms and tools to achieve single objective - your business results.</p>
            </p>
          </div>
          
          {/* <!-- Our technologies section --> */}
          <div className="grid-2 grid gap-8 lg:grid-cols-2 md:grid-cols-2 sm:grid-cols-1 ">
          <div className=''>
            <h6
              className="mb-4 flex sm:justify-start font-semibold uppercase md:justify-start">
              Our Technologies
            </h6>
            <p className="mb-2 flex items-left justify-start md:justify-start ">
            ReactJS
              
            </p>
            <p className="mb-2 flex items-center justify-left md:justify-start ">
            Gatsby
              
            </p>
            <p className="mb-2 flex items-center justify-left md:justify-start ">
            NextJS
              
            </p>
            <p className="mb-2 flex items-center justify-left md:justify-start">
            NodeJS
              
            </p>
          </div>
          
          {/* <!-- Our Services section --> */}
          <div>
            <h6
              className="mb-4 flex sm:justify-start font-semibold uppercase md:justify-start">
              Our Services
            </h6>
            <p className="mb-2 flex items-center justify-left md:justify-start">
            Social media Marketing
              
            </p>
            <p className="mb-2 flex items-center justify-left md:justify-start">
            Web & Mobile App Development
            </p>
            <p className="mb-2 flex items-center justify-left md:justify-start">
            Data & Analytics
            </p>
            
          </div>
          </div>
          
        </div>
      </div>

      {/* <!--Copyright section--> */}
      <div className="p-6 text-center">
      <hr class="rgba-white-light" style={{margin: "0 15%"}}/>
      <div className="flex flex-row justify-center mt-2">
        <button>
            Privacy Policy
        </button>
        <p className="flex mt-2 w-14 flex-none justify-center">
            <img src={line} alt="line"/>
        </p>
        <button>
            Terms & Conditions
        </button>
        </div>
        
      </div>
    </footer>
    )
}

export default Footer;
