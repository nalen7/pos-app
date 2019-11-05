import React,{Component} from 'react';
import '../css/basket.css';


class Basket extends Component {
    state = {
        basketAsync: [],
    }
    componentWillUpdate(prevProps, prevState, snapshot) {
        if(prevProps.basket !== this.state.basketAsync){
            this.setState({
                basketAsync: prevProps.basket
            });
        }else{
            return
        }
    }

    handleDelete = (id) => {
        console.log(id)
    }
    render(){
        console.log('stateBasket', this.state.basketAsync)
        return (
            <div>
                <div className="list-div"> <table>
                    <tbody>
                    <tr><th>상품명</th><th>가격</th><th>수량</th><th>삭제</th></tr>
                    {this.state.basketAsync.map((item,index)=>(
                        <tr key={index}><td>{item.name}</td>
                            <td>{item.price}</td>
                            <td>{item.qty}</td>
                            <td><span onClick={() => this.handleDelete(item.id)}>삭제</span></td>
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
