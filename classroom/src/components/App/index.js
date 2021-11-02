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
      <div className="game">
        
        <Form />
        <div className="game-board w-100">
          <ClassesBoard
            classes={classes}
            onClick={(i) => {}}
            length = {numberOfClasses}
          />
        </div>
      </div>
  );
  
};
export default App