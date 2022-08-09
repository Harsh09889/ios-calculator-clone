
export default function DigitButton(props) {

    return(

        <button onClick={props.click}>
    
            {props.digit}

        </button>

    ) 
}