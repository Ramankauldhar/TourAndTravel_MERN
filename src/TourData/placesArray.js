import australiaImg from '../Images/australiaNewzealand.jpg';
import dubaiImg from '../Images/dubai.jpg';
import greeceImg from '../Images/greece.jpg';
import indiaImg from '../Images/india.jpg';
import japanImg from '../Images/japan.jpg';
import turkeyImg from '../Images/turkey.jpg';

const placesArray = [
    {
        id:"100001",
        tour:"Australia and New Zealand Tour",
        imageUrl: australiaImg,
        price: 8000,
        avgRating:4.6,
        days:25,
        reviews:[
          {
            name: "Reema",
            rating: 4.6,
          },
          {
            name: "Tiya",
            rating: 5.0,
          },
        ],
    },
    {
        id:"100002",
        tour:"Dubai Tour",
        imageUrl: dubaiImg,
        price: 4000,
        avgRating:4.5,
        days:20,
        reviews:[
          {
            name: "Reema",
            rating: 4.5,
          },
        ],
    },
    {
         id:"100003",
        tour:"Greece Tour",
        imageUrl: greeceImg,
        price: 8000,
        avgRating:4.8,
        days:25,
        reviews:[
          {
            name: "Reema",
            rating: 4.8,
          },
        ],
    },
    {
         id:"100004",
        tour:"India Tour",
        imageUrl: indiaImg,
        price: 5000,
        avgRating:4.2,
        days:12,
        reviews:[
          {
            name: "Reema",
            rating: 4.2,
          },
        ],
    },
    {
         id:"100005",
        tour:"Japan and South Korea Tour",
        imageUrl: japanImg,
        price: 6000,
        avgRating:4.9,
        days:18,
        reviews:[
          {
            name: "Reema",
            rating: 4.9,
          },
        ],
    },
    {
         id:"100006",
        tour:"Turkey Tour",
        imageUrl: turkeyImg,
        price: 5000,
        avgRating:4.5,
        days:22,
        reviews:[
          {
            name: "Reema",
            rating: 4.5,
          },
        ],
    },
]

export default placesArray;