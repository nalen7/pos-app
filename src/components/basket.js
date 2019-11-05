import React,{Component} from 'react';
import '../css/basket.css';


class Basket extends Component {
   state={
       basket:[]
   }
   componentDidUpdate(prevProps,prevState){
       console.log(this.state.basket)
       if(this.state.basket!==prevProps.basket){
           this.setState({
           basket:prevProps.basket
       })
   }}

    handleRemove=(id)=>{

    }
    render(){
        return (
            <div>
                <div className="list-div"> <table>
                    <tbody>
                    <tr><th>상품명</th><th>가격</th><th>수량</th><th>삭제</th></tr>
                      {this.state.basket.map((item,index)=>(
                        <tr key={index}><td>{item.name}</td>
                        <td>{item.price}</td>
                        <td>{item.qty}</td>
                        <td><span onClick={()=>this.handleRemove(item.id)}>삭제</span></td>
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