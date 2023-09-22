import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import 'bootstrap/dist/css/bootstrap.min.css';


export default function Detalleicon(props) {
    //console.log("HOLAA",props.detalles[0].fecha);
    const todoList = [];
  return (
    props.detalles.forEach((element, index) => {
      let todo = (
        <div>
            {props.detalles[index].fecha}
            <h2>Some content here</h2>
        </div>
      );
      todoList.push(todo);
    })
  );
}
