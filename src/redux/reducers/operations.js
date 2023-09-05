import { ADD_BOOKS, DELETE_ALL, DELETE_BOOK, UPDATE_BOOK } from "../actions";

const initialState = [
  { itemNo: '1', item: 'maize meal', brand: 'supersun' },
  { itemNo: '2', item: 'cereal', brand: 'kellogs' }
];

const operationsReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_BOOKS:
      return [...state, action.payload];

    case DELETE_ALL:
      return [];

    case DELETE_BOOK:
      const filteredBooks = state.filter((book) => book.itemNo !== action.payload);
      return filteredBooks;

      case UPDATE_BOOK:
        const updatedBooks = state.map((book) => {
          if (book.itemNo === action.payload.previousItemNo) {
            return {
              ...book,
              itemNo: action.payload.itemNo,
              item: action.payload.item,
              brand: action.payload.brand,
            };
          }
          return book;
        });
        return updatedBooks;
      

    default:
      return state;
  }
};

export default operationsReducer;
