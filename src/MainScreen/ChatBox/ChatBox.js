import React from 'react';
import ChatBot from 'react-simple-chatbot';
import { ThemeProvider } from 'styled-components';

const steps = [
    {
        id: '0',
        message: 'Hello!',
        trigger: '1',
    }, {
        id: '1',
        message: 'Please Enter Customer Gains',
        trigger: '2'
    }, {
        id: '2',
        user: true,
        trigger: '3',
    }, {
        id: '3',
        message: 'Please Enter Customer Jobs',
        trigger: '4'
    }, {
        id: '4',
        user: true,
        trigger: '5',
    }, {
        id: '5',
        message: 'Please Enter Customer Pains',
        trigger: '6'
    }, {
        id: '6',
        user: true,
        trigger: '7',
    },  {
        id: '7',
        message: 'Please Enter Company Gains Creator',
        trigger: '8'
    }, {
        id: '8',
        user: true,
        trigger: '9',
    }, {
        id: '9',
        message: 'Please Enter Company Products and Services',
        trigger: '10'
    }, {
        id: '10',
        user: true,
        trigger: '11',
    }, {
        id: '11',
        message: 'Please Enter Company Pain Reliever',
        trigger: '12'
    }, {
        id: '12',
        user: true,
        trigger: '13',
    }, {
        id: '13',
        message: 'Thank You',
        end: true,

    }
];

const theme = {
    background: 'white',
    headerBgColor: 'white',
    headerFontSize: '20px',
    headerFontColor: 'black',
    botFontColor: 'black',
    userBubbleColor: '#CDE9F9',
    userFontColor: 'black',
    boxshadow: '0 1px 2px 0 rgba(0,0,0,0)'
};

const config = {
    floating: true,
};


class ChatBox extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            isChat: true,
        }
        this.handleEnd = this.handleEnd.bind(this);
    }
    handleEnd({ steps, values }) {
        console.log(steps);
        console.log(values);
        return this.props.getValue(values);
        alert(`Chat handleEnd callback! Number: ${values[0]} ${values[1]} ${values[2]}`);
    }

    render() {
        return (
            <div >
                <ThemeProvider theme={theme}>
                    <ChatBot
                        handleEnd={this.handleEnd}
                        headerTitle="Value Proposition"
                        steps={steps}
                        {...config}
                    />
                </ThemeProvider>
            </div>
        );
    }
}
export default ChatBox;
