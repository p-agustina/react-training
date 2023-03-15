function Random(props) {
    return ( <div>
        <p>Random number between {props.min} and {props.max} => {Math.floor(Math.random() * (props.max - props.min) + props.min)}</p>
    </div> );
}

export default Random;