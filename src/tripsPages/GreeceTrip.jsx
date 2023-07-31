import React , { useEffect } from "react";
import '../styles/tripStyles.css';

import MarriottImg from '../Images/Marriott.jpeg';
import rhodesGreeceImg from '../Images/rhodesGreece.jpeg';
import athensImg from '../Images/athens.jpeg';
import santoriniImg from '../Images/greece.jpg';
import mykonosImg from '../Images/mykonos.jpeg';
import returnImg from '../Images/return.jpeg';

const GreeceTrip = () => {

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
        <div class="detailContainer left">
          <div class="content">
            <button type="button" className="collapsible">Day1: Welcome to the Marriott Hotel</button>
            <div className="daysPlanText"> 
               <img src={MarriottImg} alt="Marriott" className="planImages"/>
               <div className="planDetailsText">
                  <p className="planHeading">Marriott Hotel</p>
                  <p>You will be advised to take rest for the first day. In the evening, you will be taken to hotel's party room.
                    Where you guys can meet with other people and the hotel employees will arrange a welcome party for you.
                  </p>
               </div>
            </div>
          </div>
        </div>
        <div class="detailContainer right">
          <div class="content">
            <button type="button" className="collapsible">Day2: Athens Visit</button>
            <div className="daysPlanText"> 
               <img src={athensImg} alt="Sydney Opera House" className="planImages"/>
               <div className="planDetailsText">
                  <p className="planHeading">Athens</p>
                  <p>You will be taken to visit the Sydney Opera House. The Sydney Opera House is a multi-venue performing arts centre in Sydney. Located on the foreshore of Sydney Harbour, it is widely regarded as one of the world's most famous and distinctive buildings and a masterpiece of 20th-century architecture.</p>
               </div>
            </div>
          </div>
        </div>
        <div class="detailContainer left">
          <div class="content">
            <button type="button" className="collapsible">Day3: Santorini Visit</button>
            <div className="daysPlanText"> 
               <img src={santoriniImg } alt="Bondi Beach" className="planImages"/>
               <div className="planDetailsText">
                  <p className="planHeading">Santorini</p>
                  <p>You will be taken to visit the Sydney Opera House.The Sydney Opera House is a multi-venue performing arts centre in Sydney. Located on the foreshore of Sydney Harbour, it is widely regarded as one of the world's most famous and distinctive buildings and a masterpiece of 20th-century architecture.</p>
               </div>
            </div>
          </div>
        </div>
        <div class="detailContainer right">
          <div class="content">
            <button type="button" className="collapsible">Day4: Mykonos Visit</button>
            <div className="daysPlanText"> 
               <img src={mykonosImg} alt="Kongaroo Island" className="planImages"/>
               <div className="planDetailsText">
                  <p className="planHeading">Mykonos</p>
                  <p>You will be taken to visit the Sydney Opera House.The Sydney Opera House is a multi-venue performing arts centre in Sydney. Located on the foreshore of Sydney Harbour, it is widely regarded as one of the world's most famous and distinctive buildings and a masterpiece of 20th-century architecture.</p>
               </div>
            </div>
          </div>
        </div>
        <div class="detailContainer left">
          <div class="content">
            <button type="button" className="collapsible">Day5: Rhodes Visit</button>
            <div className="daysPlanText"> 
               <img src={rhodesGreeceImg} alt="Melbourne City" className="planImages"/>
               <div className="planDetailsText">
                  <p className="planHeading">Rhodes</p>
                  <p>You will be taken to visit the Sydney Opera House.The Sydney Opera House is a multi-venue performing arts centre in Sydney. Located on the foreshore of Sydney Harbour, it is widely regarded as one of the world's most famous and distinctive buildings and a masterpiece of 20th-century architecture.</p>
               </div>
            </div>
          </div>
        </div>
        <div class="detailContainer left">
          <div class="content">
            <button type="button" className="collapsible">Day7: Return</button>
            <div className="daysPlanText"> 
               <img src={returnImg} alt="Melbourne City" className="planImages"/>
               <div className="planDetailsText">
                  <p className="planHeading">Fly back to home</p>
                  <p>You will be taken to visit the Sydney Opera House.The Sydney Opera House is a multi-venue performing arts centre in Sydney. Located on the foreshore of Sydney Harbour, it is widely regarded as one of the world's most famous and distinctive buildings and a masterpiece of 20th-century architecture.</p>
               </div>
            </div>
          </div>
        </div>
    </div>
    );   
   }
   
   export default GreeceTrip;