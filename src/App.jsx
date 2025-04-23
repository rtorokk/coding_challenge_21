import { useState, useEffect } from 'react';
import './App.css';
import Gallery from './components/Gallery'; // Import the Gallery component

const API_URL = 'https://course-api.com/react-tours-project'; // API endpoint for fetching tours

function App() {
  // State variables to manage tours, loading state, and error messages
  const [tours, setTours] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // Function to fetch tours from the API
  const fetchTours = async () => {
    setLoading(true); // Set loading to true while fetching data
    setError(null); // Reset error state
    try {
      // Fetch data using the AllOrigins proxy to bypass CORS restrictions
      const response = await fetch(
        'https://api.allorigins.win/raw?url=https://course-api.com/react-tours-project'
      );
      if (!response.ok) {
        throw new Error('Failed to fetch tours'); // Throw an error if the response is not OK
      }
      const data = await response.json(); // Parse the JSON response
      setTours(data); // Update the tours state with the fetched data
    } catch (err) {
      setError(err.message); // Set the error message if an error occurs
    } finally {
      setLoading(false); // Set loading to false after fetching is complete
    }
  };

  // useEffect to fetch tours when the component mounts
  useEffect(() => {
    fetchTours();
  }, []);

  // Function to remove a tour by its ID
  const removeTour = (id) => {
    setTours(tours.filter((tour) => tour.id !== id)); // Filter out the tour with the given ID
  };

  // Render loading message if data is still being fetched
  if (loading) {
    return <h2>Loading...</h2>;
  }

  // Render error message if an error occurred during fetching
  if (error) {
    return <h2>Error: {error}</h2>;
  }

  // Render a message and refresh button if no tours are left
  if (tours.length === 0) {
    return (
      <div className="app">
        <h2>No Tours Left</h2>
        <button className="refresh-btn" onClick={fetchTours}>
          Refresh
        </button>
      </div>
    );
  }

  // Render the main app with the Gallery component
  return (
    <div className="app">
      <h1>Tours</h1>
      <Gallery tours={tours} onRemove={removeTour} />
    </div>
  );
}

export default App;
