import './App.css';
import Footer from './Footer';
import Header from './Header';
import RunLogs from './RunLogs';
import Weather from './Weather';
import { supabase } from './supabaseClient'

function App() {
  return (
    <>
    <Header />
    <Weather />
    <RunLogs />
    <Footer />
    </>
  );
}

export default App;