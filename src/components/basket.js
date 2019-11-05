import React,{Component} from 'react';
import '../css/basket.css';


class Basket extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            basketAsync: [],
            status: false,
        }
    }
    componentWillUpdate(prevProps, prevState, snapshot) {
        if(prevProps.basket !== this.state.basketAsync){
            if(this.state.status){
                this.setState({
                    status: false
                })
            }else {
                this.setState({
                    basketAsync: prevProps.basket,
                    status: false
                });
            }
        }else{
           return
        }
    }

    componentDidUpdate(prevProps, prevState, snapshot) {
        const {handleDeleteIt} = this.props;

        //state 값과 이전에 받아온 state 값이 다를때만 실행
        if (this.state.status && prevState.basket !== this.state.basketAsync) {
            handleDeleteIt(this.state.basketAsync);
            this.setState({
                status: false
            })
        }
    }

    handleDelete = (id) => {
        const basket = this.state.basketAsync;
        this.setState({
            basketAsync: basket ? basket.filter(bas=>bas.id!==id) : [],
            status: true
        });
    }

    render(){
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
