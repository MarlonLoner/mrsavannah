/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      colors: {
        void: "#05060c",
        carbon: "#0b1020",
        ion: "#60f4ff",
        ember: "#ff6f61",
        volt: "#c4ff4d",
        plasma: "#8f7dff",
      },
      fontFamily: {
        display: ["Sora", "Inter", "system-ui", "sans-serif"],
        body: ["Inter", "system-ui", "sans-serif"],
      },
      boxShadow: {
        glow: "0 0 40px rgba(96, 244, 255, 0.22)",
        ember: "0 0 40px rgba(255, 111, 97, 0.18)",
      },
      backgroundImage: {
        "radial-grid":
          "radial-gradient(circle at top left, rgba(96,244,255,0.22), transparent 34%), radial-gradient(circle at 78% 24%, rgba(255,111,97,0.18), transparent 28%), radial-gradient(circle at 56% 88%, rgba(196,255,77,0.12), transparent 24%)",
      },
      keyframes: {
        float: {
          "0%, 100%": { transform: "translate3d(0, 0, 0)" },
          "50%": { transform: "translate3d(0, -10px, 0)" },
        },
        scan: {
          "0%": { transform: "translateY(-100%)" },
          "100%": { transform: "translateY(100%)" },
        },
        pulseGlow: {
          "0%, 100%": { opacity: "0.45" },
          "50%": { opacity: "0.9" },
        },
      },
      animation: {
        float: "float 8s ease-in-out infinite",
        scan: "scan 7s linear infinite",
        "pulse-glow": "pulseGlow 4s ease-in-out infinite",
      },
    },
  },
  plugins: [],
};
