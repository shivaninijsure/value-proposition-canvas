import './Text.css';

export default function Text(props) {
    return (
        <div  className="cardText">
            <span>• {props.textVal}</span>
        </div>

    );

}