import { useTheme } from "next-themes";
import { useEffect, useRef } from "react";

interface Particle {
    x: number;
    y: number;
    dx: number;
    dy: number;
    size: number;
}

interface ParticleBackgroundProps {
    particleCount?: number;
    particleSize?: number;
    particleSpeed?: number;
    connectionRadius?: number;
    interactive?: boolean;
}

function ParticleBackground({
    particleCount = 50,
    particleSize = 2,
    particleSpeed = 0.5,
    connectionRadius = 150,
    interactive = true,
}: ParticleBackgroundProps) {
    const canvasRef = useRef<HTMLCanvasElement>(null);
    const { theme, resolvedTheme } = useTheme();
    const currentTheme = theme === "system" ? resolvedTheme : theme;
    const particlesRef = useRef<Particle[]>([]);
    const mouseRef = useRef({ x: 0, y: 0 });

    useEffect(() => {
        const canvas = canvasRef.current;

        if (!canvas) return;

        const ctx = canvas.getContext("2d", { alpha: true });

        if (!ctx) return;

        const dpr = window.devicePixelRatio || 1;
        let animationId: number;
        let width: number;
        let height: number;

        const resizeCanvas = () => {
            width = window.innerWidth;
            height = window.innerHeight;
            canvas.width = width * dpr;
            canvas.height = height * dpr;
            canvas.style.width = `${width}px`;
            canvas.style.height = `${height}px`;
            ctx.scale(dpr, dpr);

            // Reinitialize particles when canvas is resized
            initParticles();
        };

        const initParticles = () => {
            particlesRef.current = Array.from({ length: particleCount }, () => ({
                x: Math.random() * width,
                y: Math.random() * height,
                dx: (Math.random() - 0.5) * particleSpeed,
                dy: (Math.random() - 0.5) * particleSpeed,
                size: Math.random() * particleSize + 1,
            }));
        };

        const drawParticle = (particle: Particle) => {
            ctx.beginPath();
            ctx.arc(particle.x, particle.y, particle.size, 0, Math.PI * 2);
            ctx.fill();
        };

        const drawConnection = (p1: Particle, p2: Particle, distance: number) => {
            const opacity = 1 - distance / connectionRadius;

            ctx.beginPath();
            ctx.moveTo(p1.x, p1.y);
            ctx.lineTo(p2.x, p2.y);
            ctx.strokeStyle =
                currentTheme === "dark"
                    ? `rgba(255, 255, 255, ${opacity * 0.2})`
                    : `rgba(0, 0, 0, ${opacity * 0.1})`;
            ctx.stroke();
        };

        const updateParticles = () => {
            const particles = particlesRef.current;

            particles.forEach((particle) => {
                particle.x += particle.dx;
                particle.y += particle.dy;

                // Bounce off edges
                if (particle.x < 0 || particle.x > width) particle.dx *= -1;
                if (particle.y < 0 || particle.y > height) particle.dy *= -1;

                // Keep particles within bounds
                particle.x = Math.max(0, Math.min(width, particle.x));
                particle.y = Math.max(0, Math.min(height, particle.y));
            });
        };

        const draw = () => {
            ctx.clearRect(0, 0, width, height);

            // Set colors based on theme
            ctx.fillStyle =
                currentTheme === "dark" ? "rgba(255, 255, 255, 0.8)" : "rgba(0, 0, 0, 0.5)";
            ctx.strokeStyle =
                currentTheme === "dark" ? "rgba(255, 255, 255, 0.1)" : "rgba(0, 0, 0, 0.05)";
            ctx.lineWidth = 1;

            const particles = particlesRef.current;
            const mousePos = mouseRef.current;

            // Draw particles and connections
            particles.forEach((particle, i) => {
                drawParticle(particle);

                // Connect to nearby particles
                for (let j = i + 1; j < particles.length; j++) {
                    const other = particles[j];
                    const dx = other.x - particle.x;
                    const dy = other.y - particle.y;
                    const distance = Math.sqrt(dx * dx + dy * dy);

                    if (distance < connectionRadius) {
                        drawConnection(particle, other, distance);
                    }
                }

                // Connect to mouse if interactive
                if (interactive && mousePos.x > 0) {
                    const dx = mousePos.x - particle.x;
                    const dy = mousePos.y - particle.y;
                    const distance = Math.sqrt(dx * dx + dy * dy);

                    if (distance < connectionRadius * 1.5) {
                        drawConnection(particle, mousePos as Particle, distance);
                        // Add slight attraction to mouse
                        particle.dx += dx * 0.00001;
                        particle.dy += dy * 0.00001;
                    }
                }
            });

            updateParticles();
            animationId = requestAnimationFrame(draw);
        };

        const handleMouseMove = (e: MouseEvent) => {
            const rect = canvas.getBoundingClientRect();

            mouseRef.current = {
                x: e.clientX - rect.left,
                y: e.clientY - rect.top,
            } as Particle;
        };

        const handleMouseLeave = () => {
            mouseRef.current = { x: 0, y: 0 } as Particle;
        };

        // Initialize
        resizeCanvas();
        window.addEventListener("resize", resizeCanvas);
        if (interactive) {
            canvas.addEventListener("mousemove", handleMouseMove);
            canvas.addEventListener("mouseleave", handleMouseLeave);
        }
        draw();

        return () => {
            cancelAnimationFrame(animationId);
            window.removeEventListener("resize", resizeCanvas);
            if (interactive) {
                canvas.removeEventListener("mousemove", handleMouseMove);
                canvas.removeEventListener("mouseleave", handleMouseLeave);
            }
        };
    }, [currentTheme, particleCount, particleSize, particleSpeed, connectionRadius, interactive]);

    return (
        <canvas
            ref={canvasRef}
            aria-hidden="true"
            className="fixed left-0 top-0 -z-10 h-full w-full"
        />
    );
}

export default ParticleBackground;
