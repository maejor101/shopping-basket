import { useDispatch, useSelector } from "react-redux";
import {Book} from "./components/Book";
import {Form} from "./components/Form";
import {useState, useEffect } from "react";
import {getBooks, deleteAll} from "./redux/actions";




function App() {

const dispatch = useDispatch();

useEffect(()=>{
  dispatch(getBooks())

},[dispatch])

const [editFormVisibility, setEditFormVisibility] = useState(false);

const handleEdit=()=>{

  setEditFormVisibility(true);
}

const cancelUpdate=()=>{
  setEditFormVisibility(false)
}
  const books = useSelector(state=>state.operationsReducer);
  console.log(books);
  return (
    <div className="custon-container">
      <h1 className="heading">
        My Shopping List
        </h1>
        <br></br>
      <Form  editFormVisibility={editFormVisibility}
      cancelUpdate={cancelUpdate}/>
        {books.length > 0?(
          <>
          <Book books={books} editFormVisibility={editFormVisibility}
          handleEdit={handleEdit}/>
          {books.length > 1 && (
            <button className="btn btn-outline-danger btn-md delete-all" onClick={ () => dispatch(deleteAll())}>
            Clear List
            </button>
          )}
          </>

        ):(<div className="message-box text-center">
          No List found, please add a shopping item
        </div>)}
    </div>
  );
}

export default App;
