
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
  const backgroundImagesRef = useRef<HTMLImageElement[]>([]);
  const mousePositionRef = useRef({ x: 0, y: 0 });

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    // Load background space patterns
    const backgroundImageUrls = [
      '/lovable-uploads/38f9e8c4-e144-49f5-9b1c-e75b55cc79af.png',
      '/lovable-uploads/14c344fe-3a3f-44b2-a719-bc5b75754d77.png',
      '/lovable-uploads/47da9fd2-3568-4506-97f0-7a9315bbc946.png'
    ];
    
    const loadedImages: HTMLImageElement[] = [];
    backgroundImageUrls.forEach((url, index) => {
      const img = new Image();
      img.src = url;
      img.onload = () => {
        loadedImages.push(img);
        if (loadedImages.length === backgroundImageUrls.length) {
          backgroundImagesRef.current = loadedImages;
        }
      };
    });

    // Track mouse position for parallax effect
    const handleMouseMove = (e: MouseEvent) => {
      mousePositionRef.current = {
        x: e.clientX,
        y: e.clientY
      };
    };

    // Set canvas to full screen
    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
      initStars(); // Reinitialize stars when canvas resizes
    };

    // Initialize stars with varied colors
    const initStars = () => {
      const stars: Star[] = [];
      const starCount = Math.floor((window.innerWidth * window.innerHeight) / 800);
      
      const starColors = ['#ffffff', '#fffacd', '#f8f8ff', '#e6e6fa', '#b0e0e6'];
      
      for (let i = 0; i < starCount; i++) {
        stars.push({
          x: Math.random() * canvas.width,
          y: Math.random() * canvas.height,
          size: Math.random() * 2 + 0.5,
          opacity: Math.random() * 0.8 + 0.2,
          speed: Math.random() * 0.05 + 0.01,
          color: starColors[Math.floor(Math.random() * starColors.length)],
          parallaxFactor: Math.random() * 0.03
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
      ctx.fillStyle = 'rgba(0, 0, 0, 1)';
      ctx.fillRect(0, 0, canvas.width, canvas.height);
      
      // Draw background space patterns with parallax effect
      if (backgroundImagesRef.current.length > 0) {
        const parallaxX = (mousePositionRef.current.x - window.innerWidth / 2) / 50;
        const parallaxY = (mousePositionRef.current.y - window.innerHeight / 2) / 50;
        
        // Draw the first pattern - distant stars
        ctx.globalAlpha = 0.5;
        ctx.drawImage(
          backgroundImagesRef.current[0], 
          -20 + parallaxX * 0.2, 
          -20 + parallaxY * 0.2, 
          canvas.width + 40, 
          canvas.height + 40
        );
        
        // Draw the second pattern - mid-distance stars
        if (backgroundImagesRef.current[1]) {
          ctx.globalAlpha = 0.6;
          ctx.drawImage(
            backgroundImagesRef.current[1], 
            -20 + parallaxX * 0.5, 
            -20 + parallaxY * 0.5, 
            canvas.width + 40, 
            canvas.height + 40
          );
        }
        
        // Draw the third pattern - close stars
        if (backgroundImagesRef.current[2]) {
          ctx.globalAlpha = 0.7;
          ctx.drawImage(
            backgroundImagesRef.current[2], 
            -20 + parallaxX, 
            -20 + parallaxY, 
            canvas.width + 40, 
            canvas.height + 40
          );
        }
        
        ctx.globalAlpha = 1;
      }
      
      // Draw normal stars with twinkle effect and parallax
      const time = Date.now() * 0.001;
      const mouseX = mousePositionRef.current.x;
      const mouseY = mousePositionRef.current.y;
      
      starsRef.current.forEach(star => {
        // Calculate parallax offset based on mouse position
        const parallaxOffsetX = (mouseX - window.innerWidth / 2) * star.parallaxFactor;
        const parallaxOffsetY = (mouseY - window.innerHeight / 2) * star.parallaxFactor;
        
        // Twinkle effect
        const twinkle = Math.sin(time * 3 + star.x + star.y) * 0.3 + 0.7;
        
        ctx.beginPath();
        ctx.arc(
          star.x + parallaxOffsetX, 
          star.y + parallaxOffsetY, 
          star.size, 
          0, 
          Math.PI * 2
        );
        ctx.fillStyle = `${star.color}${Math.floor(star.opacity * twinkle * 255).toString(16).padStart(2, '0')}`;
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
          
          // Create glow effect around shooting star
          ctx.beginPath();
          ctx.moveTo(shootingStar.x, shootingStar.y);
          ctx.lineTo(endX, endY);
          ctx.lineWidth = 4;
          ctx.strokeStyle = 'rgba(255, 255, 255, 0.1)';
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
      className="fixed top-0 left-0 w-full h-full z-[-1]"
    />
  );
};

export default Starfield;
