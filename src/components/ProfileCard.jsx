export default function ProfileCard({ name, role, skills }) {
  return (
    <>
      <h1>{name}</h1>
      <p>{role}</p>
      <ul>
        {skills.map((skill) => (
          <li key={skill}>{skill}</li>
        ))}
      </ul>
    </>
  );
}
