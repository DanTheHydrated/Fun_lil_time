import useEffect from react
import './App.css';

function App() {

  useEffect(() => {
    const timer = setTimeout(() => {
      console.log('Chang the Pic')
    }, 10000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="App">
      

    </div>
  );
}

export default App;
