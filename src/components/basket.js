import React, { Component } from 'react';
import '../css/basket.css';


class Basket extends Component {
    
    render() {
        return (
            <div>
                <div className="list-div"> <table>
                    <tr><th>상품명</th><th>가격</th><th>수량</th><th>삭제</th></tr>
                    </table></div>
                <div className="price-div">PRICE</div>
            </div>
        );
    }
}

export default Basket;