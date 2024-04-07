import React from 'react';
import WebBanner from '../../Items/WebBanner/WebBanner';
import sec2 from "../../../assets/image1.png";
import sec1 from "../../../assets/image2.png";
import "./HomePage.css";
import Footer from '../../Items/Footer/Footer';
import { useState } from "react";
import { FaPlus , FaMinus } from "react-icons/fa6";
import NavBar from '../../Items/NavBar/NavBar';


const HomePage = () => {

    const [expandedIndex, setExpandedIndex] = useState(null);

    const faqs = [
      {
        question:'Lorem ipsum dolor sit amet consectetur. Leo at sit eu libero?',
        answer: 'Lorem ipsum dolor sit amet consectetur. Faucibus commodo suscipit id ipsum. Elementum ultrices nulla faucibus odio est sed aliquam. Sapien massa morbi risus sagittis tortor integer.',
      },
      {
        question:'Lorem ipsum dolor sit amet consectetur. Tortor scelerisque integer?',
        answer: 'Lorem ipsum dolor sit amet consectetur. Faucibus commodo suscipit id ipsum. Elementum ultrices nulla faucibus odio est sed aliquam. Sapien massa morbi risus sagittis tortor integer.',
      },
      {
        question:'Lorem ipsum dolor sit amet consectetur. Faucibus scelerisque nunc?',
        answer: 'Lorem ipsum dolor sit amet consectetur. Faucibus commodo suscipit id ipsum. Elementum ultrices nulla faucibus odio est sed aliquam. Sapien massa morbi risus sagittis tortor integer.',
      },
    ];
  
    const handleToggle = index => {
      setExpandedIndex(expandedIndex === index ? null : index);
    };
            
    return(
        <div className="homepage-container">
            <NavBar />
            <WebBanner/>


            <div>
            <div className="flex flex-col md:flex-row">
            <div className="w-full  sm:h-full md:h-full">
                <img src={sec1} alt="sec1" className="w-full h-full" />
            </div>

      
            <div className="grid grid-cols-1 gap-10 right-container">
                <div className="p-4 right-container-section1">
                <h2 className="text-xl font-bold text-senter1">Web & Mobile App Development</h2>
                <p className="mt-2 text-prgh1">Your web and mobile Apps are pieces of the puzzle to grow your business. We use frameworks which tailor content and engagement methods to respond to different intents shown by your potential customers who interact with your business online.</p>
                <br/>
                <div className="btn-learn-container1">
                <button className="btn-learn1">
                    <span className="span-btn-learn1">LEARN MORE</span>

                </button>
                </div>
                
                </div>
            </div>
            </div>

            
            <div className="flex flex-col-reverse md:flex-row">
            <div className="grid grid-cols-1 gap-10 right-container">
                <div className="p-4 right-container-section1">
                <h2 className="text-xl font-bold text-senter1">Digital Strategy Consulting</h2>
                <p className="mt-2 text-prgh1">Your digital strategy should complement the overall marketing strategy of the company. In online marketing, each component will never work in isolation and every business needs a different mix. We provide a clear concept and strategic overview to find the most efficient model for your business.</p>
                <br/>
                <div className="btn-learn-container1">
                <button className="btn-learn1">
                    <span className="span-btn-learn1">LEARN MORE</span>

                </button>
                </div>
                
                </div>
            </div>

            <div className="w-full  sm:h-full md:h-full">
                <img src={sec2} alt="sec1" className="w-full h-full" />
            </div>
            </div>
            

            
            
        </div>

        <div className="section-3-main-container">
            <h1 className="sec-3-title">
            Frequently asked questions
            </h1>
              <div className='main-faqSection'>
              <div className="faqSection">
              {faqs.map((faq, index) => (
                <div key={index} style={{ marginBottom: '20px' }}>
                  
                  <div className="Q-section"
                    style={{ cursor: 'pointer', color: expandedIndex === index ? 'rgba(107, 60, 201, 1)' : 'rgba(0, 0, 0, 1)' }}
                    onClick={() => handleToggle(index)}
                  >
                    {faq.question}
                    <div className='cont'>
                    <span className='Icon-span'>
                    {expandedIndex === index ? (
                      <FaMinus style={{ color:'rgba(107, 60, 201, 1)' }}/>

                    ) : (
                      
                      <FaPlus style={{  color:'rgba(0, 0, 0, 1)' }}/>
                    )}
                    </span>
                    </div>           
                  </div>
                  
                  
                  
                  {expandedIndex === index &&

                    <div className='A-section' style={{ color: expandedIndex === index ? 'rgba(107, 60, 201, 1)' : 'rgba(0, 0, 0, 1)' }}>
                      {faq.answer}
                    </div>
                    }
                </div>
              ))}
            </div>

              </div>
              

              
            

        </div>

            <Footer/>
           
        </div>

        


    )
}

export default HomePage;