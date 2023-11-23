import './App.css';
import { Provider } from 'react-redux'
import store from './redux/store';
import HookCakeContainer from './components/hookCakeConatiner';

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <HookCakeContainer />
      </div>
    </Provider>
  );
}

export default App;
