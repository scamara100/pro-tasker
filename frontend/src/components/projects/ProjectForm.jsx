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
      <form onSubmit={handleSubmit} noValidate>
        <h2>leave a project here:</h2>
        <div className="form-group">
          <label htmlFor="name">Name</label>
          <input
            placeholder="Construction"
            type="text"
            name="name"
            id="name"
            value={form.name}
            onChange={(e) =>
              setForm({ ...form, [e.target.name]: e.target.value })
            }
            required
          />
        </div>
        
        <div className="form-group">
          <label htmlFor="description">Description</label>
          <input
            placeholder="A construction description..."
            type="text"
            name="description"
            id="description"
            value={form.description}
            onChange={(e) =>
              setForm({ ...form, [e.target.name]: e.target.value })
            }
            required
          />
        </div>
        <button type="submit">Send</button>
      </form>
    </div>
  );
}

export default ProjectForm;
