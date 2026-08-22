import { useState } from "react";

export default function AddTaskModal({ isOpen, onClose, onSaveTask, initialData }) {
  // initialData තියෙනවා නම් ඒ Values වලින් State එක මුලින්ම set වෙනවා
  const [title, setTitle] = useState(initialData?.title || "");
  const [description, setDescription] = useState(initialData?.description || "");
  const [status, setStatus] = useState(initialData?.status || "To Do");

  if (!isOpen) return null;

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!title.trim()) {
      alert("Please enter a task title");
      return;
    }

    onSaveTask({ title, description, status });
  };

  return (
    <div
      className="modal show d-block"
      tabIndex="-1"
      style={{ backgroundColor: "rgba(0, 0, 0, 0.5)" }}
    >
      <div className="modal-dialog">
        <div className="modal-content">
          <div className="modal-header">
            <h5 className="modal-title">
              {initialData ? "Edit Task" : "Add New Task"}
            </h5>
            <button
              type="button"
              className="btn-close"
              onClick={onClose}
            ></button>
          </div>

          <form onSubmit={handleSubmit}>
            <div className="modal-body">
              <input
                type="text"
                className="form-control mb-3"
                placeholder="Task Title"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
              />

              <textarea
                className="form-control mb-3"
                rows="3"
                placeholder="Task Description"
                value={description}
                onChange={(e) => setDescription(e.target.value)}
              ></textarea>

              <label className="form-label text-muted small">Status</label>
              <select
                className="form-select"
                value={status}
                onChange={(e) => setStatus(e.target.value)}
              >
                <option value="To Do">To Do</option>
                <option value="Doing">Doing</option>
                <option value="Done">Done</option>
              </select>
            </div>

            <div className="modal-footer">
              <button
                type="button"
                className="btn btn-secondary"
                onClick={onClose}
              >
                Close
              </button>

              <button type="submit" className="btn btn-primary">
                {initialData ? "Update Task" : "Save Task"}
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}