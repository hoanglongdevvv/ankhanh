import React from 'react';
import './Footer.css';
import { Button } from './Button';
import { Link } from 'react-router-dom';

function Footer() {
  return (
    <div className='footer-container'>
      <section className='footer-subscription'>
        <p className='footer-subscription-heading'>
          CỬA HÀNG KINH DOANH MOTO-XE MÁY UY TÍN CHẤT LƯỢNG <b>K&D</b>
        </p>
        <p className='footer-subscription-text'>
          Bạn có thể đăng kí theo dõi thông tin mới của của hàng!
        </p>
        <div className='input-areas'>
          <form>
            <input
              className='footer-input'
              name='email'
              type='email'
              placeholder='Your Email'
            />
          </form>
        </div>
      </section>
      <div className='footer-links'>
        <div className='footer-link-wrapper'>
          <div className='footer-link-items'>
            <h2>Địa chỉ</h2>
            <Link to=''>Thành Phố Hồ Chí Minh</Link>
            <Link to='/'>Hà Nội</Link>
            <Link to='/'>Tiền Giang</Link>
            <Link to='/'>Long An</Link>
          </div>
          <div className='footer-link-items'>
            <h2>Dịch vụ</h2>
            <Link to='/'>Mua bán xe máy</Link>
            <Link to='/'>Sữa chữa bảo trì</Link>
            <Link to='/'>Thay nhớt rửa xe</Link>
          </div>
        </div>
        
      </div>
      <section className='social-media'>
        <div className='social-media-wrap'>
          <div className='footer-logo'>
            <Link to='/' className='social-logo'>
                <img className='logo' src="/images/logokd.png" atl="" />
            </Link>
          </div>
          <small className='website-rights'>Nguyễn An Khánh </small>
          <div className='social-icons'>
            <Link
              className='social-icon-link facebook'
              to='https://www.facebook.com/profile.php?id=100012660131200'
              target='_blank'
              aria-label='Facebook'
            >
              <i className='fab fa-facebook-f' />
            </Link>
            <Link
              className='social-icon-link instagram'
              to='/'
              target='_blank'
              aria-label='Instagram'
            >
              <i className='fab fa-instagram' />
            </Link>
            <Link
              className='social-icon-link youtube'
              to='/'
              target='_blank'
              aria-label='Youtube'
            >
              <i className='fab fa-youtube' />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Footer;
