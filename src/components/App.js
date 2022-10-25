import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Items from './Items';
import Item from './Item';
import Home from './Home';
import '../App.css';
import yellowHoodie from '../images/amiri7.png';
import yellowHoodieModel from '../images/amiri8.png';
import blackHoodie from '../images/amiri10.png';
import blackHoodieModel from '../images/amiri9.png';
import whiteHoodie from '../images/amiri11.png';
import whiteHoodieModel from '../images/amiri12.png';
import brownHoodie from '../images/amiri13.png';
import brownHoodieModel from '../images/amiri14.png';
import black1 from '../images/amirib1.png';
import black2 from '../images/amirib2.png';
import black3 from '../images/amirib3.png';
import black4 from '../images/amirib4.png';
import black5 from '../images/amirib5.png';
import black6 from '../images/amirib6.png';
import yellow1 from '../images/amiriy1.jpg';
import yellow2 from '../images/amiriy2.jpg';
import yellow3 from '../images/amiriy3.jpg';
import yellow4 from '../images/amiriy4.jpg';
import yellow5 from '../images/amiriy5.jpg';
import white1 from '../images/amiriw1.jpg';
import white2 from '../images/amiriw2.jpg';
import white3 from '../images/amiriw3.jpg';
import white4 from '../images/amiriw4.jpg';
import white5 from '../images/amiriw5.jpg';
import white6 from '../images/amiriw6.jpg';
import brown1 from '../images/amirib1.jpg';
import brown2 from '../images/amirib2.jpg';
import brown3 from '../images/amirib3.jpg';
import brown4 from '../images/amirib4.jpg';
import brown5 from '../images/amirib5.jpg';
import brown6 from '../images/amirib6.jpg';
import browntee1 from '../images/teeb1.jpg';
import browntee2 from '../images/teeb2.jpg';
import browntee3 from '../images/teeb3.jpg';
import browntee4 from '../images/teeb4.jpg';
import browntee5 from '../images/teeb5.jpg';
import browntee6 from '../images/teeb6.jpg';
import blacktee1 from '../images/amiribtee1.jpg';
import blacktee2 from '../images/amiribtee2.jpg';
import blacktee3 from '../images/amiribtee3.jpg';
import blacktee4 from '../images/amiribtee4.jpg';
import blacktee5 from '../images/amiribtee5.jpg';
import blacktee6 from '../images/amiribtee6.jpg';
import whitetee1 from '../images/amiriteew1.jpg';
import whitetee2 from '../images/amiriteew2.jpg';
import whitetee3 from '../images/amiriteew3.jpg';
import whitetee4 from '../images/amiriteew4.jpg';
import whitetee5 from '../images/amiriteew5.jpg';
import whitetee6 from '../images/amiriteew6.jpg';
import orangetee1 from '../images/amiriteeo1.jpg';
import orangetee2 from '../images/amiriteeo2.jpg';
import orangetee3 from '../images/amiriteeo3.jpg';
import orangetee4 from '../images/amiriteeo4.jpg';
import orangetee5 from '../images/amiriteeo5.jpg';
import orangetee6 from '../images/amiriteeo6.jpg';



const items = [
  { id: 1, name: 'yellow-hoodie', title: 'Yellow Hoodie', price: '399,00', color: 'Yellow', frontImg: yellowHoodie, modelImg: yellowHoodieModel, img1: yellow1, img2: yellow2, img3: yellow3, img4: yellow4, img5: yellow5, img6: yellow2 },
  { id: 2, name: 'black-hoodie', title: 'Black Hoodie', price: '499,00', color: 'Black', frontImg: blackHoodie, modelImg:blackHoodieModel, img1: black1, img2: black2, img3: black3, img4: black4, img5: black5, img6: black6 },
  { id: 3, name: 'white-hoodie', title: 'White Hoodie', price: '349,00', color: 'White', frontImg: whiteHoodie, modelImg: whiteHoodieModel, img1: white1, img2: white2, img3: white3, img4: white4, img5: white5, img6: white6 },
  { id: 4, name: 'brown-hoodie', title: 'Brown Hoodie', price: '449,00', color: 'Brown', frontImg: brownHoodie, modelImg: brownHoodieModel, img1: brown1, img2: brown2, img3: brown3, img4: brown4, img5: brown5, img6: brown6 },
  { id: 5, name: 'black-tshirt', title: 'Black tee', price: '399,00', color: 'Black', frontImg: blacktee1, modelImg: blacktee2, img1: blacktee1, img2: blacktee2, img3: blacktee3, img4: blacktee4, img5: blacktee5, img6: blacktee6 },
  { id: 6, name: 'white-tshirt', title: 'White tee', price: '399,00', color: 'White', frontImg: whitetee1, modelImg: whitetee2, img1: whitetee1, img2: whitetee2, img3: whitetee3, img4: whitetee4, img5: whitetee5, img6: whitetee6 },
  { id: 7, name: 'brown-tshirt', title: 'Brown tee', price: '399,00', color: 'Brown', frontImg: browntee1, modelImg: browntee2, img1: browntee1, img2: browntee2, img3: browntee3, img4: browntee4, img5: browntee5, img6: browntee6  },
  { id: 8, name: 'orange-tshirt', title: 'Orange tee', price: '399,00', color: 'Orange', frontImg: orangetee1, modelImg: orangetee2, img1: orangetee1, img2: orangetee2, img3: orangetee3, img4: orangetee4, img5: orangetee5, img6: orangetee6 },
  
]

function App() {

  return (
    <Router>
      <Routes>
        <Route exact path='/' element={<Home />} />
        <Route exact path='/hoodies' element={<Items items={items}/>} />
        <Route path='/tees' element={<Items items={items} />} />
        <Route path='/hoodies/:productId' element={<Item items={items}/>} />
        <Route path='/tees/:productId' element={<Item items={items}/>} />
        <Route path="*" element={<Navigate replace to="/" />} />
      </Routes>
    </Router>
  );
}

export default App;
