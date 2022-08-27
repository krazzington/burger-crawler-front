// import arrowIcon from '../../assets/icons/arrow_back-24px.svg';
import NewBurgerForm from '../NewBurgerForm/NewBurgerForm';
import './AddBurger.scss';
import React from 'react';
import { Link } from 'react-router-dom';

//This is taken from the AddInventory example. That goes to the home page on Instock
//Should this be a post?

const AddBurger = () => {
  return (
    <>
      <div className="add-burger">
        <div className="add-burger__header">
          {/* <Link className="add-burger__icon-container" to="/">
            <img className="add-burger__icon" src={arrowIcon} alt="chevron right"/>
          </Link> */}
          <h2 className="add-burger__title">Add New burger</h2>
        </div>
        <NewBurgerForm />
      </div>
    </>
  );
};

export default AddBurger;