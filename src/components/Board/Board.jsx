import { useState, useEffect } from "react";
import * as bootstrap from "bootstrap";
import Column from "../Column/Column";
import { DragDropContext } from "@hello-pangea/dnd";
import "./Board.css";

const initialTasks = [
  {
    id: 1,
    title: "Design Homepage",
    description: "Create landing page UI",
    status: "To Do",
    priority: "High",
    dueDate: "",
  },
  {
    id: 2,
    title: "Navbar",
    description: "Responsive Bootstrap Navbar",
    status: "To Do",
    priority: "Medium",
    dueDate: "",
  },
  {
    id: 3,
    title: "Login UI",
    description: "Design login page",
    status: "Doing",
    priority: "Low",
    dueDate: "",
  },
  {
    id: 4,
    title: "Project Setup",
    description: "React + Bootstrap Installed",
    status: "Done",
    priority: "High",
    dueDate: "",
  },
];

function Board() {
  // =========================
  // Tasks
  // =========================

  const [tasks, setTasks] = useState(() => {
    const saved = localStorage.getItem("collabboard_tasks");

    return saved ? JSON.parse(saved) : initialTasks;
  });

  // =========================
  // Form States
  // =========================

  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [status, setStatus] = useState("To Do");
  const [priority, setPriority] = useState("Medium");
  const [dueDate, setDueDate] = useState("");

  // =========================
  // Search
  // =========================

  const [search, setSearch] = useState("");

  // =========================
  // Edit
  // =========================

  const [editingId, setEditingId] = useState(null);
  const [isEditing, setIsEditing] = useState(false);

  // =========================
  // Toast
  // =========================

  const [toastMessage, setToastMessage] = useState("");
  const [toastType, setToastType] = useState("success");

  // =========================
  // LocalStorage
  // =========================

  useEffect(() => {
    localStorage.setItem(
      "collabboard_tasks",
      JSON.stringify(tasks)
    );
  }, [tasks]);

  // =========================
  // Toast
  // =========================

  const showToast = (message, type = "success") => {
    setToastMessage(message);
    setToastType(type);

    setTimeout(() => {
      setToastMessage("");
    }, 3000);
  };

  // =========================
  // Reset Form
  // =========================

  const resetForm = () => {
    setTitle("");
    setDescription("");
    setStatus("To Do");
    setPriority("Medium");
    setDueDate("");
    setEditingId(null);
    setIsEditing(false);
  };

  // =========================
  // Add / Update Task
  // =========================

  const handleSaveTask = () => {
    if (title.trim() === "") {
      showToast("Please enter task title", "danger");
      return;
    }

    if (isEditing) {
      const updatedTasks = tasks.map((task) =>
        task.id === editingId
          ? {
              ...task,
              title: title.trim(),
              description,
              status,
              priority,
              dueDate,
            }
          : task
      );

      setTasks(updatedTasks);

      showToast("Task updated successfully! ✏️");
    } else {
      const newTask = {
        id: Date.now(),
        title: title.trim(),
        description,
        status,
        priority,
        dueDate,
      };

      setTasks([...tasks, newTask]);

      showToast("Task added successfully! ✅");
    }

    resetForm();

    const closeBtn = document.getElementById("closeModal");

    if (closeBtn) {
      closeBtn.click();
    }
  };

  // =========================
  // Delete Task
  // =========================

  const handleDeleteTask = (id) => {
    setTasks(tasks.filter((task) => task.id !== id));

    showToast("Task deleted successfully! 🗑️");
  };

  // =========================
  // Edit Task
  // =========================

  const handleEditTask = (task) => {
    setEditingId(task.id);
    setTitle(task.title);
    setDescription(task.description);
    setStatus(task.status);
    setPriority(task.priority || "Medium");
    setDueDate(task.dueDate || "");
    setIsEditing(true);

    const modalElement = document.getElementById("addTaskModal");

    if (modalElement) {
      const modal = new bootstrap.Modal(modalElement);
      modal.show();
    }
  };

  // =========================
  // Drag & Drop
  // =========================

  const handleDragEnd = (result) => {
    const { destination, source, draggableId } = result;

    // Dropped outside
    if (!destination) {
      return;
    }

    // Same position
    if (
      destination.droppableId === source.droppableId &&
      destination.index === source.index
    ) {
      return;
    }

    const draggedTask = tasks.find(
      (task) => task.id === Number(draggableId)
    );

    if (!draggedTask) {
      return;
    }

    const updatedTasks = tasks.map((task) =>
      task.id === draggedTask.id
        ? {
            ...task,
            status: destination.droppableId,
          }
        : task
    );

    setTasks(updatedTasks);

    showToast(
      `Task moved to ${destination.droppableId} 📌`
    );
  };

  // =========================
  // Filter Tasks
  // =========================

  const filterTasks = (taskStatus) => {
    return tasks.filter(
      (task) =>
        task.status === taskStatus &&
        task.title
          .toLowerCase()
          .includes(search.toLowerCase())
    );
  };

  // =========================
  // UI
  // =========================

  return (
    <>
      <div className="board-container">

        {/* =========================
            Search + Add Task
        ========================= */}

        <div className="board-toolbar row align-items-center">

          {/* Add Task */}

          <div className="col-md-6 mb-2 mb-md-0">
          <button
  className="btn btn-primary add-task-btn"
  data-bs-toggle="modal"
  data-bs-target="#addTaskModal"
  onClick={resetForm}
>
  + Add Task
</button>
          </div>

          {/* Search */}

          <div className="col-md-6">
            <input
              type="text"
              className="form-control"
              placeholder="🔍 Search Tasks..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
            />
          </div>

        </div>

        {/* =========================
            Drag & Drop
        ========================= */}

       <DragDropContext onDragEnd={handleDragEnd}>
  <div className="board-columns row g-3">

            {/* To Do */}

            <Column
              title="To Do"
              tasks={filterTasks("To Do")}
              onDelete={handleDeleteTask}
              onEdit={handleEditTask}
            />

            {/* Doing */}

            <Column
              title="Doing"
              tasks={filterTasks("Doing")}
              onDelete={handleDeleteTask}
              onEdit={handleEditTask}
            />

            {/* Done */}

            <Column
              title="Done"
              tasks={filterTasks("Done")}
              onDelete={handleDeleteTask}
              onEdit={handleEditTask}
            />

          </div>

        </DragDropContext>

      </div>

      {/* =========================
          Add / Edit Modal
      ========================= */}

      <div
        className="modal fade"
        id="addTaskModal"
        tabIndex="-1"
        aria-hidden="true"
      >
        <div className="modal-dialog">

          <div className="modal-content">

            {/* Modal Header */}

            <div className="modal-header">

              <h5 className="modal-title">
                {isEditing
                  ? "Edit Task"
                  : "Add New Task"}
              </h5>

              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="modal"
                onClick={resetForm}
              ></button>

            </div>

            {/* Modal Body */}

            <div className="modal-body">

              {/* Title */}

              <label className="form-label">
                Task Title
              </label>

              <input
                type="text"
                className="form-control mb-3"
                placeholder="Enter task title"
                value={title}
                onChange={(e) =>
                  setTitle(e.target.value)
                }
              />

              {/* Description */}

              <label className="form-label">
                Description
              </label>

              <textarea
                className="form-control mb-3"
                rows="3"
                placeholder="Enter task description"
                value={description}
                onChange={(e) =>
                  setDescription(e.target.value)
                }
              ></textarea>

              {/* Status */}

              <label className="form-label">
                Status
              </label>

              <select
                className="form-select mb-3"
                value={status}
                onChange={(e) =>
                  setStatus(e.target.value)
                }
              >
                <option value="To Do">
                  To Do
                </option>

                <option value="Doing">
                  Doing
                </option>

                <option value="Done">
                  Done
                </option>
              </select>

              {/* Priority */}

              <label className="form-label">
                Priority
              </label>

              <select
                className="form-select mb-3"
                value={priority}
                onChange={(e) =>
                  setPriority(e.target.value)
                }
              >
                <option value="High">
                  🔴 High
                </option>

                <option value="Medium">
                  🟡 Medium
                </option>

                <option value="Low">
                  🟢 Low
                </option>
              </select>

              {/* Due Date */}

              <label className="form-label">
                Due Date
              </label>

              <input
                type="date"
                className="form-control"
                value={dueDate}
                onChange={(e) =>
                  setDueDate(e.target.value)
                }
              />

            </div>

            {/* Modal Footer */}

            <div className="modal-footer">

              <button
                id="closeModal"
                type="button"
                className="btn btn-secondary"
                data-bs-dismiss="modal"
                onClick={resetForm}
              >
                Close
              </button>

              <button
                type="button"
                className="btn btn-primary"
                onClick={handleSaveTask}
              >
                {isEditing
                  ? "Update Task"
                  : "Save Task"}
              </button>

            </div>

          </div>

        </div>
      </div>

      {/* =========================
          Toast Notification
      ========================= */}

      {toastMessage && (
        <div
          className="toast-container position-fixed bottom-0 end-0 p-3"
          style={{ zIndex: 9999 }}
        >
          <div
            className={`toast show text-bg-${toastType}`}
            role="alert"
            aria-live="assertive"
            aria-atomic="true"
          >
            <div className="d-flex">

              <div className="toast-body">
                {toastMessage}
              </div>

              <button
                type="button"
                className="btn-close btn-close-white me-2 m-auto"
                onClick={() =>
                  setToastMessage("")
                }
              ></button>

            </div>
          </div>
        </div>
      )}

    </>
  );
}

export default Board;