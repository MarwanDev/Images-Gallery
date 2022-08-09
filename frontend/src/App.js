import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './components/Header';
import Search from './components/Search';
function App() {
  return (
    <div className="App">
      <Header title="Images Gallery"/>
      <Search />
    </div>
  );
}

export default App;
