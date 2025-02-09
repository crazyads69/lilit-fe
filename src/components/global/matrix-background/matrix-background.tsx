"use client";
import { useTheme } from "next-themes";
import { useEffect, useRef } from "react";

function MatrixBackground() {
    const canvasRef = useRef<HTMLCanvasElement>(null);
    const { theme, resolvedTheme } = useTheme();
    const currentTheme = theme === "system" ? resolvedTheme : theme;

    useEffect(() => {
        const canvas = canvasRef.current;

        if (!canvas) return;
        const ctx = canvas.getContext("2d");

        if (!ctx) return;

        // Fixed size for characters
        const charSize = 12;
        const charSpacing = 16;

        const resizeCanvas = () => {
            canvas.width = window.innerWidth;
            canvas.height = window.innerHeight;

            // Calculate columns based on fixed character spacing
            return Math.ceil(canvas.width / charSpacing);
        };

        let columns = resizeCanvas();
        let drops = Array(columns).fill(1);

        window.addEventListener("resize", () => {
            columns = resizeCanvas();
            drops = Array(columns).fill(1);
        });

        const characters =
            "ΑΒΓΔΕΖΗΘΙΚΛΜΝΞΟΠΡΣΤΥΦΧΨΩαβγδεζηθικλμνξοπρστυφχψω∀∂∃∅∇∈∉∋∏∑−∕∗∙√∝∞∠∡∢∴∵∶∷∼∽≀≁≈≉≠≡≢≤≥≪≫⊂⊃⊄⊅⊆⊇⊈⊉⊊⊋⊕⊗⊥⋅⌈⌉⌊⌋〈〉αβγδεζηθικλμνξοπρστυφχψω";

        const draw = () => {
            if (currentTheme === "dark") {
                ctx.fillStyle = "rgba(0, 0, 0, 0.05)";
                ctx.fillRect(0, 0, canvas.width, canvas.height);
                ctx.fillStyle = "rgba(255, 255, 255, 0.7)";
            } else {
                ctx.fillStyle = "rgba(255, 255, 255, 0.05)";
                ctx.fillRect(0, 0, canvas.width, canvas.height);
                ctx.fillStyle = "rgba(0, 0, 0, 0.3)";
            }

            ctx.font = `${charSize}px monospace`;

            for (let i = 0; i < drops.length; i++) {
                const text = characters[Math.floor(Math.random() * characters.length)];

                ctx.fillText(text, i * charSpacing, drops[i] * charSpacing);

                if (drops[i] * charSpacing > canvas.height && Math.random() > 0.975) {
                    drops[i] = 0;
                }

                drops[i]++;
            }
        };

        const interval = setInterval(draw, 33);

        return () => {
            clearInterval(interval);
            window.removeEventListener("resize", resizeCanvas);
        };
    }, [currentTheme]);

    return <canvas ref={canvasRef} className="fixed left-0 top-0 -z-10 h-full w-full" />;
}

export default MatrixBackground;
