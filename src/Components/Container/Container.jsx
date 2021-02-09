import React, { useState } from 'react'

import FormTodo from '../FormTodo/FormTodo';
import TaskList from '../TaskList/TaskList';

const Container = () => {
    const [list, setList] = useState([]);

    const handleAddItem = addItem => {
        setList([...list, addItem]);
    };

    return (
        <div>
            <FormTodo handleAddItem={handleAddItem}/>
            <TaskList list={list}
                      setList={setList}/>
        </div>
    )
}

export default Container