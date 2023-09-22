import Icons from '../Icons/Icons';
import Text from '../Text/Text';
import './Proposition.css';

function Proposition(props) {

    var CanvasName = props.CanvasName

    return (
        <div >
            <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.6.3/css/font-awesome.css" />
            <div class="circle-outer">
                <ul class="circle">
                    <li>
                        <a href="#">
                            <div class={CanvasName == "Product" ? "Pro content first" : "content first"}>
                                {props.CardValue == undefined ?
                                    <div>
                                        <p>{CanvasName == "Product" ? 'Pain Relievers' : 'Gains'}</p>
                                        <Icons IconName={CanvasName == "Product" ? "fa fa-plus-square" : 'fa fa-thumbs-up'} />
                                    </div>
                                    :
                                    <div className={CanvasName == "Product" ? 'Cards ProfirstCard' : 'Cards firstCard'}>
                                        <Text textVal={CanvasName == "Product" ? props.CardValue[5] : props.CardValue[0]}></Text>
                                    </div>
                                }
                            </div>
                            <div class="background" />
                        </a>
                    </li>

                    <li>
                        <a href="#">
                            <div class={CanvasName == "Product" ? "Pro content second" : 'content second'}>
                                {props.CardValue == undefined ?
                                    <div>
                                        <p>{CanvasName == "Product" ? 'Products & Services' : 'Customer Jobs'}</p>
                                        <Icons IconName={CanvasName == "Product" ? "fa fa-dot-circle-o" : 'fa fa-search'} />
                                    </div>
                                    :
                                    <div className={CanvasName == "Product" ? 'Cards ProsecondCard' : 'Cards secondCard'}>
                                        <Text textVal={CanvasName == "Product" ? props.CardValue[4] : props.CardValue[1]}></Text>
                                    </div>
                                }
                            </div>
                            <div class="background"></div>
                        </a>
                    </li>

                    <li>
                        <a href="#">
                            <div class={CanvasName == "Product" ? "Pro content third" : "content third"}>
                                {props.CardValue == undefined ?
                                    <div>
                                        <p>{CanvasName == "Product" ? 'Gain Creator' : 'Pains'}</p>
                                        <Icons IconName={CanvasName == "Product" ? "fa fa-line-chart" : 'fa fa-thumbs-down'} />
                                    </div>
                                    :
                                    <div className={CanvasName == "Product" ? 'Cards ProthirdCard' : 'Cards thirdCard'}>
                                        <Text textVal={CanvasName == "Product" ? props.CardValue[3] : props.CardValue[2]}></Text>
                                    </div>
                                }
                            </div>
                            <div class="background"></div>
                        </a>
                    </li>
                </ul>
            </div>
        </div>
    )
}

export default Proposition;