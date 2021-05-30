import React from 'react';
import './Cards.css';
import CardItem from './CardItem';

function Cards() {
  return (
    <div className='cards'>
      <h1>IoT without security is Internet of Threats.</h1>
      <div className='cards__container'>
        <div className='cards__wrapper'>
          <ul className='cards__items'>
            <CardItem
              src='img/img-2.jpeg'
              text='Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut consequat magna nec libero vulputate eleifend. Aliquam'
              label='Big data'
              path='/services'
            />
            <CardItem
              src='img/img-3.jpeg'
              text=' varius. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec et'
              label='Iot'
              path='/services'
            />
          </ul>
          <ul className='cards__items'>
            <CardItem
              src='img/img-4.jpg'
              text=' Nullam facilisis nunc lobortis, viverra diam non, luctus eros. Suspendisse ultricies commodo condimentum. Morbi eget mattis e'
              label='Cloud'
              path='/services'
            />
            <CardItem
              src='img/img-5.jpeg'
              text='m turpis. Fusce ut iaculis erat, a dapibus tellus. Fusce non mi vitae neque '
              label='Analytics'
              path='/products'
            />
            <CardItem
              src='img/img-6.jpeg'
              text='sem. Mauris cursus libero ut purus convallis eleifend. Sed egestas dolor tortor, ut gravida odio comm'
              label='Data'
              path='/sign-up'
            />
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Cards;
