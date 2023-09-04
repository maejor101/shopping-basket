import React from 'react';
import { Icon } from 'react-icons-kit';
import { trash, edit2 } from 'react-icons-kit/feather';
import { useDispatch } from 'react-redux';
import { deleteBook } from '../redux/actions';

export const Book = ({ books , editFormVisibility, handleEdit}) => {
    const dispatch = useDispatch();

    return books.map((book) => (
        <div className='book' key={book.itemNo}>
            <div className='content'>
                <span>#{book.itemNo}</span>
                <h4>{book.item} by {book.brand}</h4>
            </div>

            <div className='actions'>
                {editFormVisibility === false && (
                    <>
                        <span className='edit' onClick={()=>handleEdit()}>
                            <Icon icon={edit2} size={24} />
                        </span>
                        <span className='trash' onClick={() => dispatch(deleteBook(book.itemNo))}>
                            <Icon icon={trash} size={24} />
                        </span>

                    </>
                )}


            </div>
        </div>
    ));
};



