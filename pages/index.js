"use client";

import { useState, useMemo } from "react";

export default function HomePage() {
  const [showLove, setShowLove] = useState(false);

  // gera posições e delays aleatórios pros corações uma vez só
  const hearts = useMemo(() => {
    return Array.from({ length: 18 }).map((_, i) => ({
      id: i,
      left: Math.random() * 100,        // porcentagem da tela
      delay: Math.random() * 2,         // entre 0s e 2s
      duration: 4 + Math.random() * 2,  // entre 4s e 6s
      size: 16 + Math.random() * 20,    // px
      rotate: -20 + Math.random() * 40, // leve inclinação
    }));
  }, []);

  return (
    <>
      <main className="page">
        <section className="card">
          <h1 className="title">
            Mãe, obrigado por ser a melhor mãe do mundo!
          </h1>

          <p className="subtitle">
            Eu sou quem eu sou por causa do teu carinho. 💖
          </p>

          <button
            className="loveButton"
            onClick={() => setShowLove(true)}
          >
            Receber amor 💌
          </button>
        </section>

        {showLove && (
          <div className="heartsLayer">
            {hearts.map((h) => (
              <span
                key={h.id}
                className="heart"
                style={{
                  left: `${h.left}%`,
                  animationDelay: `${h.delay}s`,
                  animationDuration: `${h.duration}s`,
                  fontSize: `${h.size}px`,
                  transform: `rotate(${h.rotate}deg)`,
                }}
              >
                💖
              </span>
            ))}
          </div>
        )}

        <footer className="footer">
          Com amor, teu filho 🫶
        </footer>
      </main>

      {/* estilos escopados ao componente */}
      <style jsx>{`
        .page {
          position: relative;
          min-height: 100vh;

          display: flex;
          align-items: center;
          justify-content: center;
          flex-direction: column;

          text-align: center;
          padding: 2rem;

          /* fundo em degradê doce */
          background: radial-gradient(
              circle at 20% 20%,
              rgba(255, 255, 255, 0.6) 0%,
              rgba(255, 255, 255, 0) 60%
            ),
            linear-gradient(135deg, #ffd1dc 0%, #fff0f6 50%, #ffe6f2 100%);
          overflow: hidden;
          font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto,
            system-ui, sans-serif;
        }

        .card {
          background: rgba(255, 255, 255, 0.6);
          border: 1px solid rgba(255, 255, 255, 0.8);
          box-shadow: 0 30px 80px rgba(0, 0, 0, 0.15);
          backdrop-filter: blur(8px);

          border-radius: 24px;
          padding: 2rem 2rem 2.5rem;
          max-width: 480px;
          width: 100%;

          animation: pop-in 0.8s ease both;
        }

        .title {
          margin: 0 0 1rem;
          font-size: clamp(1.8rem, 2vw + 1rem, 2.2rem);
          line-height: 1.2;
          font-weight: 600;
          color: #a30053;
          text-shadow: 0 2px 4px rgba(255, 255, 255, 0.6);
        }

        .subtitle {
          margin: 0 0 2rem;
          font-size: 1rem;
          line-height: 1.5;
          color: #5a0030;
          font-weight: 500;
          opacity: 0.9;
        }

        .loveButton {
          appearance: none;
          border: 0;
          background: linear-gradient(
            135deg,
            #ff4f8a 0%,
            #ff6fa3 40%,
            #ff94bd 100%
          );
          color: #fff;
          font-size: 1rem;
          font-weight: 600;
          border-radius: 999px;
          padding: 0.9rem 1.5rem;
          cursor: pointer;
          box-shadow: 0 15px 30px rgba(255, 79, 138, 0.4),
            0 3px 8px rgba(0, 0, 0, 0.15);
          min-width: 200px;
          transition: transform 0.15s ease, box-shadow 0.15s ease;
          animation: floaty 3s ease-in-out infinite;
        }

        .loveButton:hover {
          transform: scale(1.05) translateY(-2px);
          box-shadow: 0 20px 34px rgba(255, 79, 138, 0.5),
            0 6px 10px rgba(0, 0, 0, 0.18);
        }

        .footer {
          position: absolute;
          bottom: 1.5rem;
          left: 0;
          right: 0;
          text-align: center;
          font-size: 0.9rem;
          font-weight: 600;
          color: #7a2954;
          opacity: 0.8;
          text-shadow: 0 1px 2px rgba(255, 255, 255, 0.6);
          animation: fade-in 1.5s ease both 0.6s;
          user-select: none;
        }

        .heartsLayer {
          pointer-events: none;
          position: absolute;
          inset: 0;
          overflow: hidden;
        }

        .heart {
          position: absolute;
          bottom: -3rem;
          animation-name: bubble-up;
          animation-timing-function: ease-in;
          animation-iteration-count: infinite;
          opacity: 0;
          filter: drop-shadow(0 6px 6px rgba(255, 0, 89, 0.3));
        }

        /* animações */
        @keyframes pop-in {
          0% {
            opacity: 0;
            transform: translateY(20px) scale(0.97);
          }
          100% {
            opacity: 1;
            transform: translateY(0) scale(1);
          }
        }

        @keyframes floaty {
          0%,
          100% {
            transform: translateY(0);
          }
          50% {
            transform: translateY(-6px);
          }
        }

        @keyframes fade-in {
          0% {
            opacity: 0;
            transform: translateY(10px);
          }
          100% {
            opacity: 0.8;
            transform: translateY(0);
          }
        }

        @keyframes bubble-up {
          0% {
            transform: translateY(0) scale(0.8) rotate(-6deg);
            opacity: 0;
          }
          10% {
            opacity: 1;
          }
          70% {
            opacity: 1;
          }
          100% {
            transform: translateY(-110vh) scale(1.4) rotate(6deg);
            opacity: 0;
          }
        }
      `}</style>

      {/* resetzinho leve pra body/html e bg full tela
          isso é global mas fica aqui dentro, não precisa criar globals.css */}
      <style jsx global>{`
        * {
          box-sizing: border-box;
        }
        html,
        body {
          margin: 0;
          padding: 0;
        }
      `}</style>
    </>
  );
}
