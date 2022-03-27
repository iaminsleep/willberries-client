import React from 'react';
import { useSelector } from 'react-redux';

import GoodItem from '../components/goods/goodItem';

function Goods({API, category}) {
  const goods = useSelector(state => state.goods);
  return (
    <section className="long-goods d-block">
      <div className="container">
        <div className="row align-items-center mb-4">
          <div className="col-12">
            <h2 className="section-title center"></h2>
          </div>
        </div>
        <div className="row long-goods-list">  
        {goods.length > 0 ? 
          goods.map(good => 
            <GoodItem 
              key={good.id} id={good.id} name={good.name} 
              description={good.description} price={good.price} 
              img={good.img} label={good.label} API={API}
            />)
          : <div className="empty-goods-wrapper">
              <div className="goods-empty">The item you were searching for wasn't found!</div>
            </div>
        }      
        </div>
      </div>
    </section>
  );
}

export default Goods;