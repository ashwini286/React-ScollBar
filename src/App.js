
import { useState } from 'react';
import './App.css';
import Search from './Componantes/Atoms/Search';
import SearchResult from './Componantes/Atoms/SearchResult';
function App() {
  const [results , setResults] = useState([])
  return (
    <div className="App">
      <header className="App-header">
      <Search setResults={setResults}/>
      <SearchResult results = {results} />
      </header>
    </div>
  );
}

export default App;
