import './element.css';
import logo from './logo_w.svg';
import Click from './input_click.jsx'

function Fon() {
    return (
        <div className="Fon">
            <div className="logo">
                <img src={logo} alt="logo" srcset="" className='logo_svg'/>
            </div>
            <form className="form" name="form" action="" method="post">
                <div className='form'>
                    <input className='email' type="email" name="" id="" placeholder="email" style={{background: 'transparent', border: 'none', outline: 'none', color: '#fff'}}/>
                </div>
                <div className='form password'>
                    <input id='password' type="password" name="" placeholder="password" style={{background: 'transparent', border: 'none', outline: 'none', color: '#fff'}}/>
                </div>
                <Click/>
            </form>
        </div>
    );
}

export default Fon;