const { useState, useEffect } = React;

function Time({ label }) {
  const [time, setTime] = useState(new Date());
  
  useEffect(() => {
    const timer = setInterval(() => {
        setTime(new Date());
    }, 1000);
    
    return () => clearInterval(timer);
  }, []);
  
  return (
    <div className="ui-box my-3">
      <div className="ui-titlepair">
        <div className="--title">Time</div>
      </div>
      <button>
        {label} (Current time: {time.toLocaleTimeString()})
      </button>
    </div>
  );
}