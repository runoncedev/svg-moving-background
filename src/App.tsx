import "./App.css";

const items = 4;
const columns = 5;

function App() {
  return (
    <div style={{ display: "flex" }}>
      <svg
        style={{
          border: "4px solid",
          transition: "background 0.3s",
          borderRadius: "10px",
          cursor: "pointer",
        }}
        width="200px"
        height="50px"
      >
        <rect x="0" y="0" width="200" height="50" fill="transparent" />
        <g transform="translate(-40)">
          {Array.from({ length: columns }).map((_, column) => (
            <g key={column} transform={`translate(${column * 50})`}>
              {Array.from({ length: items }, (_, item) => {
                const key = `${column}-${item}`;

                const animationDelay = item * 1.25 + column * 1.875;
                const animationDuration = 5;

                return (
                  <g key={key} transform="rotate(-45)">
                    <rect
                      width="20px"
                      height="120px"
                      fill="transparent"
                      stroke="transparent"
                    />
                    <circle
                      cx="10"
                      cy="130"
                      r="10"
                      fill="white"
                      className={`move-${key}`}
                    />
                    <style>
                      {`
                  .move-${key} {
                    animation: moveup-${key} ${animationDuration}s linear infinite;
                    animation-delay: ${animationDelay}s;
                  }
  
                  @keyframes moveup-${key} {
                    0% {
                      transform: translateY(130px);
                    }
                    100% {
                      transform: translateY(-130px);
                    }
                  }
                `}
                    </style>
                  </g>
                );
              })}
            </g>
          ))}
        </g>
      </svg>
    </div>
  );
}

export default App;
