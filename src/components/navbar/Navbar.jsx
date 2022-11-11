import React from 'react'
import './navbar.css'
import logo from '../images/logo-black.png'
import CallIcon from '@mui/icons-material/Call';
import LocalMallIcon from '@mui/icons-material/LocalMall';
import PersonIcon from '@mui/icons-material/Person';
import pizza from '../images/pizza.png'
import { Link } from 'react-router-dom';

function Navbar() {
    return (
        <div className='navbar'>
            {/* <----------- navbar top start --------------> */}
            <div className="container container-1">
                <div className="row ">
                    <div className="navbar-top">
                        <nav className="navbar navbar-expand-lg navbar-light ">
                            <a className="navbar-brand" href="#">
                                <img id='logo_main' src={logo} alt="" /></a>
                            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                                <span className="navbar-toggler-icon"></span>
                            </button>
                            <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
                                <div className="navbar-nav header-nav">
                                    <Link to='/' className="nav-item nav-link active">О нас </Link>
                                    <Link to='/' className="nav-item nav-link">Доставка и оплата</Link>
                                    <Link to='/' className="nav-item nav-link">Контакты</Link>
                                    <Link to='/' className="nav-item nav-link">Бонусы</Link>
                                    <Link to='/' className="nav-item nav-link">Вакансии</Link>
                                </div>
                            </div>
                        </nav>
                    </div>
                    <div className="navbar-top-profile">
                        <div className="profile items">
                            <div className="phone-number d-flex mt-3">
                                <CallIcon className='icon-call' /> <h6 >+7 (495) 617-14-24</h6>
                            </div>
                            <p className='work-time'>c 10:00 до 23:00</p>
                        </div>
                    </div>
                </div>


                <div className="card d-flex">
                    <button className='btn-shp d-flex'>0 ₽</button>
                    <button className="btn-shp position-relative">
                        <LocalMallIcon />
                        <span class=" shp-span position-absolute top-0 start-100 translate-middle badge rounded-pill">
                            0
                        </span>
                    </button>

                    <button className='profile-ml'><a href="#!"><PersonIcon className='profile-user' /></a></button>
                </div>
            </div>


            {/*<----------- navbar top end --------------> */}


            {/*<----------- navbar bottom start --------------> */}

            <div className="navbar-bottom">
                <div className="container ">
                    <div className="row">
                        <div className="navbar-bottom icons">
                            <nav className="navbar navbar-expand-lg navbar-light ">
                                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                                    <span className="navbar-toggler-icon"></span>
                                </button>
                                <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
                                    <div className="navbar-nav">
                                        <div className="img-icons"><img src={pizza} alt="png" /><Link to='/pizza'>Pizza</Link></div>
                                        <div className="img-icons"><img src={pizza} alt="png" /><Link to=''>Pizza</Link></div>
                                        <div className="img-icons"><img src={pizza} alt="png" /><Link to=''>Pizza</Link></div>
                                        <div className="img-icons"><img src={pizza} alt="png" /><Link to=''>Pizza</Link></div>
                                        <div className="img-icons"><img src={pizza} alt="png" /><Link to=''>Pizza</Link></div>
                                        <div className="img-icons"><img src={pizza} alt="png" /><Link to=''>Pizza</Link></div>
                                        <div className="img-icons"><img src={pizza} alt="png" /><Link to=''>Pizza</Link></div>
                                        <div className="img-icons"><img src={pizza} alt="png" /><Link to=''>Pizza</Link></div>
                                        <div className="img-icons"><img src={pizza} alt="png" /><Link to=''>Pizza</Link></div>
                                        <div className="img-icons"><img src={pizza} alt="png" /><Link to=''>Pizza</Link></div>
                                    </div>
                                </div>
                            </nav>
                        </div>
                    </div>
                </div>
            </div>
            {/*<----------- navbar bottom start --------------> */}
        </div>
    )
}

export default Navbar