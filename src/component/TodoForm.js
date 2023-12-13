import React, { useState, useEffect, useRef } from 'react'

export default function TodoForm(props) {
    const [input,setInput]=useState(props.edit ? props.edit.value : '');

    const inputRef = useRef(null);
    useEffect(() => {
        inputRef.current.focus();
    })
    const handleChange = e =>{
        setInput(e.target.value);
    }

    const handleSubmit = e =>{
        e.preventDefault();
        props.onSubmit({
            id:Math.floor(Math.random() * 10000),
            text:input
        })
        setInput('');
    }
  return (
    <div>
        <form className='todo-form' onSubmit={handleSubmit}>
            {props.edit ? (
                <>
                <input className='todo-input edit' type='text' name='text' placeholder='Update your item' value={input} onChange={handleChange} ref={inputRef} />
            <button className='todo-button edit'>Update</button>
                </>
            ):(
                <>
                <input className='todo-input' type='text' name='text' placeholder='Add a todo' value={input} onChange={handleChange} ref={inputRef} />
            <button className='todo-button'>Add todo</button>
                </>
            )}
        </form>
    </div>
  )
}
