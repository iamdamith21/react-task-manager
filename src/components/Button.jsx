export default function Button({ label, variant = "primary", onClick }) {
  const baseStyles = {
    padding: "10px 20px",
    fontSize: "16px",
    borderRadius: "6px",
    cursor: "pointer",
    border: "none",
    marginRight: "10px",
  };

  const variantStyles =
    variant === "secondary"
      ? { backgroundColor: "#e2e8f0", color: "#1e293b" }
      : { backgroundColor: "#2563eb", color: "#ffffff" };
  return (
    <button style={{ ...baseStyles, ...variantStyles }} onClick={onClick}>
      {label}
    </button>
  );
}
