function Input(props) {
    return(
        <input 
            type="text" 
            aria-label="Task input field." 
            placeholder="Add a new task..."
            onChange={props.onChange}
            value={props.text}    
            />
        )
}

export default Input