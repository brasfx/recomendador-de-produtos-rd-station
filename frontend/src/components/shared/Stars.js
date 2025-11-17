function Stars({ score }) {
  const stars = Array.from({ length: score }, (_, i) => i);

  return (
    <div className="flex items-center gap-1">
      {stars.map((_, i) => (
        <span key={i} className="text-yellow-500 text-lg">
          ⭐
        </span>
      ))}
    </div>
  );
}

export default Stars;
