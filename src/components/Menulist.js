import React from "react";
import PropTypes from "prop-types";
import '../css/menutab.css';

function Menulist({id, name, price, qty, img}){
    return (
        <div className='list-item'>
            <div className='item-thumbnail'>
                <img src={img} />
            </div>
            <div className='item-info'>
                <p className='name'>{name}</p>
                <p className='price'>{price}<span style={{fontSize:'12px', color:'#666', marginLeft:'1px'}}>원</span></p>
                <span className='qty'>재고수량 : {qty}</span>
            </div>
        </div>
    );
}

Menulist.propTypes = {
    id: PropTypes.number.isRequired,
    name: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired,
    qty: PropTypes.number.isRequired,
    img: PropTypes.string.isRequired
};

export default Menulist;