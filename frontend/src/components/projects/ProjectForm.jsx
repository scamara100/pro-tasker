import { useState } from "react";

function ProjectForm({ onAdd}) {
  
  const [form, setForm] = useState({ name: "", description: "" });
    function handleSubmit(e) {
    e.preventDefault();

    if(!form.name) return;

    // add object from project
    onAdd(form)
    // reset my form
    setForm({ name: "", description: "" });

  }
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <h2>leave a project here:</h2>
        <label htmlFor="name">Name</label>
        <input
          type="text"
          name="name"
          id="name"
          value={form.name}
          onChange={(e) =>
            setForm({ ...form, [e.target.name]: e.target.value })
          }
        />

        <label htmlFor="description">Description</label>
        <input
          type="text"
          name="description"
          id="description"
          value={form.description}
          onChange={(e) =>
            setForm({ ...form, [e.target.name]: e.target.value })
          }
        />

        <button type="submit">Send</button>
      </form>
    </div>
  );
}

export default ProjectForm;
