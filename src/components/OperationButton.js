

export default function OperationButton(props) {

    return(

        <button className="operation" onClick={props.click}>
        
            {props.operation}
        
        </button>

    ) 
}