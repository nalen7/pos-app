import React from 'react';
import '../css/basket.css';

function Basket(basket) {
    basket.basket.map(item => {
        console.log(item.name)
    })

    return (
        <div>
            <div className="list-div"> <table>
                <tr><th>상품명</th><th>가격</th><th>수량</th><th>삭제</th></tr>
            </table>
            </div>
            <div className="price-div">PRICE</div>
        </div>
    );
}
export default Basket;
