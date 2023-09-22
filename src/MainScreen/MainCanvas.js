import React from 'react';
import './MainCanvas.css';
import ChatBox from './ChatBox/ChatBox';
import Customer from "./Customer/Customer";
import Gift from "./Assets/gift.webp";
import Face from "./Assets/face.png";
import Proposition from './Components/Proposition/Proposition';

class MainCanvas extends React.Component {

    constructor(props) {
        super(props);
        this.state = {

        }
    }

    getValue = (values) => {
        console.log("values......", values)
        this.setState({ CardValue: values })
    }

    render() {
        return (
            <div >
                <div className="canvas_container">
                    <div className='product_container'>
                        <div className='gift-img'>
                            <img src={Gift} height={70} width={70} alt="Logo" />
                        </div>
                        <Proposition CanvasName={'Product'} CardValue={this.state.CardValue} />
                    </div>
                    <div className='customer_container'>
                    <div className='face-img'>
                            <img src={Face} height={90} width={90} alt="Logo" />
                        </div>
                        <Proposition CanvasName={'Customer'} CardValue={this.state.CardValue} />
                    </div>
                </div>
                <ChatBox getValue={(values) => this.getValue(values)} />
            </div>
        );
    }
}
export default MainCanvas;
