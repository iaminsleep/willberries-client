import React from 'react';

import facebookLogo from '../img/Facebook.svg';
import twitterLogo from '../img/Twitter.svg';
import instagramLogo from '../img/Instagram.svg';

import visaLogo from '../img/visa.png';
import masterCardLogo from '../img/master-card.png';
import paypalLogo from '../img/paypal.png';
import bitcoinLogo from '../img/bitcoin.png';

import topArrowIcon from '../img/top.svg';

const Footer = () => {
  return(
    <footer className="footer">
		<div className="container">
			<div className="row">
				<div className="col-xl-7 mb-4 mb-xl-0">
					<nav>
						<ul className="footer-menu d-sm-flex">
							<li className="footer-menu-item"><a href="#" className="footer-menu-link">Shop</a></li>
							<li className="footer-menu-item"><a href="#" className="footer-menu-link">About Us</a></li>
							<li className="footer-menu-item"><a href="#" className="footer-menu-link">Careers</a></li>
							<li className="footer-menu-item"><a href="#" className="footer-menu-link">FAQ </a></li>
							<li className="footer-menu-item"><a href="#" className="footer-menu-link">Blog</a></li>
							<li className="footer-menu-item"><a href="#" className="footer-menu-link">Contacts</a></li>
						</ul>
					</nav>
				</div>
				<div className="col-lg-3 d-flex align-items-center">
					<span className="footer-text">Follow Us</span>
					<span className="footer-social d-inline-flex align-items-center">
						<a href="#" className="social-link">
							<img src={facebookLogo} alt="Facebook"/>
						</a>
						<a href="#" className="social-link">
							<img src={twitterLogo} alt="Twitter"/>
						</a>
						<a href="#" className="social-link">
							<img src={instagramLogo} alt="Instagram"/>
						</a>
					</span>
				</div>
				<div className="col-xl-2 col-lg-3 d-flex justify-content-lg-end mt-4 mt-lg-0">
					<span className="footer-text">© 2019 Universal UI Kit</span>
				</div>
			</div>
			<hr className="footer-line mt-4 mb-4"/>
			<div className="row justify-content-between">
				<div className="col-lg-4 col-sm-9">
					<img className="payment-logo" src={visaLogo} alt="visa logo"/>
					<img className="payment-logo" src={masterCardLogo} alt="master card logo"/>
					<img className="payment-logo" src={paypalLogo} alt="paypal logo "/>
					<img className="payment-logo" src={bitcoinLogo} alt="bitcoin logo"/>
				</div>
				<div className="col-lg-2 col-sm-1 d-flex justify-content-end">
					<a href="#" className="scroll-link top-link d-flex align-items-center">
						<span className="top-link-text">Top</span>
						<img src={topArrowIcon} alt="icon: arrow top"/>
					</a>
				</div>
			</div>
		</div>
	</footer>
  );
}

export default Footer;