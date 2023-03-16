function CreditCard(props) {
const color = props.bgColor

    const cardStyle = {
        width: "200px",
        height: "100px",
        backgroundColor: color,
        borderRadious: "10px",
        color: "white",
    }


    

    return ( 
        <div style={cardStyle}>
            <p>{props.type}</p>
            <p>●●●●●●●●●●●●{props.number.slice(12)}</p>
            <p>Expires {props.expirationMonth.toString().padStart(2, '0')}/{props.expirationYear.toString().slice(2)}</p>
            <p>{props.bank}</p>
            <p>{props.owner}</p>
        </div>
     );
}

export default CreditCard