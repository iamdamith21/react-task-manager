import Button from "./components/Button.jsx";
import Header from "./components/Header.jsx";
import ProfileCard from "./components/ProfileCard.jsx";
import TaskCard from "./components/TaskCard.jsx";
import { sampleTasks } from "./data/sampleTasks.js";
export default function App() {
  const handleSave = () => {
    alert("Primary button clicked!");
  };

  const handleCancel = () => {
    alert("Secondary button clicked!");
  };
  return (
    <main>
      <Header />
      <section>
        <h2>Welcome to your workspace</h2>
        {sampleTasks.map((task) => (
          <TaskCard key={task.id} task={task} />
        ))}
      </section>

      <ProfileCard
        name="Nimal Perera"
        role="Frontend Developer"
        skills={["JavaScript", "React"]}
      />
      <ProfileCard
        name="Amaya Silva"
        role="UI Developer"
        skills={["HTML", "CSS", "Figma"]}
      />

      <Button label="Save Changes" variant="primary" onClick={handleSave} />
      <Button label="Cancel" variant="secondary" onClick={handleCancel} />
    </main>
  );
}
