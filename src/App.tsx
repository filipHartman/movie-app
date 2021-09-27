import './App.css';
import { HomePage } from './pages/Home/Home';
import ErrorBoundary from './shared/Error/ErrorBoundary';

function App() {
  return (
    <ErrorBoundary>
      <HomePage />
    </ErrorBoundary>
  );
}

export default App;
