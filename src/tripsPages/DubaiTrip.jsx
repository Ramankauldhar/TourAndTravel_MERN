import React , { useEffect } from "react";
import '../styles/tripStyles.css';

import MarriottImg from '../Images/Marriott.jpeg';
import burjKhailfaImg from '../Images/burjKhalifa.jpeg';
import dubaiGardenImg from '../Images/dubaiGarden.jpeg';
import dubaiAquariumImg from '../Images/dubaiAquarium.jpeg';
import dubaiWaterparkImg from '../Images/dubaiWaterPark.jpeg';
import palmJumeirahImg from '../Images/palmJumeirah.avif';
import returnImg from '../Images/return.jpeg';

const DubaiTrip = () => {

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
    <div className="timeline">
        <div className="detailContainer left">
          <div className="content">
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
        <div className="detailContainer right">
          <div className="content">
            <button type="button" className="collapsible">Day2: Burj Khalifa</button>
            <div className="daysPlanText"> 
               <img src={burjKhailfaImg} alt="Sydney Opera House" className="planImages"/>
               <div className="planDetailsText">
                  <p className="planHeading"> Burj Khalifa</p>
                  <p>You will be taken to visit the Sydney Opera House. The Sydney Opera House is a multi-venue performing arts centre in Sydney. Located on the foreshore of Sydney Harbour, it is widely regarded as one of the world's most famous and distinctive buildings and a masterpiece of 20th-century architecture.</p>
               </div>
            </div>
          </div>
        </div>
        <div className="detailContainer left">
          <div className="content">
            <button type="button" className="collapsible">Day3: Dubai Miracle Garden</button>
            <div className="daysPlanText"> 
               <img src={dubaiGardenImg} alt="Bondi Beach" className="planImages"/>
               <div className="planDetailsText">
                  <p className="planHeading">Dubai Miracle Garden</p>
                  <p>You will be taken to visit the Sydney Opera House.The Sydney Opera House is a multi-venue performing arts centre in Sydney. Located on the foreshore of Sydney Harbour, it is widely regarded as one of the world's most famous and distinctive buildings and a masterpiece of 20th-century architecture.</p>
               </div>
            </div>
          </div>
        </div>
        <div className="detailContainer right">
          <div className="content">
            <button type="button" className="collapsible">Day4: Dubai underwater aquarium and Zoo</button>
            <div className="daysPlanText"> 
               <img src={dubaiAquariumImg } alt="Kongaroo Island" className="planImages"/>
               <div className="planDetailsText">
                  <p className="planHeading"> Dubai underwater aquarium and Zoo</p>
                  <p>You will be taken to visit the Sydney Opera House.The Sydney Opera House is a multi-venue performing arts centre in Sydney. Located on the foreshore of Sydney Harbour, it is widely regarded as one of the world's most famous and distinctive buildings and a masterpiece of 20th-century architecture.</p>
               </div>
            </div>
          </div>
        </div>
        <div className="detailContainer left">
          <div className="content">
            <button type="button" className="collapsible">Day5: Palm Jumeirah</button>
            <div className="daysPlanText"> 
               <img src={palmJumeirahImg} alt="Melbourne City" className="planImages"/>
               <div className="planDetailsText">
                  <p className="planHeading">Palm Jumeirah</p>
                  <p>You will be taken to visit the Sydney Opera House.The Sydney Opera House is a multi-venue performing arts centre in Sydney. Located on the foreshore of Sydney Harbour, it is widely regarded as one of the world's most famous and distinctive buildings and a masterpiece of 20th-century architecture.</p>
               </div>
            </div>
          </div>
        </div>
        <div className="detailContainer right">
          <div className="content">
            <button type="button" className="collapsible">Day6: Dubai Water Park</button>
            <div className="daysPlanText"> 
               <img src={dubaiWaterparkImg} alt="Daintree Rainforest" className="planImages"/>
               <div className="planDetailsText">
                  <p className="planHeading">Dubai Water Park</p>
                  <p>You will be taken to visit the Sydney Opera House.The Sydney Opera House is a multi-venue performing arts centre in Sydney. Located on the foreshore of Sydney Harbour, it is widely regarded as one of the world's most famous and distinctive buildings and a masterpiece of 20th-century architecture.</p>
               </div>
            </div>
          </div>
        </div>
        <div className="detailContainer left">
          <div className="content">
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
   
   export default DubaiTrip;