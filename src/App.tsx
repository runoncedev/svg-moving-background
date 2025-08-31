const items = 4;
const columns = 5;

function App() {
  return (
    <button
      style={{
        display: "flex",
        padding: "10px 20px",
        width: "200px",
        position: "relative",
        justifyContent: "center",
        alignItems: "center",
        overflow: "hidden",
        backgroundColor: "white",
        borderRadius: "10px",
        border: "4px solid blue",
        fontWeight: "bold",
        textTransform: "uppercase",
        letterSpacing: "0.1em",
      }}
    >
      <svg
        style={{
          // border: "4px solid blue",
          borderRadius: "10px",
          cursor: "pointer",
          position: "absolute",
          top: 0,
          left: 0,
          bottom: 0,
          right: 0,
          // display: "none",
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
                      d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z"
                      fill="white"
                      className={`move-${key}`}
                    />
                    <style>
                      {`
                  .move-${key} {
                    transform-box: fill-box;
                    transform-origin: center;
                    animation: moveup-${key} ${animationDuration}s linear infinite;
                    animation-delay: ${animationDelay}s;
                  }
  
                  @keyframes moveup-${key} {
                    0% {
                      transform: translateY(130px) rotate(0deg);
                    }
                    100% {
                      transform: translateY(-130px) rotate(360deg);
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
      <span style={{ zIndex: 1000 }}>Button</span>
    </button>
  );
}

export default App;
