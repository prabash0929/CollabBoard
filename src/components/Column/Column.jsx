import TaskCard from "../TaskCard/TaskCard";
import { Droppable } from "@hello-pangea/dnd";
import "./Column.css";

function Column({ title, tasks, onDelete, onEdit }) {
  return (
    <div className="col-lg-4 col-md-6 board-column-wrapper">
      <div className="column">

        <div className="column-title">
          {title}
        </div>

        <Droppable droppableId={title}>
          {(provided) => (
            <div
              className="card-body"
              ref={provided.innerRef}
              {...provided.droppableProps}
            >
              {tasks.map((task, index) => (
                <TaskCard
                  key={task.id}
                  task={task}
                  index={index}
                  onDelete={onDelete}
                  onEdit={onEdit}
                />
              ))}

              {provided.placeholder}
            </div>
          )}
        </Droppable>

      </div>
    </div>
  );
}

export default Column;