import "./App.css";

const items = 4;
const columns = 5;

function App() {
  return (
    <div style={{ display: "flex" }}>
      <svg style={{ border: "1px solid" }} width="240px" height="90px">
        <rect x="20" y="20" width="200" height="50" fill="pink" />
        <g transform="translate(-40)">
          {Array.from({ length: columns }).map((_, column) => (
            <g key={column} transform={`translate(${column * 50})`}>
              {Array.from({ length: items }, (_, item) => (
                <g key={column + item} transform="rotate(-45)">
                  <rect
                    width="20px"
                    height="120px"
                    fill="transparent"
                    stroke="transparent"
                  />
                  <circle
                    cx="10"
                    cy="90"
                    r="10"
                    fill="blue"
                    className={`move-${column}${item}`}
                  />
                  <style>
                    {`
                  .move-${column}${item} {
                    animation: moveup-${column}${item} 6s linear infinite;
                    animation-delay: ${item * 2 + column * 1.25}s;
                  }
  
                  @keyframes moveup-${column}${item} {
                    0% {
                      transform: translateY(90px);
                    }
                    100% {
                      transform: translateY(-90px);
                    }
                  }
                `}
                  </style>
                </g>
              ))}
            </g>
          ))}
        </g>
      </svg>
    </div>
  );
}

export default App;
