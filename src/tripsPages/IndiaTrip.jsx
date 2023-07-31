import React , { useEffect }  from "react";
import '../styles/tripStyles.css';

import MarriottImg from '../Images/Marriott.jpeg';
import MehrangarhFortImg from '../Images/mehrangarhFort.jpeg';
import hawaMahalImg from '../Images/hawaMahal.jpeg';
import cityPalaceImg from '../Images/cityPalace.jpeg';
import amberPalaceImg from '../Images/amberPalace.jpeg';
import returnImg from '../Images/return.jpeg';

const IndiaTrip = () => {


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
            <button type="button" className="collapsible">Day2: Mehrangarh Fort</button>
            <div className="daysPlanText"> 
               <img src={MehrangarhFortImg} alt="Sydney Opera House" className="planImages"/>
               <div className="planDetailsText">
                  <p className="planHeading">Mehrangarh Fort</p>
                  <p>You will be taken to visit the Sydney Opera House. The Sydney Opera House is a multi-venue performing arts centre in Sydney. Located on the foreshore of Sydney Harbour, it is widely regarded as one of the world's most famous and distinctive buildings and a masterpiece of 20th-century architecture.</p>
               </div>
            </div>
          </div>
        </div>
        <div class="detailContainer left">
          <div class="content">
            <button type="button" className="collapsible">Day3: Hawa Mahal</button>
            <div className="daysPlanText"> 
               <img src={hawaMahalImg } alt="Bondi Beach" className="planImages"/>
               <div className="planDetailsText">
                  <p className="planHeading">Hawa Mahal</p>
                  <p>You will be taken to visit the Sydney Opera House.The Sydney Opera House is a multi-venue performing arts centre in Sydney. Located on the foreshore of Sydney Harbour, it is widely regarded as one of the world's most famous and distinctive buildings and a masterpiece of 20th-century architecture.</p>
               </div>
            </div>
          </div>
        </div>
        <div class="detailContainer right">
          <div class="content">
            <button type="button" className="collapsible">Day4: City Palace</button>
            <div className="daysPlanText"> 
               <img src={cityPalaceImg} alt="Kongaroo Island" className="planImages"/>
               <div className="planDetailsText">
                  <p className="planHeading">City Palace</p>
                  <p>You will be taken to visit the Sydney Opera House.The Sydney Opera House is a multi-venue performing arts centre in Sydney. Located on the foreshore of Sydney Harbour, it is widely regarded as one of the world's most famous and distinctive buildings and a masterpiece of 20th-century architecture.</p>
               </div>
            </div>
          </div>
        </div>
        <div class="detailContainer left">
          <div class="content">
            <button type="button" className="collapsible">Day5: Amber Palace</button>
            <div className="daysPlanText"> 
               <img src={amberPalaceImg} alt="Melbourne City" className="planImages"/>
               <div className="planDetailsText">
                  <p className="planHeading">Amber Palace</p>
                  <p>You will be taken to visit the Sydney Opera House.The Sydney Opera House is a multi-venue performing arts centre in Sydney. Located on the foreshore of Sydney Harbour, it is widely regarded as one of the world's most famous and distinctive buildings and a masterpiece of 20th-century architecture.</p>
               </div>
            </div>
          </div>
        </div>
        <div class="detailContainer right">
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
   
   export default IndiaTrip;