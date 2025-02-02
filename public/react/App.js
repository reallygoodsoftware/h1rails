function App() {
  const [data, setData] = useState({});

  useEffect(() => { setData(window.data) }, []);

  return (
    <div>
      <Time />
      <Counter />
      <div className="ui-box my-3">
        <div className="ui-titlepair">
          <div className="--title">Passing Data</div>
        </div>
        {data.users && data.users.slice(0, 10).map((user) => (
          <div key={user.id}>{user.email}</div>
        ))}
      </div>
    </div>
  );
}