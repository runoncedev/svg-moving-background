import './App.css';

const items = 3;
const columns = 4;

function App() {
  return (
    <div style={{ display: 'flex' }}>
      <svg style={{ border: '1px solid' }} width="240px" height="90px">
        <rect x="20" y="20" width="200" height="50" fill="pink" />

        <g transform="translate(50 0) rotate(-0)">
          <rect width="20px" height="120px" fill="transparent" stroke="black" />
          <circle cx="10" cy="90" r="10" fill="blue" className="move" />
        </g>
      </svg>
      <style>{`
        .move {
          animation: moveUp 1s infinite;
        }

        @keyframes moveUp {
          0% {
            transform: translateY(0px);
          }
          100% {
            transform: translateY(-90px);
          }
        }
    `}</style>
    </div>
  );
}

export default App;
