import { useState } from "react";

export default function TaskForm({onAdd}){
    const [form, setForm] = useState({title: "", description: "", status: 'todo'})

    const handleSubmit = (e) => {
        e.preventDefault()

        if (!form.title) return;

        // add object form task
        onAdd(form);

        // reset form
        setForm({title: "", description: "", status: 'todo'});
    } 
    
    return(
        <form onSubmit={handleSubmit}>
            <label htmlFor="title">Title</label>
            <input type="text" placeholder="Reading" name="title" value={form.title} onChange={(e) =>setForm({...form, [e.target.name]: e.target.value})}/>

            <label htmlFor="description">Description</label>
            <input type="text" placeholder="read a Book." name="description" value={form.description} onChange={(e) =>setForm({...form, [e.target.name]: e.target.value})}/>
            <button>Add</button>
        </form>
    )
}