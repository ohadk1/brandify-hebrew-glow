
import React, { useEffect, useRef } from 'react';

interface Star {
  x: number;
  y: number;
  size: number;
  opacity: number;
  speed: number;
  depth: number;
  color: string;
}

interface ShootingStar {
  x: number;
  y: number;
  length: number;
  speed: number;
  delay: number;
  opacity: number;
}

const Starfield: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const starsRef = useRef<Star[]>([]);
  const shootingStarsRef = useRef<ShootingStar[]>([]);
  const animationRef = useRef<number>(0);
  
  // For parallax effect
  const mousePosition = useRef({ x: 0, y: 0 });

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

    // Track mouse position for parallax
    const handleMouseMove = (e: MouseEvent) => {
      mousePosition.current = {
        x: e.clientX / window.innerWidth - 0.5,
        y: e.clientY / window.innerHeight - 0.5
      };
    };

    // Star colors (cool whites with slight variations)
    const starColors = [
      '#FFFFFF', // Pure white
      '#F8F8FF', // Ghost white
      '#F5F5FF', // Slight blue tint
      '#FFFAFA', // Snow
      '#E6E6FA', // Lavender
      '#B0E0E6', // Powder blue (for distant stars)
    ];

    // Initialize stars with varied depths
    const initStars = () => {
      const stars: Star[] = [];
      const starCount = Math.floor((window.innerWidth * window.innerHeight) / 500);
      
      for (let i = 0; i < starCount; i++) {
        const depth = Math.random() * 3; // 0-1 close, 1-2 medium, 2-3 far
        stars.push({
          x: Math.random() * canvas.width,
          y: Math.random() * canvas.height,
          size: depth < 1 ? Math.random() * 2 + 1 : depth < 2 ? Math.random() * 1.5 + 0.5 : Math.random() * 1 + 0.1,
          opacity: depth < 1 ? Math.random() * 0.3 + 0.7 : depth < 2 ? Math.random() * 0.4 + 0.3 : Math.random() * 0.3 + 0.1,
          speed: depth < 1 ? Math.random() * 0.02 + 0.03 : depth < 2 ? Math.random() * 0.02 + 0.01 : Math.random() * 0.01,
          depth,
          color: depth < 1 ? starColors[Math.floor(Math.random() * 3)] : depth < 2 ? starColors[Math.floor(Math.random() * 5)] : starColors[Math.floor(Math.random() * starColors.length)]
        });
      }
      
      starsRef.current = stars;
    };

    // Initialize shooting stars
    const initShootingStars = () => {
      const shootingStars: ShootingStar[] = [];
      const shootingStarCount = 8; // More shooting stars
      
      for (let i = 0; i < shootingStarCount; i++) {
        shootingStars.push({
          x: Math.random() * canvas.width,
          y: Math.random() * (canvas.height / 3),
          length: Math.random() * 100 + 80, // Longer trails
          speed: Math.random() * 10 + 6,
          delay: Math.random() * 200 + i * 100,
          opacity: Math.random() * 0.3 + 0.7
        });
      }
      
      shootingStarsRef.current = shootingStars;
    };

    // Animation function
    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      ctx.fillStyle = 'rgba(0, 0, 0, 0)';
      ctx.fillRect(0, 0, canvas.width, canvas.height);
      
      // Draw stars with parallax effect
      starsRef.current.forEach(star => {
        // Apply parallax effect based on star depth and mouse position
        const parallaxX = mousePosition.current.x * (5 / star.depth) * 2;
        const parallaxY = mousePosition.current.y * (5 / star.depth) * 2;
        
        // Create twinkling effect
        const twinkle = Math.sin(Date.now() * 0.001 * star.speed) * 0.2 + 0.8;
        
        ctx.beginPath();
        
        // Draw star with subtle glow for closer stars
        if (star.depth < 1.5) {
          const gradient = ctx.createRadialGradient(
            star.x + parallaxX, star.y + parallaxY, 0,
            star.x + parallaxX, star.y + parallaxY, star.size * 2
          );
          gradient.addColorStop(0, star.color);
          gradient.addColorStop(1, 'rgba(255, 255, 255, 0)');
          
          ctx.fillStyle = gradient;
          ctx.arc(star.x + parallaxX, star.y + parallaxY, star.size * 2, 0, Math.PI * 2);
          ctx.fill();
        }
        
        // Draw star core
        ctx.beginPath();
        ctx.arc(star.x + parallaxX, star.y + parallaxY, star.size, 0, Math.PI * 2);
        ctx.fillStyle = `${star.color.slice(0, -1)}, ${star.opacity * twinkle})`;
        ctx.fill();
        
        // Move star downward
        star.y += star.speed;
        
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
          
          // Create trail with gradient
          const gradient = ctx.createLinearGradient(
            shootingStar.x, shootingStar.y, endX, endY
          );
          gradient.addColorStop(0, `rgba(255, 255, 255, ${shootingStar.opacity})`);
          gradient.addColorStop(0.3, `rgba(200, 200, 255, ${shootingStar.opacity * 0.6})`);
          gradient.addColorStop(1, 'rgba(255, 255, 255, 0)');
          
          ctx.beginPath();
          ctx.moveTo(shootingStar.x, shootingStar.y);
          ctx.lineTo(endX, endY);
          ctx.strokeStyle = gradient;
          ctx.lineWidth = 2.5;
          ctx.stroke();
          
          // Add head glow
          ctx.beginPath();
          const headGradient = ctx.createRadialGradient(
            shootingStar.x, shootingStar.y, 0,
            shootingStar.x, shootingStar.y, 4
          );
          headGradient.addColorStop(0, `rgba(255, 255, 255, ${shootingStar.opacity})`);
          headGradient.addColorStop(1, 'rgba(255, 255, 255, 0)');
          ctx.fillStyle = headGradient;
          ctx.arc(shootingStar.x, shootingStar.y, 4, 0, Math.PI * 2);
          ctx.fill();
          
          // Move shooting star
          shootingStar.x -= shootingStar.speed * Math.cos(angle);
          shootingStar.y += shootingStar.speed * Math.sin(angle);
          
          // Reset shooting star if it goes off screen
          if (shootingStar.x < 0 || shootingStar.y > canvas.height) {
            shootingStar.x = Math.random() * canvas.width;
            shootingStar.y = Math.random() * (canvas.height / 3);
            shootingStar.delay = Math.random() * 200 + 100;
            shootingStar.opacity = Math.random() * 0.3 + 0.7;
          }
        }
      });
      
      // Create occasional nebula-like clouds
      if (Math.random() < 0.001) {
        const x = Math.random() * canvas.width;
        const y = Math.random() * canvas.height;
        const radius = Math.random() * 100 + 50;
        
        const nebula = ctx.createRadialGradient(x, y, 0, x, y, radius);
        const hue = Math.random() * 60 + 200; // Blue to purple
        nebula.addColorStop(0, `hsla(${hue}, 100%, 70%, 0.03)`);
        nebula.addColorStop(1, 'rgba(0, 0, 0, 0)');
        
        ctx.fillStyle = nebula;
        ctx.beginPath();
        ctx.arc(x, y, radius, 0, Math.PI * 2);
        ctx.fill();
      }
      
      animationRef.current = requestAnimationFrame(animate);
    };

    window.addEventListener('resize', resizeCanvas);
    window.addEventListener('mousemove', handleMouseMove);
    resizeCanvas();
    initStars();
    initShootingStars();
    animate();

    return () => {
      window.removeEventListener('resize', resizeCanvas);
      window.removeEventListener('mousemove', handleMouseMove);
      cancelAnimationFrame(animationRef.current);
    };
  }, []);

  return (
    <canvas 
      ref={canvasRef} 
      className="fixed top-0 left-0 w-full h-full z-[-1] bg-black"
    />
  );
};

export default Starfield;
