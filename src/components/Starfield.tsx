
import React, { useEffect, useRef } from 'react';

interface Star {
  x: number;
  y: number;
  size: number;
  opacity: number;
  speed: number;
}

interface ShootingStar {
  x: number;
  y: number;
  length: number;
  speed: number;
  delay: number;
}

const Starfield: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const starsRef = useRef<Star[]>([]);
  const shootingStarsRef = useRef<ShootingStar[]>([]);
  const animationRef = useRef<number>(0);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    // Set canvas to full screen
    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };

    // Initialize stars
    const initStars = () => {
      const stars: Star[] = [];
      const starCount = Math.floor((window.innerWidth * window.innerHeight) / 800);
      
      for (let i = 0; i < starCount; i++) {
        stars.push({
          x: Math.random() * canvas.width,
          y: Math.random() * canvas.height,
          size: Math.random() * 1.5 + 0.5,
          opacity: Math.random() * 0.8 + 0.2,
          speed: Math.random() * 0.05 + 0.01
        });
      }
      
      starsRef.current = stars;
    };

    // Initialize shooting stars
    const initShootingStars = () => {
      const shootingStars: ShootingStar[] = [];
      const shootingStarCount = 5;
      
      for (let i = 0; i < shootingStarCount; i++) {
        shootingStars.push({
          x: Math.random() * canvas.width,
          y: Math.random() * (canvas.height / 2),
          length: Math.random() * 80 + 50,
          speed: Math.random() * 8 + 4,
          delay: Math.random() * 50 + i * 10
        });
      }
      
      shootingStarsRef.current = shootingStars;
    };

    // Animation function
    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      ctx.fillStyle = 'rgba(0, 0, 0, 0)';
      ctx.fillRect(0, 0, canvas.width, canvas.height);
      
      // Draw normal stars
      starsRef.current.forEach(star => {
        ctx.beginPath();
        ctx.arc(star.x, star.y, star.size, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(255, 255, 255, ${star.opacity})`;
        ctx.fill();
        
        // Move star downward
        star.y += star.speed * 2;
        
        // Reset star position if it goes off screen
        if (star.y > canvas.height) {
          star.y = 0;
          star.x = Math.random() * canvas.width;
        }
      });
      
      // Draw shooting stars
      shootingStarsRef.current.forEach(shootingStar => {
        shootingStar.delay--;
        
        if (shootingStar.delay <= 0) {
          const angle = Math.PI / 4; // 45 degrees in radians
          const endX = shootingStar.x - shootingStar.length * Math.cos(angle);
          const endY = shootingStar.y + shootingStar.length * Math.sin(angle);
          
          ctx.beginPath();
          ctx.moveTo(shootingStar.x, shootingStar.y);
          ctx.lineTo(endX, endY);
          
          const gradient = ctx.createLinearGradient(
            shootingStar.x, shootingStar.y, endX, endY
          );
          gradient.addColorStop(0, 'rgba(255, 255, 255, 0.7)');
          gradient.addColorStop(1, 'rgba(255, 255, 255, 0)');
          
          ctx.strokeStyle = gradient;
          ctx.lineWidth = 2;
          ctx.stroke();
          
          // Move shooting star
          shootingStar.x -= shootingStar.speed * Math.cos(angle);
          shootingStar.y += shootingStar.speed * Math.sin(angle);
          
          // Reset shooting star if it goes off screen
          if (shootingStar.x < 0 || shootingStar.y > canvas.height) {
            shootingStar.x = Math.random() * canvas.width;
            shootingStar.y = Math.random() * (canvas.height / 3);
            shootingStar.delay = Math.random() * 200 + 50;
          }
        }
      });
      
      animationRef.current = requestAnimationFrame(animate);
    };

    window.addEventListener('resize', resizeCanvas);
    resizeCanvas();
    initStars();
    initShootingStars();
    animate();

    return () => {
      window.removeEventListener('resize', resizeCanvas);
      cancelAnimationFrame(animationRef.current);
    };
  }, []);

  return (
    <canvas 
      ref={canvasRef} 
      className="fixed top-0 left-0 w-full h-full z-[-1]"
    />
  );
};

export default Starfield;
