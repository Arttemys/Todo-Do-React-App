import React from 'react'
import Checkbox from '../Checkbox/Checkbox';

const TaskList = props => {
    const {list, setList} = props;

    const onChangeStatus = e => {
        const { name, checked } = e.target;
        
        const updateList = list.map(item =>({
            ...item, 
            done: item.id === name ? checked : item.done
        }));

        setList(updateList);
    };

    const onClickRemoveItem = item => {
        const updateList = list.filter(item => !item.done);

        setList(updateList);
    };


    const chk = list.map(item => (
         <Checkbox key={item.id} data={item} onChange={onChangeStatus}/>
    ));

    return (
        <div className="todo-list">
           {list.length ? chk : "No Task"}
           {list.length ? (
               <p>
                   <button className="button blue" onClick={onClickRemoveItem}>
                       Delete All done!
                   </button>
               </p>
           ) : null}
        </div>
    )
}

export default TaskList
