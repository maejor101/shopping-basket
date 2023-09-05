import { addDoc, collection, deleteDoc, getDocs, query, doc, updateDoc } from "firebase/firestore";
import db from "../../config/firebase";


export const ADD_BOOKS = 'ADD_BOOKS';
export const GET_BOOKS = 'GET_BOOKS';
export const DELETE_ALL = 'DELETE_ALL';
export const DELETE_BOOK = 'DELETE_BOOK';
export const UPDATE_BOOK = 'UPDATE_BOOK'


export const postBook = (newBook) => async (dispatch) => {
    await addDoc(collection(db, 'Books'), {
        itemNo: newBook.itemNo,
        item: newBook.item,
        brand: newBook.brand
    });
    dispatch({
        type: ADD_BOOKS,
        payload: newBook
    });
};

export const getBooks = () => async (dispatch) => {
    const q = query(collection(db, 'Books'));
    const books = await getDocs(q);
    if (books.docs.length > 0) {
        const booksArray = [];
        for (var snap of books.docs) {
            const data = snap.data();
            booksArray.push(data);
        }
        dispatch({
            type: GET_BOOKS,
            payload: booksArray
        })
    }
}

export const deleteAll = () => async (dispatch) => {
    const q = query(collection(db, 'Books'));
    const books = await getDocs(q);
    for (var snap of books.docs) {
        await deleteDoc(doc(db, 'Books', snap.id));
    }
    dispatch({
        type: DELETE_ALL
    })
}

export const deleteBook = (itemNoToBeDeleted) => async (dispatch) => {
    const q = query(collection(db, "Books"));
    const books = await getDocs(q);
    for (var snap of books.docs) {
        const data = snap.data();
        if (data.itemNo === itemNoToBeDeleted) {
            await deleteDoc(snap.ref);
        }
    }
    dispatch({
        type: DELETE_BOOK,
        payload: itemNoToBeDeleted,
    });
};

export const updateBook = (editedBook) => async (dispatch) => {
    const q = query(collection(db, 'Books'));
    const books = await getDocs(q);
    for (var snap of books.docs) {
        const data = snap.data();
        if (data.itemNo === editedBook.previousItemNo) {
            const bookRef = doc(db, 'Books', snap.id);
            await updateDoc(bookRef, {
                itemNo: editedBook.itemNo,
                item: editedBook.item,
                brand: editedBook.brand
            })
        }
    }
    dispatch({
        type: UPDATE_BOOK,
        payload: editedBook
    })
}