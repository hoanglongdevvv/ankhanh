import React from 'react';
import './Cards.css';
import CardItem from './CardItem';

function Cards() {
  return (
    <div className='cards'>
      <h1>Hoạt động doanh nghiệp</h1>
      <div className='cards__container'>
        <div className='cards__wrapper'>
          <ul className='cards__items'>
            <CardItem
              src='images/cart1.jpg'
              text='Những mẫu xe MOTO tốt nhất hiện nay!'
              label='YAMMAHA'
              path='/services'

            />
            <CardItem
              src='images/banxe.jpg'
              text='Đầy đủ các loại xe đáp ứng nhu cầu khách hàng'
              label='Mua xe'
              path='/products'
            />

          </ul>
          <ul className='cards__items'>
            <CardItem
              src='images/hoatdong.jpg'
              text='Những chiếc xe đã tìm được người sở hữu đầu tiên'
              label='Hoạt động chính'
              path='/services'
            />
            <CardItem
              src='images/lxan.jpg'
              text='Những điều cần phải biết khi tham gia giao thông'
              label='Lái xe an toàn'
              path='/services'
            />
            <CardItem
              src='images/tuvan.jpg'
              text='Thông tin và tư vấn khách hang'
              label='Tư Vấn'
              path='/sign-up'
            />
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Cards;
