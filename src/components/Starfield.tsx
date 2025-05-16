
import React, { useEffect, useRef } from 'react';

interface Star {
  x: number;
  y: number;
  size: number;
  opacity: number;
  speed: number;
  color: string;
  parallaxFactor: number;
}

const Starfield: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const starsRef = useRef<Star[]>([]);
  const mousePositionRef = useRef({ x: 0, y: 0 });
  const animationRef = useRef<number>(0);
  const backgroundImagesRef = useRef<HTMLImageElement[]>([]);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    // ✅ URLs של תמונות כוכבים ברקע
    const backgroundImageUrls = [
      '/lovable-uploads/38f9e8c4-e144-49f5-9b1c-e75b55cc79af.png',
      '/lovable-uploads/14c344fe-3a3f-44b2-a719-bc5b75754d77.png',
      '/lovable-uploads/47da9fd2-3568-4506-97f0-7a9315bbc946.png',
    ];

    // טוען את התמונות
    let loadedImages: HTMLImageElement[] = [];
    backgroundImageUrls.forEach((url) => {
      const img = new Image();
      img.src = url;
      img.onload = () => {
        loadedImages.push(img);
        if (loadedImages.length === backgroundImageUrls.length) {
          backgroundImagesRef.current = loadedImages;
        }
      };
    });

    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
      initStars();
    };

    const initStars = () => {
      const stars: Star[] = [];
      const starCount = Math.floor((canvas.width * canvas.height) / 600);
      const starColors = ['#ffffff', '#fffacd', '#f8f8ff', '#e6e6fa'];

      for (let i = 0; i < starCount; i++) {
        stars.push({
          x: Math.random() * canvas.width,
          y: Math.random() * canvas.height,
          size: Math.random() * 1.2 + 0.3,
          opacity: Math.random() * 0.6 + 0.3,
          speed: Math.random() * 0.3 + 0.1,
          color: starColors[Math.floor(Math.random() * starColors.length)],
          parallaxFactor: Math.random() * 0.03 + 0.01,
        });
      }

      starsRef.current = stars;
    };

    const handleMouseMove = (e: MouseEvent) => {
      mousePositionRef.current = {
        x: e.clientX,
        y: e.clientY,
      };
    };

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      // רקע שקוף (לא שחור מלא) כדי לאפשר לשכבות אחרות להיראות
      ctx.fillStyle = 'rgba(0,0,0,0.2)';
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      // פרלקסה עם תמונות הרקע
      const parallaxX = (mousePositionRef.current.x - canvas.width / 2) / 50;
      const parallaxY = (mousePositionRef.current.y - canvas.height / 2) / 50;

      if (backgroundImagesRef.current.length > 0) {
        backgroundImagesRef.current.forEach((img, index) => {
          const alpha = 0.4 + index * 0.2;
          ctx.globalAlpha = alpha;
          ctx.drawImage(
            img,
            -20 + parallaxX * (0.3 + index * 0.3),
            -20 + parallaxY * (0.3 + index * 0.3),
            canvas.width + 40,
            canvas.height + 40
          );
        });
        ctx.globalAlpha = 1;
      }

      // ציור כוכבים
      const t = Date.now() * 0.001;
      starsRef.current.forEach((star) => {
        const twinkle = Math.sin(t * 3 + star.x + star.y) * 0.5 + 0.5;

        const offsetX =
          (mousePositionRef.current.x - canvas.width / 2) * star.parallaxFactor;
        const offsetY =
          (mousePositionRef.current.y - canvas.height / 2) * star.parallaxFactor;

        ctx.beginPath();
        ctx.arc(
          star.x + offsetX,
          star.y + offsetY,
          star.size,
          0,
          Math.PI * 2
        );
        ctx.fillStyle = `${star.color}${Math.floor(
          star.opacity * twinkle * 255
        )
          .toString(16)
          .padStart(2, '0')}`;
        ctx.fill();

        star.y += star.speed;
        if (star.y > canvas.height) {
          star.y = 0;
          star.x = Math.random() * canvas.width;
        }
      });

      animationRef.current = requestAnimationFrame(animate);
    };

    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('resize', resizeCanvas);
    resizeCanvas();
    animate();

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('resize', resizeCanvas);
      cancelAnimationFrame(animationRef.current);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        width: '100vw',
        height: '100vh',
        zIndex: 0,
        pointerEvents: 'none',
      }}
    />
  );
};

export default Starfield;
