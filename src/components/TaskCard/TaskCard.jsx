import { Draggable } from "@hello-pangea/dnd";
import "./TaskCard.css";

function TaskCard({ task, onDelete, onEdit, index }) {
  const getPriorityBadge = () => {
    if (task.priority === "High") {
      return (
        <span className="badge bg-danger">
          🔴 High
        </span>
      );
    }

    if (task.priority === "Low") {
      return (
        <span className="badge bg-success">
          🟢 Low
        </span>
      );
    }

    return (
      <span className="badge bg-warning text-dark">
        🟡 Medium
      </span>
    );
  };

  const getDueDateInfo = () => {
    if (!task.dueDate) {
      return null;
    }

    const today = new Date();
    const dueDate = new Date(task.dueDate);

    today.setHours(0, 0, 0, 0);
    dueDate.setHours(0, 0, 0, 0);

    const difference =
      dueDate.getTime() - today.getTime();

    const oneDay = 1000 * 60 * 60 * 24;

    const daysLeft = Math.round(
      difference / oneDay
    );

    if (daysLeft < 0) {
      return (
        <span className="badge bg-danger">
          🔴 Overdue
        </span>
      );
    }

    if (daysLeft === 0) {
      return (
        <span className="badge bg-warning text-dark">
          🟠 Due Today
        </span>
      );
    }

    return (
      <span className="badge bg-success">
        🟢 Upcoming
      </span>
    );
  };

  return (
    <Draggable
      draggableId={String(task.id)}
      index={index}
    >
      {(provided) => (
        <div
          ref={provided.innerRef}
          {...provided.draggableProps}
          {...provided.dragHandleProps}
        >
          <div className="card shadow-sm mb-3 task-card">
            <div className="card-body">

              {/* Task Title + Priority */}
              <div className="d-flex justify-content-between align-items-center gap-2">
                <h5 className="fw-bold mb-0">
                  {task.title}
                </h5>

                {getPriorityBadge()}
              </div>

              {/* Description */}
              <p className="text-muted mt-3 mb-2">
                {task.description}
              </p>

              {/* Due Date */}
              {task.dueDate && (
                <div className="d-flex align-items-center gap-2 mt-2">
                  <span className="text-muted">
                    📅 {task.dueDate}
                  </span>

                  {getDueDateInfo()}
                </div>
              )}

              {/* Buttons */}
              <div className="d-flex justify-content-end gap-2 mt-3">

                <button
                  type="button"
                  className="btn btn-sm btn-warning"
                  onClick={() => onEdit(task)}
                >
                  ✏️ Edit
                </button>

                <button
                  type="button"
                  className="btn btn-sm btn-danger"
                  onClick={() => {
                    const confirmDelete = window.confirm(
                      "Are you sure you want to delete this task?"
                    );

                    if (confirmDelete) {
                      onDelete(task.id);
                    }
                  }}
                >
                  🗑 Delete
                </button>

              </div>

            </div>
          </div>
        </div>
      )}
    </Draggable>
  );
}

export default TaskCard;