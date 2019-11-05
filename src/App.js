import React from 'react';

import './App.css';
import Menutap from './components/menutap.js';
import Basket from './components/basket.js';
import Payment from './components/payment.js'
import Footer from './Footer.js';

class App extends React.Component {
    state = {
        basket : []
    }
    handleInit = (basket) => {
        this.setState({
            basket
        });
        console.log(basket);
    }



    render() {
        return (
            <div className="App">
                <div className='header'>Imform Cafe POS</div>

                <Menutap handleInit={this.handleInit}/>
                <div>
                    <div style={{float:'left'}}>
                      <Basket basket={this.state.basket} />
                    </div>
                    <div style={{float:'right'}}>
                      {/*<Payment />*/}
                    </div>
                </div>
                <Footer />
            </div>
        );
    }
}


export default App;
