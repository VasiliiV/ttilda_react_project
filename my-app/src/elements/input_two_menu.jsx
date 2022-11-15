import './element.css';

function InputMenu(props) {
    const type = {
        type: props.type,
        placeholder: props.placeholder,
        className: props.className
    }
    return (
     <div>
        <input className={props.className} type={props.type} placeholder={props.placeholder} style={{background: 'transparent', border: 'none', outline: 'none', color: '#fff', borderBottom: '1px solid rgba(255,255,255,.3)'}}/>
     </div>
    )
}

export default InputMenu;