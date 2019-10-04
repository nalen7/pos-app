import React from 'react';
import axios from "axios";
import { Tabs } from 'antd';
import 'antd/dist/antd.css';

const { TabPane } = Tabs;

function callback(key) {
    console.log(key);
}

class menutap extends React.Component{
    state = {
        isLoading:true,
        movies: [],
        value: ''
    };

    render(){
        return(
            <div>
                <Tabs defaultActiveKey="1" onChange={callback}>
                    <TabPane tab="커피" key="1">

                    </TabPane>
                    <TabPane tab="음료" key="2">

                    </TabPane>
                    <TabPane tab="스낵" key="3">

                    </TabPane>
                </Tabs>,
            </div>
        );
    }
}


export default menutap;
