import { useState } from "react";

export default function TaskForm({ onAdd }) {
  const [form, setForm] = useState({
    title: "",
    description: "",
    status: "todo",
  });
  const [status, setStatus] = useState("");
  const handleSubmit = (e) => {
    e.preventDefault();

    if (!form.title) return;

    // add object form task
    onAdd(form);

    // reset form
    setForm({ title: "", description: "", status: "todo" });
  };

  return (
    <form onSubmit={handleSubmit} noValidate>
      <div className="form-group">
        <label htmlFor="title">Title</label>
        <input
          type="text"
          id="title"
          placeholder="Reading"
          name="title"
          value={form.title}
          onChange={(e) => setForm({ ...form, [e.target.name]: e.target.value })}
          required
        />
      </div>
      
      <div className="form-group">
        <label htmlFor="description">Description</label>
        <input
          type="text"
          id="description"
          placeholder="Read a Book."
          name="description"
          value={form.description}
          onChange={(e) => setForm({ ...form, [e.target.name]: e.target.value })}
          required
        />
      </div>
  
      <select value={status} onChange={(e) => setStatus(e.target.value)}>
        <option value="todo">To Do</option>
        <option value="in-progress">In Progress</option>
        <option value="done">Done</option>
      </select>
      <button type="submit">Add Task</button>
    </form>
  );
}
