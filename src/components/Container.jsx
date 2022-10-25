import { NavLink } from 'react-router-dom'

const Container = ({ path, title, price, frontImg, modelImg }) => {

    return (
        <div className='hoodieContainer'>
            <div className='imagesContainer'>
            <NavLink to={path}>
                <img src={modelImg} alt='model'/>
                <img src={frontImg} alt='hoodie' className='hoodieimg'/>
            </NavLink>
            </div>
            <div className='name-price'>
                <NavLink to={path} className='names'>{title}</NavLink>
                <div>{price}Zł</div>
            </div>
        </div>
    );
}

export default Container;