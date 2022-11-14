import { React, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { Routes, Route } from 'react-router-dom';
import './App.css';
import Footer from './components/Footer';
import Navigation from './components/Navigation';
import HomePage from './pages/HomePage';
import ToolkitPage from './pages/ToolkitPage';
import FavoritesPage from './pages/FavoritesPage';
import FeedbackPage from './pages/FeedbackPage';
import { fetchResources } from './features/Resources/ResourcesSlice';
import { fetchNotes } from './features/notes/notesSlice';

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchResources());
    dispatch(fetchNotes());
}, [dispatch]);

  return (
    <div className="App">
      <Navigation />
      <Routes>
        <Route path='/' element={<HomePage />} />
        <Route path='/toolkit' element={<ToolkitPage />} />
        <Route path='/Favorites' element={<FavoritesPage />} />
        <Route path='/Feedback' element={<FeedbackPage />} />
      </Routes>
      <Footer />
    </div>
  );
};

export default App;
