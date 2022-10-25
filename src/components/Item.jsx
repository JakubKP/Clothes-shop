import logo from '../images/dior.png'
import { useLocation } from 'react-router-dom'

const Item = ({ items }) => {

    let location = useLocation()
    let Item = items.filter(item => item.name === location.pathname.substring(9) || item.name === location.pathname.substring(6))[0]

    return (
        <>
            <header className='banner'>
                <img src={logo} alt='logo' />
            </header>
            <div className='contener-website'>
                <div className='contener'>
                    <div className='hoodie-images-container'>
                    <div className='con'>
                        <img src={Item.img1} alt='hoodieImage' />
                    </div>
                    <div className='con'>
                        <img src={Item.img2} alt='hoodieImage' />
                    </div>
                    <div className='con'>
                        <img src={Item.img3} alt='hoodieImage' />
                    </div>
                    <div className='con'>
                        <img src={Item.img4} alt='hoodieImage' />
                    </div>
                    <div className='con'>
                        <img src={Item.img5} alt='hoodieImage' />
                    </div>
                    <div className='con'>
                        <img src={Item.img6} alt='hoodieImage' />
                    </div>
                </div>
                <div className='buy-panel'>
                    <div className='info-container'>
                        <div className='details'>
                            <div className='name'>
                                {Item.title}
                            </div>
                            <div className='color'>
                                {Item.color}
                            </div>
                            <div className='price'>
                                {Item.price} ZŁ
                            </div>
                            <div className='sizes'>
                                <span className='text'>Sizes</span>
                                <span className='box'>L</span>
                                <span className='box'>X</span>
                                <span className='box'>XL</span>
                            </div>
                            <button className='buy-button'>
                                Buy
                            </button>
                        </div>
                        <div className='description'>
                            <div className='about'>
                                <div>REGULAR FIT</div>
                                <div>MODEL IS 6'2" AND WEARS A SIZE MEDIUM</div>
                                <div>WE RECOMMEND SIZING UP FOR A LOOSER FIT</div>
                                <div>100% COTTON</div>
                            </div>
                        </div>
                    </div>
                </div>
                </div>
                    <footer>
                    <div className='rights'>© 2022 Dior</div>
                    <div></div>
                    </footer>
            </div>
        </>
    );
}

export default Item;