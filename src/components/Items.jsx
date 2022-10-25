import { useLocation } from 'react-router-dom';
import logo from '../images/dior.png';
import Container from './Container';

const Hoodies = ({ items }) => {

    let location = useLocation();
    let name = location.pathname === '/tees' ? 'shirt' : 'hoodie' 
    const itemsSite = items.filter(item => item.name.indexOf(name) !== -1).map(item => (
        <Container key={item.id} title={item.title} price={item.price} frontImg={item.frontImg} modelImg={item.modelImg} path={item.name}/>
    ))
    return (
        <>
            <header className='banner'>
                <img src={logo} alt='logo' />
            </header>
            <div className='container'>
                {itemsSite}
            </div>
            <footer className='footer'>
                <div className='rights'>© 2022 Dior</div>
                <div></div>
            </footer>
        </>
    );
}

export default Hoodies;