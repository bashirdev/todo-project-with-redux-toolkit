import Swal from "sweetalert2"
import { EditTodo } from '../../redux/state/todo/todoSlice';
import store from "../../redux/store/store";

export function TodoEditAlert(index, item){
   

    Swal.fire({
        title: 'Update Task Name',

        input: 'text',
        inputValue:item,
        inputValidator:(value)=>{
           if(value){
            store.dispatch(EditTodo({index:index, task:value}))
           }
        }
      })
}