import "./App.css";

const items = 4;
const columns = 5;

function App() {
  return (
    <div style={{ display: "flex" }}>
      <svg width="240px" height="90px">
        <rect x="20" y="20" width="200" height="50" fill="#f0f0f0" />
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
                      fill="#242424"
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
