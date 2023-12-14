import './App.css'
import Router from './components/Router'
import Context from './components/Context'

function App() {
  const userInfo = {
    name: "Pooja",
    email: "Pooja@gamil.com",
    loggedIn: true,
  }

  return (
    <>
      <Context.Provider value={userInfo}>
        <Router />
      </Context.Provider>
    </>
  );
}

export default App;
