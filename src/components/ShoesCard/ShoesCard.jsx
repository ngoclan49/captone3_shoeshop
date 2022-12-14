import React, { memo } from 'react';
import { NavLink } from 'react-router-dom';

const ShoesCard = ({ prod }) => {
  return (
    <NavLink to={`/detail/${prod.id}`}>
      <div className='card'>
        <img
          src={prod.image}
          alt=''
          height={250}
          style={{ objectFit: 'cover' }}
        />
        <h5 className='text-center'>{prod.name}</h5>
        <div className='card-body d-flex text-center justify-content-center align-item-center p-0 detail'>
          <div className='w-50 h-150 text-white buynow'>Buy now</div>
          <div className='w-50 h-150 text-dark price'>
            <h5>{prod.price}$</h5>
          </div>
        </div>
      </div>
    </NavLink>
  );
};

export default memo(ShoesCard);
