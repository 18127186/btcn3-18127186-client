import React, { useState } from "react";
import ClassesBoard from "../ClassesBoard";
import Form from "../Form";
import { getAllClasses} from '../../services/classServices'

const App = (props) => {
  
  const [classes, setClasses] = useState([])
  const [numberOfClasses, setNumberOfClasses] = useState(0)

  const fetchAllClasses = () => {
    getAllClasses()
      .then(classes => {
        setClasses(classes);
        setNumberOfClasses(classes.length)
      });
  }
  fetchAllClasses();
  return (
    <div>
      <h1 className="text-center md-5">List Class</h1>
      <Form />
      <div className="game">
        <div className="game-board w-100">
          <ClassesBoard
            classes={classes}
            onClick={(i) => {}}
            length = {numberOfClasses}
          />
        </div>
      </div>
    </div>
  );
  
};
export default App