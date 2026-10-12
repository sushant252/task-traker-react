import { Button, Col, Container, Row } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import {completeTask} from '../features/task/TaskSlice';
function TaskList() {
    let {items} = useSelector((state) => state.task)
    const dispatch = useDispatch()
  
  //  console.log(items, 'items')
    function doCompleteTask(id) {
        dispatch(completeTask(id)) 

    }
    function doUndoTask(id) {
        dispatch(undoTask(id)) 
     
    }
    return(
        <Container>
            <Row>
                <Col>
                    {
                        items.map((item) => 
                            <div className="d-flex mt-2" style={{width:'50%', backgroundColor: '#f2f2f2'}}>
                                <div className="ms-2 ">
                                    {item.completed && <span><s>{item.content}</s></span>}
                                    {!item.completed && <span>{item.content}</span>}
                                    
                                </div>
                                <div className="ms-auto p-2">
                                    {!item.completed && <Button variant = "success" onClick={()=> doCompleteTask(item.id)}>Completed</Button>}
                                    {item.completed && <Button variant = "success" onClick={()=> doUndoTask(item.id)}>Undo</Button>}
                                   
                                    <Button variant="danger" className="ms-2">Delete</Button>
                                </div>
                            </div>
                        )
                    }
                </Col>
            </Row>
        </Container>        
    )
}
export default TaskList