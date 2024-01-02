
const Button = (props) => {
    return (
        <>
            <button type={props.type} onClick={props.onClick} className={`px-4 py-2 rounded-md font-bold ${!props.color ? "bg-blue-800" : props.color}`}>{props.text}</button>
        </>
    )
}

export default Button