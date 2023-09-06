import React, { useEffect } from "react";
import '../styles/tripStyles.css';

import SydneyOperaHouseImg from '../Images/sydney.jpeg';
import MarriottImg from '../Images/Marriott.jpeg';
import bondiBeachImg from '../Images/bondiBeach.jpeg';
import kangarooislandImg from '../Images/kangarooisland.jpeg';
import MelbourneImg from '../Images/Melbourne.jpeg';
import cityPalaceImg from '../Images/cityPalace.jpeg';
import DaintreeRainforestImg from '../Images/DaintreeRainforest.jpeg';
import palmJumeirahImg from '../Images/palmJumeirah.avif';
import returnImg from '../Images/return.jpeg';

const AustraliaNewZealandTrip = () => {
  useEffect(() => {
    const coll = document.getElementsByClassName("collapsible");
    const toggleCollapsible = function () {
      this.classList.toggle("active");
      var content = this.nextElementSibling;
      if (window.innerWidth <= 900) {
        // For small screens, toggle between "block" and "none"
        content.style.display = (content.style.display === "block") ? "none" : "block";
      } else {
        // For large screens, toggle between "flex" and "none"
        content.style.display = (content.style.display === "flex") ? "none" : "flex";
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


  return (
    <div className="timeline">
      <div className="detailContainer left">
        <div className="content">
          <button type="button" className="collapsible">Day1: Welcome to the Marriott Hotel</button>
          <div className="daysPlanText">
            <img src={MarriottImg} alt="Marriott" className="planImages" />
            <div className="planDetailsText">
              <p className="planHeading">Marriott Hotel</p>
              <p>You will be advised to take rest for the first day. In the evening, you will be taken to hotel's party room.
                Where you guys can meet with other people and the hotel employees will arrange a welcome party for you.
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="detailContainer right">
        <div className="content">
          <button type="button" className="collapsible">Day2: Sydney Opera House Visit</button>
          <div className="daysPlanText">
            <img src={SydneyOperaHouseImg} alt="Sydney Opera House" className="planImages" />
            <div className="planDetailsText">
              <p className="planHeading">Sydney Opera House</p>
              <p>You will be taken to visit the Sydney Opera House. The Sydney Opera House is a multi-venue performing arts centre in Sydney. Located on the foreshore of Sydney Harbour, it is widely regarded as one of the world's most famous and distinctive buildings and a masterpiece of 20th-century architecture.</p>
            </div>
          </div>
        </div>
      </div>
      <div className="detailContainer left">
        <div className="content">
          <button type="button" className="collapsible">Day3: Bondi Beach Visit</button>
          <div className="daysPlanText">
            <img src={bondiBeachImg} alt="Bondi Beach" className="planImages" />
            <div className="planDetailsText">
              <p className="planHeading">Bondi Beach</p>
              <p>You will be taken to visit the Sydney Opera House.The Sydney Opera House is a multi-venue performing arts centre in Sydney. Located on the foreshore of Sydney Harbour, it is widely regarded as one of the world's most famous and distinctive buildings and a masterpiece of 20th-century architecture.</p>
            </div>
          </div>
        </div>
      </div>
      <div className="detailContainer right">
        <div className="content">
          <button type="button" className="collapsible">Day4: Kangaroo Island</button>
          <div className="daysPlanText">
            <img src={kangarooislandImg} alt="Kongaroo Island" className="planImages" />
            <div className="planDetailsText">
              <p className="planHeading">Kangaroo Island</p>
              <p>You will be taken to visit the Sydney Opera House.The Sydney Opera House is a multi-venue performing arts centre in Sydney. Located on the foreshore of Sydney Harbour, it is widely regarded as one of the world's most famous and distinctive buildings and a masterpiece of 20th-century architecture.</p>
            </div>
          </div>
        </div>
      </div>
      <div className="detailContainer left">
        <div className="content">
          <button type="button" className="collapsible">Day5: Melbourne City</button>
          <div className="daysPlanText">
            <img src={MelbourneImg} alt="Melbourne City" className="planImages" />
            <div className="planDetailsText">
              <p className="planHeading">Melbourne City</p>
              <p>You will be taken to visit the Sydney Opera House.The Sydney Opera House is a multi-venue performing arts centre in Sydney. Located on the foreshore of Sydney Harbour, it is widely regarded as one of the world's most famous and distinctive buildings and a masterpiece of 20th-century architecture.</p>
            </div>
          </div>
        </div>
      </div>
      <div className="detailContainer right">
        <div className="content">
          <button type="button" className="collapsible">Day6: Daintree Rainforest</button>
          <div className="daysPlanText">
            <img src={DaintreeRainforestImg} alt="Daintree Rainforest" className="planImages" />
            <div className="planDetailsText">
              <p className="planHeading">Daintree Rainforest</p>
              <p>You will be taken to visit the Sydney Opera House.The Sydney Opera House is a multi-venue performing arts centre in Sydney. Located on the foreshore of Sydney Harbour, it is widely regarded as one of the world's most famous and distinctive buildings and a masterpiece of 20th-century architecture.</p>
            </div>
          </div>
        </div>
      </div>
      <div className="detailContainer left">
        <div className="content">
          <button type="button" className="collapsible">Day7: Fly to New Zealand</button>
          <div className="daysPlanText">
            <img src={returnImg} alt="Melbourne City" className="planImages" />
            <div className="planDetailsText">
              <p className="planHeading">New Zealand</p>
              <p>You will be taken to visit the Sydney Opera House.The Sydney Opera House is a multi-venue performing arts centre in Sydney. Located on the foreshore of Sydney Harbour, it is widely regarded as one of the world's most famous and distinctive buildings and a masterpiece of 20th-century architecture.</p>
            </div>
          </div>
        </div>
      </div>
      <div className="detailContainer right">
        <div className="content">
          <button type="button" className="collapsible">Day8: Queenstown Visit</button>
          <div className="daysPlanText">
            <img src={DaintreeRainforestImg} alt="Daintree Rainforest" className="planImages" />
            <div className="planDetailsText">
              <p className="planHeading">Queenstown Visit</p>
              <p>You will be taken to visit the Sydney Opera House.The Sydney Opera House is a multi-venue performing arts centre in Sydney. Located on the foreshore of Sydney Harbour, it is widely regarded as one of the world's most famous and distinctive buildings and a masterpiece of 20th-century architecture.</p>
            </div>
          </div>
        </div>
      </div>
      <div className="detailContainer left">
        <div className="content">
          <button type="button" className="collapsible">Day9: Auckland Visit</button>
          <div className="daysPlanText">
            <img src={cityPalaceImg} alt="Marriott" className="planImages" />
            <div className="planDetailsText">
              <p className="planHeading">Auckland Visit</p>
              <p>You will be advised to take rest for the first day. In the evening, you will be taken to hotel's party room.
                Where you guys can meet with other people and the hotel employees will arrange a welcome party for you.
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="detailContainer right">
        <div className="content">
          <button type="button" className="collapsible">Day10: Wellington Waterfront</button>
          <div className="daysPlanText">
            <img src={bondiBeachImg} alt="Sydney Opera House" className="planImages" />
            <div className="planDetailsText">
              <p className="planHeading">Wellington Waterfront</p>
              <p>You will be taken to visit the Sydney Opera House. The Sydney Opera House is a multi-venue performing arts centre in Sydney. Located on the foreshore of Sydney Harbour, it is widely regarded as one of the world's most famous and distinctive buildings and a masterpiece of 20th-century architecture.</p>
            </div>
          </div>
        </div>
      </div>
      <div className="detailContainer left">
        <div className="content">
          <button type="button" className="collapsible">Day11: Rotorua Visit</button>
          <div className="daysPlanText">
            <img src={palmJumeirahImg} alt="Marriott" className="planImages" />
            <div className="planDetailsText">
              <p className="planHeading">Rotorua Visit</p>
              <p>You will be advised to take rest for the first day. In the evening, you will be taken to hotel's party room.
                Where you guys can meet with other people and the hotel employees will arrange a welcome party for you.
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="detailContainer right">
        <div className="content">
          <button type="button" className="collapsible">Day12: Return </button>
          <div className="daysPlanText">
            <img src={returnImg} alt="Sydney Opera House" className="planImages" />
            <div className="planDetailsText">
              <p className="planHeading">Fly back to Home</p>
              <p>You will be taken to visit the Sydney Opera House. The Sydney Opera House is a multi-venue performing arts centre in Sydney. Located on the foreshore of Sydney Harbour, it is widely regarded as one of the world's most famous and distinctive buildings and a masterpiece of 20th-century architecture.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AustraliaNewZealandTrip;