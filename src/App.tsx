const items = 4;
const columns = 5;

function App() {
  return (
    <div style={{ display: "flex" }}>
      <svg
        style={{
          border: "4px solid blue",
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
                    <path
                      d="M10,120 L12.5,125 L18,125 L14,128 L15.5,133.5 L10,131 L4.5,133.5 L6,128 L2,125 L7.5,125 Z"
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
