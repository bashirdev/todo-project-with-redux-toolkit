import React from 'react';
import {useSelector} from 'react-redux'
import { TodoDeleteAlert } from './DeleteTodoAlert';
import { TodoEditAlert } from './TodoAlertEdit';
const TodoList = () => {
    const todo=useSelector(state=> state.todo.value) 
  
    return (
        <div className='container-fluid'>
            <div className="row">
                <div className="col-12">
                    <table className='table'>
                        <thead>
                          <tr>
                            <th>No</th>
                            <th>Task Name</th>
                            <th>Edit</th>
                            <th>Delete</th>
                          
                          </tr>
                        </thead>
                        <tbody>
                        {todo.map((item, index)=>(
                            <tr key={index.toString()}>
                                <td>{index + 1 }</td>
                                <td>{item}</td>
                                <td><button onClick={()=>TodoEditAlert(index, item)} className='btn btn-sm btn-dark'>Eidt</button></td>
                                <td><button onClick={()=>TodoDeleteAlert(index)} className='btn btn-sm btn-danger'>Delete</button></td>
                            </tr>
                        ))}
                           
                        </tbody>

                    </table>
                </div>
            </div>
        </div>
    );
};

export default TodoList;