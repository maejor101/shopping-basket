import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { postBook } from '../redux/actions';

export const Form = ({ editFormVisibility, cancelUpdate }) => {
  const dispatch = useDispatch();
  
  const [itemNo, setItemNo] = useState('');
  const [item, setItem] = useState('');
  const [brand, setBrand] = useState('');

  const [editItemNo, setEditItemNo] = useState('');
  const [editItem, setEditItem] = useState('');
  const [editBrand, setEditBrand] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    let book = {
      itemNo,
      item,
      brand
    };
    dispatch(postBook(book));
    setItemNo('');
    setBrand('');
    setItem('');
  };

  const handleEditSubmit = (e) => {
    e.preventDefault();
    let book = {
      itemNo: editItemNo,
      item: editItem,
      brand: editBrand
    };
    dispatch(postBook(book));
    setEditItemNo('');
    setEditBrand('');
    setEditItem('');
  };

  return (
    <React.Fragment>
      {editFormVisibility === false ? (
        <form className='form-group container' onSubmit={handleSubmit}>
          <div className='row'>
            <div className='col-3'>
              <label>ITEM No.</label>
              <input
                type='text'
                className='form-control'
                required
                onChange={(e) => setItemNo(e.target.value)}
                value={itemNo}
              />
            </div>

            <div className='col-3'>
              <label>Item</label>
              <input
                type='text'
                className='form-control'
                required
                onChange={(e) => setItem(e.target.value)}
                value={item}
              />
            </div>

            <div className='col-3'>
              <label>Brand</label>
              <input
                type='text'
                className='form-control'
                required
                onChange={(e) => setBrand(e.target.value)}
                value={brand}
              />
            </div>

            <div className='col-3 button-div'>
              <button type='submit' className='btn btn-success btn-md submit-btn'>
                SUBMIT
              </button>
            </div>
          </div>
        </form>
      ) : (
        <form className='form-group container' onSubmit={handleEditSubmit}>
          <div className='row'>
            <div className='col-3'>
              <label>ISBN No.</label>
              <input
                type='text'
                className='form-control'
                required
                onChange={(e) => setEditItemNo(e.target.value)}
                value={editItemNo}
              />
            </div>

            <div className='col-3'>
              <label>Author</label>
              <input
                type='text'
                className='form-control'
                required
                onChange={(e) => setEditItem(e.target.value)}
                value={editItem}
              />
            </div>

            <div className='col-3'>
              <label>Title</label>
              <input
                type='text'
                className='form-control'
                required
                onChange={(e) => setEditBrand(e.target.value)}
                value={editBrand}
              />
            </div>

            <div className='col-3 button-div'>
              <button type='submit' className='btn btn-warning btn-md submit-btn'>
                UPDATE
              </button>
            </div>
          </div>
        </form>
      )}
    </React.Fragment>
  );
};
