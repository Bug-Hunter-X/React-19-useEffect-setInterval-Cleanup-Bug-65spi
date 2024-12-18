```javascript
// In a functional component
const MyComponent = () => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    // Incorrect usage of setInterval without cleanup
    setInterval(() => {
      setCount((prevCount) => prevCount + 1);
    }, 1000); // Updates every second
  }, []);

  return <div>Count: {count}</div>;
};
```