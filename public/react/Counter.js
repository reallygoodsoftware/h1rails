function Counter() {
  const [count, setCount] = React.useState(0);
  
  return (
    <div className="ui-box my-3">
      <div className="ui-titlepair">
        <div className="--title">Counter</div>
      </div>
      <div>Count: {count}</div>
      <button className="ui-button" onClick={() => setCount(count + 1)}>
        Increment
      </button>
    </div>
  );
}