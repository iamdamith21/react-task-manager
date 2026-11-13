export default function TaskCard({ task }) {
  const { title, priority, completed } = task;

  const cardStyle = {
    border: "1px solid #cbd5e1",
    borderRadius: "8px",
    padding: "12px 16px",
    marginBottom: "10px",
    backgroundColor: completed ? "#f8fafc" : "#ffffff",
    opacity: completed ? 0.65 : 1,
  };

  const titleStyle = {
    margin: "0 0 6px 0",
    textDecoration: completed ? "line-through" : "none",
  };
  return (
    <div style={cardStyle}>
      <h3 style={titleStyle}>{title}</h3>
      <p style={{ margin: "4px 0" }}>
        <strong>Priority:</strong> {priority}
      </p>
      <p style={{ margin: "4px 0" }}>
        <strong>Status:</strong> {completed ? "Completed" : "Incomplete"}
      </p>
    </div>
  );
}

console.log("Rendering TaskCard");
