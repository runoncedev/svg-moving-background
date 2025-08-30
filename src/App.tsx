import "./App.css";

const items = 3;
const columns = 4;

function App() {
  return (
    <div style={{ display: "flex" }}>
      <svg style={{ border: "1px solid" }} width="240px" height="90px">
        <rect x="20" y="20" width="200" height="50" fill="pink" />

        {Array.from({ length: items }, (_, i) => (
          <g key={i} transform={`translate(40) rotate(-0)`}>
            <rect
              width="20px"
              height="120px"
              fill="transparent"
              stroke="black"
            />
            <circle
              cx="10"
              cy="90"
              r="10"
              fill="blue"
              className={`move-${i}`}
            />
            <style>
              {`
                .move-${i} {
                  animation: moveup-${i} 6s linear infinite;
                  animation-delay: ${i * 2}s;
                }

                @keyframes moveup-${i} {
                  0% {
                    transform: translateY(0);
                  }
                  100% {
                    transform: translateY(-90px);
                  }
                }
              `}
            </style>
          </g>
        ))}
      </svg>
    </div>
  );
}

export default App;
