import { Container, Row, Col, Form,Button } from "react-bootstrap";
import { useState } from "react";
import { addTask } from "../features/task/TaskSlice";
import { useDispatch } from "react-redux";

function AddTask() {
    const dispatsh = useDispatch()
    let [task, setTask] = useState('');
    function sendTaskToAdd(){
        dispatsh(addTask(task))
    }
    return (
        <Container>
           <Row>
             <Col>
               <h3 className="text-center text-danger mt-5">Manage your Task</h3> 
               <Form className="mt-4 ">
                <Form.Group className="d-flex ">
                    <Form.Control type="text" style={{width:'50%'}} onChange={(e) => setTask(e.target.value)}></Form.Control>
                    <Button variant="success" className="ms-2" onClick={sendTaskToAdd} >Add Task</Button>
              
                </Form.Group>
               </Form>
                 <p>{task}</p>
             </Col>
            </Row>
        </Container>
    )
}
export default AddTask 