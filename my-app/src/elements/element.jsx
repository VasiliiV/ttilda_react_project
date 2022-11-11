import './element.css';
import logo from './logo_w.svg';
import Click from './input_click.jsx'
import InputMenu from './input_two_menu';

function Fon() {
    return (
        <div className="Fon">
            <div className="logo">
                <img src={logo} alt="logo" srcset="" className='logo_svg'/>
            </div>
            <form className="form" name="form" action="" method="post">
                <InputMenu className="password" type = 'password' placeholder="password"/>
                <InputMenu className="email" type = 'email' placeholder="email"/>
                <Click/>
            </form>
        </div>
    );
}

export default Fon;