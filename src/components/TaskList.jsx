import { sampleTasks } from "../data/sampleTasks.js";
import TaskCard from "./TaskCard";

export default function TaskList() {
  if (sampleTasks.length === 0) {
    return <p>No tasks available</p>;
  }

  return (
    <div>
      {sampleTasks.map((task) => (
        <TaskCard key={task.id} task={task} />
      ))}
    </div>
  );
}
