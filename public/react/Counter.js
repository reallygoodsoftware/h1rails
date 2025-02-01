function Counter() {
  const [count, setCount] = React.useState(0);
  
  return (
    <div>
      <h2>Count: {count}</h2>
      <button className="ui-button" onClick={() => setCount(count + 1)}>
        Increment
      </button>
    </div>
  );
}