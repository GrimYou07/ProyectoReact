// logo.png is located in public/img/, reference it via absolute path so bundlers pick it from public
import './css/App.css';
import AdminView from './components/AdminVista';

function App() {
  // Por simplicidad renderizamos la vista de administrador directamente.
  // Más adelante puedes integrar react-router para varias rutas.
  return (
    <div className="App">
      <AdminView />
    </div>
  );
}

export default App;