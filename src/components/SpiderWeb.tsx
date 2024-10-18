import React, { useEffect, useRef } from 'react';

const SpiderWeb: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    const points: { x: number; y: number }[] = [];
    const numPoints = 100;
    const maxDistance = 150;

    for (let i = 0; i < numPoints; i++) {
      points.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
      });
    }

    function drawWeb() {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      ctx.strokeStyle = 'rgba(255, 255, 255, 0.1)';

      for (let i = 0; i < points.length; i++) {
        for (let j = i + 1; j < points.length; j++) {
          const dx = points[i].x - points[j].x;
          const dy = points[i].y - points[j].y;
          const distance = Math.sqrt(dx * dx + dy * dy);

          if (distance < maxDistance) {
            ctx.beginPath();
            ctx.moveTo(points[i].x, points[i].y);
            ctx.lineTo(points[j].x, points[j].y);
            ctx.stroke();
          }
        }
      }
    }

    function animate() {
      drawWeb();
      requestAnimationFrame(animate);
    }

    animate();

    const handleMouseMove = (e: MouseEvent) => {
      const radius = 100;
      points.forEach((point) => {
        const dx = e.clientX - point.x;
        const dy = e.clientY - point.y;
        const distance = Math.sqrt(dx * dx + dy * dy);

        if (distance < radius) {
          point.x += (dx / distance) * 5;
          point.y += (dy / distance) * 5;
        } else {
          point.x += (Math.random() - 0.5) * 0.5;
          point.y += (Math.random() - 0.5) * 0.5;
        }

        point.x = Math.max(0, Math.min(canvas.width, point.x));
        point.y = Math.max(0, Math.min(canvas.height, point.y));
      });
    };

    window.addEventListener('mousemove', handleMouseMove);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  return <canvas ref={canvasRef} className="fixed top-0 left-0 w-full h-full pointer-events-none" />;
};

export default SpiderWeb;