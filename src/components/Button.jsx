function Button(props){
    return(
        <button className="btn" type="button" onClick={props.onClick}>{props.btnText}</button>
    )
}

export default Button