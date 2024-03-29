import css from './App.module.css'
import Sidebar from "./components/Sidebar"
import NavBarSimple from './components/NavBarSimple'

function App() {
  return (
    <div className={css.App}>
      <NavBarSimple />
      {/* Add your components here */}
      <Sidebar />
    </div>
  );
}

export default App;