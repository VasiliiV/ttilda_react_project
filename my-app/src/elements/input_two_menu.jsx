import './element.css';

function InputMenu(props) {
    const type = {
        type: props.type,
        placeholder: props.placeholder,
        className: props.className
    }
    return (
     <div>
        <input className={props.className} type={props.type} placeholder={props.placeholder} style={{background: 'transparent', border: 'none', outline: 'none', color: '#fff'}}/>
     </div>
    )
}

export default InputMenu;