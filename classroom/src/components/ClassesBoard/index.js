import React from "react";
import Class from '../Class';
import 'bootstrap/dist/css/bootstrap.min.css';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
const ClassesBoard = ({classes, onClick,length}) => {
    const renderClass = (i) => {
      return <Class
        id={classes[i].id}
        name={classes[i].name}
        onClick={() => onClick(i)}
      />
    }
    let newClasses = [];
    for (let i = 0; i < length; i++) {
        newClasses.push(<Col xs={3} key={classes[i].id} className="class">{renderClass(i)}</Col>);
    }
    return (
        <Row className = "list-class">{newClasses}</Row>
    );
}
export default ClassesBoard;