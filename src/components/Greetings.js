function Greetings(props) {
    const greetings = {
        en: 'Hello',
        es: 'Hola',
        fr: 'Bonjour',
        de: 'Hallo',
      };

    return ( 
        <div>

            <p>{greetings[props.lang]} {props.children}</p>
        </div>
     );
}

export default Greetings;