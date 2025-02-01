const { useState, useEffect } = React;

function Button({ label }) {
  const [time, setTime] = useState(new Date());
  
  useEffect(() => {
    const timer = setInterval(() => {
        setTime(new Date());
    }, 1000);
    
    return () => clearInterval(timer);
  }, []);
  
  return (
    <button>
      {label} (Current time: {time.toLocaleTimeString()})
    </button>
  );
}