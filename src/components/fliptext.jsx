export default function FlipText() {
  const texto = "ModelOPS";
  return (
    <h1 className="flip-text">
      {texto.split("").map((letra, i) => (
        <span key={i} style={{ "--delay": `${i * 0.1}s` }}>
          {letra}
        </span>
      ))}
    </h1>
  );
}