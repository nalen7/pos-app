import React,{Component} from 'react';
import '../css/basket.css';


class Basket extends Component {
    render(){
        const basket=this.props;
        return (
            <div>
                <div className="list-div"> <table>
                    <tbody>
                    <tr><th>상품명</th><th>가격</th><th>수량</th><th>삭제</th></tr>
                    {basket.basket.map((item,index)=>(
                        <tr key={index}><td>{item.name}</td>
                        <td>{item.price}</td>
                        <td>{item.qty}</td>
                        <td><span>삭제</span></td>
                        </tr>
                    ))}
                    </tbody>
                    </table>
                    </div>
                <div className="price-div">PRICE</div>
            </div>
        );
    }
    }

export default Basket;