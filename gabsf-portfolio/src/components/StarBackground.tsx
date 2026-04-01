import { useMemo } from "react";

const StarBackground = () => {
  const stars = useMemo(
    () =>
      Array.from({ length: 60 }, (_, i) => ({
        id: i,
        left: `${Math.random() * 100}%`,
        top: `${Math.random() * 100}%`,
        size: Math.random() * 2.5 + 1,
        duration: `${Math.random() * 4 + 2}s`,
        delay: `${Math.random() * 5}s`,
      })),
    []
  );

  return (
    <div className="fixed inset-0 overflow-hidden pointer-events-none z-0">
      {stars.map((s) => (
        <div
          key={s.id}
          className="star-particle"
          style={{
            left: s.left,
            top: s.top,
            width: s.size,
            height: s.size,
            "--duration": s.duration,
            "--delay": s.delay,
          } as React.CSSProperties}
        />
      ))}
    </div>
  );
};

export default StarBackground;
