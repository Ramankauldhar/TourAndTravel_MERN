import React, { useEffect }  from "react";
import '../styles/tripStyles.css';

import MarriottImg from '../Images/Marriott.jpeg';
import kinkauJiImg from '../Images/kinkau-ji.jpeg';
import osakaCityImg from '../Images/osakaCity.jpeg';
import sapporoImg from '../Images/sapporo.jpeg';
import tokyoDowntownImg from '../Images/tokyoDowntown.jpeg';
import returnImg from '../Images/return.jpeg';

const JapanSouthKoreaTrip = () => {

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
      <>
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
          <button type="button" className="collapsible">Day2: Tokyo Downtown</button>
          <div className="daysPlanText"> 
             <img src={tokyoDowntownImg} alt="Sydney Opera House" className="planImages"/>
             <div className="planDetailsText">
                <p className="planHeading">Tokyo Downtown</p>
                <p>You will be taken to visit the Sydney Opera House. The Sydney Opera House is a multi-venue performing arts centre in Sydney. Located on the foreshore of Sydney Harbour, it is widely regarded as one of the world's most famous and distinctive buildings and a masterpiece of 20th-century architecture.</p>
             </div>
          </div>
        </div>
      </div>
      <div class="detailContainer left">
        <div class="content">
          <button type="button" className="collapsible">Day3: Sapporo Visit</button>
          <div className="daysPlanText"> 
             <img src={sapporoImg} alt="Bondi Beach" className="planImages"/>
             <div className="planDetailsText">
                <p className="planHeading">Sapporo</p>
                <p>You will be taken to visit the Sydney Opera House.The Sydney Opera House is a multi-venue performing arts centre in Sydney. Located on the foreshore of Sydney Harbour, it is widely regarded as one of the world's most famous and distinctive buildings and a masterpiece of 20th-century architecture.</p>
             </div>
          </div>
        </div>
      </div>
      <div class="detailContainer right">
        <div class="content">
          <button type="button" className="collapsible">Day4: Osaka City</button>
          <div className="daysPlanText"> 
             <img src={osakaCityImg} alt="Kongaroo Island" className="planImages"/>
             <div className="planDetailsText">
                <p className="planHeading">Osaka</p>
                <p>You will be taken to visit the Sydney Opera House.The Sydney Opera House is a multi-venue performing arts centre in Sydney. Located on the foreshore of Sydney Harbour, it is widely regarded as one of the world's most famous and distinctive buildings and a masterpiece of 20th-century architecture.</p>
             </div>
          </div>
        </div>
      </div>
      <div class="detailContainer left">
        <div class="content">
          <button type="button" className="collapsible">Day5: Kinkau-Ji</button>
          <div className="daysPlanText"> 
             <img src={kinkauJiImg} alt="Melbourne City" className="planImages"/>
             <div className="planDetailsText">
                <p className="planHeading">Kinkau-Ji</p>
                <p>You will be taken to visit the Sydney Opera House.The Sydney Opera House is a multi-venue performing arts centre in Sydney. Located on the foreshore of Sydney Harbour, it is widely regarded as one of the world's most famous and distinctive buildings and a masterpiece of 20th-century architecture.</p>
             </div>
          </div>
        </div>
      </div>
      <div class="detailContainer left">
        <div class="content">
          <button type="button" className="collapsible">Day7: Fly to South Korea</button>
          <div className="daysPlanText"> 
             <img src={returnImg} alt="Melbourne City" className="planImages"/>
             <div className="planDetailsText">
                <p className="planHeading">South Korea</p>
                <p>You will be taken to visit the Sydney Opera House.The Sydney Opera House is a multi-venue performing arts centre in Sydney. Located on the foreshore of Sydney Harbour, it is widely regarded as one of the world's most famous and distinctive buildings and a masterpiece of 20th-century architecture.</p>
             </div>
          </div>
        </div>
      </div>
  </div>
 
  <div class="timeline">
      <div class="detailContainer left">
        <div class="content">
          <button type="button" className="collapsible">Day8: Welcome to the Marriott Hotel</button>
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
          <button type="button" className="collapsible">Day9: Seoul visit</button>
          <div className="daysPlanText"> 
             <img src={tokyoDowntownImg} alt="Sydney Opera House" className="planImages"/>
             <div className="planDetailsText">
                <p className="planHeading">Seoul</p>
                <p>You will be taken to visit the Sydney Opera House. The Sydney Opera House is a multi-venue performing arts centre in Sydney. Located on the foreshore of Sydney Harbour, it is widely regarded as one of the world's most famous and distinctive buildings and a masterpiece of 20th-century architecture.</p>
             </div>
          </div>
        </div>
      </div>
      <div class="detailContainer left">
        <div class="content">
          <button type="button" className="collapsible">Day10: Busan Visit</button>
          <div className="daysPlanText"> 
             <img src={sapporoImg} alt="Bondi Beach" className="planImages"/>
             <div className="planDetailsText">
                <p className="planHeading"> Busan</p>
                <p>You will be taken to visit the Sydney Opera House.The Sydney Opera House is a multi-venue performing arts centre in Sydney. Located on the foreshore of Sydney Harbour, it is widely regarded as one of the world's most famous and distinctive buildings and a masterpiece of 20th-century architecture.</p>
             </div>
          </div>
        </div>
      </div>
      <div class="detailContainer right">
        <div class="content">
          <button type="button" className="collapsible">Day11: Incheon Visit</button>
          <div className="daysPlanText"> 
             <img src={osakaCityImg} alt="Kongaroo Island" className="planImages"/>
             <div className="planDetailsText">
                <p className="planHeading">Incheon</p>
                <p>You will be taken to visit the Sydney Opera House.The Sydney Opera House is a multi-venue performing arts centre in Sydney. Located on the foreshore of Sydney Harbour, it is widely regarded as one of the world's most famous and distinctive buildings and a masterpiece of 20th-century architecture.</p>
             </div>
          </div>
        </div>
      </div>
      <div class="detailContainer left">
        <div class="content">
          <button type="button" className="collapsible">Day12: Daegu Visit</button>
          <div className="daysPlanText"> 
             <img src={kinkauJiImg} alt="Melbourne City" className="planImages"/>
             <div className="planDetailsText">
                <p className="planHeading">Daegu</p>
                <p>You will be taken to visit the Sydney Opera House.The Sydney Opera House is a multi-venue performing arts centre in Sydney. Located on the foreshore of Sydney Harbour, it is widely regarded as one of the world's most famous and distinctive buildings and a masterpiece of 20th-century architecture.</p>
             </div>
          </div>
        </div>
      </div>
      <div class="detailContainer left">
        <div class="content">
          <button type="button" className="collapsible">Day13: Return</button>
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
  </>
  );
}  
   
   export default JapanSouthKoreaTrip;