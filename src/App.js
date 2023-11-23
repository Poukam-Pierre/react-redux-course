import logo from './logo.svg';
import './App.css';
import { Provider } from 'react-redux'
import UserContainer from './container/UserContainer';
import store from './redux/store'

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <UserContainer />
      </div>
    </Provider>
  );
}

export default App;
