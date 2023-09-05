import React, { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { postBook, updateBook } from '../redux/actions';

export const Form = ({ editFormVisibility, bookToBeEdited}) => {
  const dispatch = useDispatch();


// adding items state
  const [itemNo, setItemNo] = useState('');
  const [item, setItem] = useState('');
  const [brand, setBrand] = useState('');


// list to be edited state 
  const [editItemNo, setEditItemNo] = useState('');
  const [editItem, setEditItem] = useState('');
  const [editBrand, setEditBrand] = useState('');

  useEffect(()=>{
    setEditItemNo(bookToBeEdited.itemNo);
    setEditItem(bookToBeEdited.item);
    setEditBrand(bookToBeEdited.brand);
  }, [bookToBeEdited])

  //
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
  
    console.log({previousItemNo:bookToBeEdited,
      itemNo: editItemNo,
      brand: editBrand,
      item: editItem})

      ;let editedBook = {
      previousItemNo:bookToBeEdited.itemNo,
      itemNo: editItemNo,
      brand: editBrand,
      item: editItem
    };
    dispatch(updateBook(editedBook));
    setEditItemNo('');
    setEditBrand('');
    setEditItem('');

  }
  

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
              <label>iTEM NO.</label>
              <input
                type='text'
                className='form-control'
                required
                onChange={(e) => setEditItemNo(e.target.value)}
                value={editItemNo}
              />
            </div>

            <div className='col-3'>
              <label>ITEM</label>
              <input
                type='text'
                className='form-control'
                required
                onChange={(e) => setEditItem(e.target.value)}
                value={editItem}
              />
            </div>

            <div className='col-3'>
              <label>BRAND</label>
              <input
                type='text'
                className='form-control'
                required
                onChange={(e) => setEditBrand(e.target.value)}
                value={editBrand ||''}
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
