import React from "react";
import { Link } from 'react-router-dom'
import logo from '../images/logo-white.png'
import './footer.css'
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import GoogleIcon from '@mui/icons-material/Google';
import logotext from '../images/logo-white.png'

export default function Footer() {
    return (
        <footer>
            <div id="footer">
                <div className="footer">
                    {/* --------------------------------------------------- */}
                    <div className="container">
                        <div className="row d-flex">
                            <div className="footer-nav ">
                                <nav className="navbar navbar-expand-lg navbar-light ">
                                    <a className="navbar-brand" href="#"><img id='logo_main-2' src={logo} alt="" /></a>

                                    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                                        <span className="navbar-toggler-icon"></span>
                                    </button>
                                    <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
                                        <div className="navbar-nav ft-nav">
                                            <Link to='/' className="footer-page-ul" href="#!">О нас </Link>
                                            <Link to='/' className="footer-page-ul" href="#!">Доставка и оплата</Link>
                                            <Link to='/' className="footer-page-ul" href="#!">Контакты</Link>
                                        </div>
                                    </div>
                                </nav>
                                <div className="footer-icons d-flex">
                                    <Link to="/"><FacebookIcon className="ft-icon" /></Link>
                                    <Link to="/"><InstagramIcon className="ft-icon" /></Link>
                                    <Link to="/"><GoogleIcon className="ft-icon" /></Link>
                                </div>
                            </div>
                            {/* ------------------------------------------------------- */}


                            <div className="footer-pages d-flex">

                                <div className="top-pages">
                                    <ul className="top-page d-flex">
                                        <li><Link to="/" className="top-page-link">Пицца</Link></li>
                                        <li><Link to="/" className="top-page-link">Суши</Link></li>
                                        <li><Link to="/" className="top-page-link">Роллы</Link></li>
                                        <li><Link to="/" className="top-page-link">Сеты</Link></li>
                                        <li><Link to="/" className="top-page-link">Wok</Link></li>
                                    </ul>
                                    <ul className="bottom-page d-flex">
                                        <li><Link to="/" className="top-page-link">Супы</Link></li>
                                        <li><Link to="/" className="top-page-link">Салаты</Link></li>
                                        <li><Link to="/" className="top-page-link">Десерты</Link></li>
                                        <li><Link to="/" className="top-page-link">Напитки</Link></li>
                                        <li><Link to="/" className="top-page-link">Акции</Link></li>
                                    </ul>
                                </div>



                                <div className="footer-call ">
                                    <h6 className="work-number" >+7 (495) 617-14-24</h6>
                                    <p className='work-time-2'>c 10:00 до 23:00</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    )
}