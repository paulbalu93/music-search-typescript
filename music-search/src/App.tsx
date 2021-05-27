import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom'
import SearchPage from './components/SearchPage'
import MusicDetail from './components/MusicDetail'
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

function App() {
  return (
    <BrowserRouter>
      <Route exact path="/" component={SearchPage} />
      <Route path="/:jobId" component={MusicDetail} />
    </BrowserRouter>
  );
}

export default App;
