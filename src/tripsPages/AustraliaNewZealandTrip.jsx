import React , { useEffect }  from "react";
import '../styles/tripStyles.css';
import SydneyOperaHouseImg from '../Images/sydney.jpeg';
import MarriottImg from '../Images/Marriott.jpeg';
import bondiBeachImg from '../Images/bondiBeach.jpeg';
import kangarooislandImg from '../Images/kangarooisland.jpeg';
import MelbourneImg from '../Images/Melbourne.jpeg';
import DaintreeRainforestImg from '../Images/DaintreeRainforest.jpeg';

const AustraliaNewZealandTrip = () => {
  useEffect(() => {
    const coll = document.getElementsByClassName("collapsible");
    const toggleCollapsible = function () {
      this.classList.toggle("active");
      var content = this.nextElementSibling;
      if (content.style.display === "flex") {
        content.style.display = "none";
      } else {
        content.style.display = "flex";
      }
    };

    for (let i = 0; i < coll.length; i++) {
      coll[i].addEventListener("click", toggleCollapsible);
    }
    return () => {
      // Clean up event listeners when the component is unmounted
      for (let i = 0; i < coll.length; i++) {
        coll[i].removeEventListener("click", toggleCollapsible);
      }
    };
  }, []);
  

    return(
        
      <div class="timeline">
        <h2>Itinerary Summery</h2>
        <div class="detailContainer left">
          <div class="content">
            <button type="button" className="collapsible">Day1: Welcome to the Marriott Hotel</button>
            <div className="daysPlanText"> 
               <img src={MarriottImg} alt="Marriott" className="planImages"/>
               <div className="planDetailsText">
                  <p className="planHeading">Welcome to the Marriott Hotel</p>
                  <p>You will be advised to take rest for the first day. In the evening, you will be taken to hotel's party room.
                    Where you guys can meet with other people and the hotel employees will arrange a welcome party for you.
                  </p>
               </div>
            </div>
          </div>
        </div>
        <div class="detailContainer right">
          <div class="content">
            <button type="button" className="collapsible">Day2: Sydney Opera House Visit</button>
            <div className="daysPlanText"> 
               <img src={SydneyOperaHouseImg} alt="Sydney Opera House" className="planImages"/>
               <div className="planDetailsText">
                  <p className="planHeading">Sydney Opera House</p>
                  <p>You will be taken to visit the Sydney Opera House. The Sydney Opera House is a multi-venue performing arts centre in Sydney. Located on the foreshore of Sydney Harbour, it is widely regarded as one of the world's most famous and distinctive buildings and a masterpiece of 20th-century architecture.</p>
               </div>
            </div>
          </div>
        </div>
        <div class="detailContainer left">
          <div class="content">
            <button type="button" className="collapsible">Day3: Bondi Beach Visit</button>
            <div className="daysPlanText"> 
               <img src={bondiBeachImg} alt="Bondi Beach" className="planImages"/>
               <div className="planDetailsText">
                  <p className="planHeading">Bondi Beach</p>
                  <p>You will be taken to visit the Sydney Opera House.The Sydney Opera House is a multi-venue performing arts centre in Sydney. Located on the foreshore of Sydney Harbour, it is widely regarded as one of the world's most famous and distinctive buildings and a masterpiece of 20th-century architecture.</p>
               </div>
            </div>
          </div>
        </div>
        <div class="detailContainer right">
          <div class="content">
            <button type="button" className="collapsible">Day4: Kangaroo Island</button>
            <div className="daysPlanText"> 
               <img src={kangarooislandImg} alt="Kongaroo Island" className="planImages"/>
               <div className="planDetailsText">
                  <p className="planHeading">Kangaroo Island</p>
                  <p>You will be taken to visit the Sydney Opera House.The Sydney Opera House is a multi-venue performing arts centre in Sydney. Located on the foreshore of Sydney Harbour, it is widely regarded as one of the world's most famous and distinctive buildings and a masterpiece of 20th-century architecture.</p>
               </div>
            </div>
          </div>
        </div>
        <div class="detailContainer left">
          <div class="content">
            <button type="button" className="collapsible">Day5: Melbourne City</button>
            <div className="daysPlanText"> 
               <img src={MelbourneImg} alt="Melbourne City" className="planImages"/>
               <div className="planDetailsText">
                  <p className="planHeading">Melbourne City</p>
                  <p>You will be taken to visit the Sydney Opera House.The Sydney Opera House is a multi-venue performing arts centre in Sydney. Located on the foreshore of Sydney Harbour, it is widely regarded as one of the world's most famous and distinctive buildings and a masterpiece of 20th-century architecture.</p>
               </div>
            </div>
          </div>
        </div>
        <div class="detailContainer right">
          <div class="content">
            <button type="button" className="collapsible">Day6: Daintree Rainforest</button>
            <div className="daysPlanText"> 
               <img src={DaintreeRainforestImg} alt="Daintree Rainforest" className="planImages"/>
               <div className="planDetailsText">
                  <p className="planHeading">Daintree Rainforest</p>
                  <p>You will be taken to visit the Sydney Opera House.The Sydney Opera House is a multi-venue performing arts centre in Sydney. Located on the foreshore of Sydney Harbour, it is widely regarded as one of the world's most famous and distinctive buildings and a masterpiece of 20th-century architecture.</p>
               </div>
            </div>
          </div>
        </div>
        <div class="detailContainer left">
          <div class="content">
            <button type="button" className="collapsible">Day7: Melbourne City</button>
            <div className="daysPlanText"> 
               <img src={MelbourneImg} alt="Melbourne City" className="planImages"/>
               <div className="planDetailsText">
                  <p className="planHeading">Melbourne City</p>
                  <p>You will be taken to visit the Sydney Opera House.The Sydney Opera House is a multi-venue performing arts centre in Sydney. Located on the foreshore of Sydney Harbour, it is widely regarded as one of the world's most famous and distinctive buildings and a masterpiece of 20th-century architecture.</p>
               </div>
            </div>
          </div>
        </div>
        <div class="detailContainer right">
          <div class="content">
            <button type="button" className="collapsible">Day8: Daintree Rainforest</button>
            <div className="daysPlanText"> 
               <img src={DaintreeRainforestImg} alt="Daintree Rainforest" className="planImages"/>
               <div className="planDetailsText">
                  <p className="planHeading">Daintree Rainforest</p>
                  <p>You will be taken to visit the Sydney Opera House.The Sydney Opera House is a multi-venue performing arts centre in Sydney. Located on the foreshore of Sydney Harbour, it is widely regarded as one of the world's most famous and distinctive buildings and a masterpiece of 20th-century architecture.</p>
               </div>
            </div>
          </div>
        </div>
        <div class="detailContainer left">
          <div class="content">
            <button type="button" className="collapsible">Day9: Welcome to the Marriott Hotel At Newzealand</button>
            <div className="daysPlanText"> 
               <img src={MarriottImg} alt="Marriott" className="planImages"/>
               <div className="planDetailsText">
                  <p className="planHeading">Welcome to the Marriott Hotel</p>
                  <p>You will be advised to take rest for the first day. In the evening, you will be taken to hotel's party room.
                    Where you guys can meet with other people and the hotel employees will arrange a welcome party for you.
                  </p>
               </div>
            </div>
          </div>
        </div>
        <div class="detailContainer right">
          <div class="content">
            <button type="button" className="collapsible">Day10: Sydney Opera House Visit</button>
            <div className="daysPlanText"> 
               <img src={SydneyOperaHouseImg} alt="Sydney Opera House" className="planImages"/>
               <div className="planDetailsText">
                  <p className="planHeading">Sydney Opera House</p>
                  <p>You will be taken to visit the Sydney Opera House. The Sydney Opera House is a multi-venue performing arts centre in Sydney. Located on the foreshore of Sydney Harbour, it is widely regarded as one of the world's most famous and distinctive buildings and a masterpiece of 20th-century architecture.</p>
               </div>
            </div>
          </div>
        </div>
      </div>
    );
   }
   
   export default AustraliaNewZealandTrip;