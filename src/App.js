import './App.css';
import { Provider } from 'react-redux'
import store from './redux/store';
// import HookCakeContainer from './components/hookCakeConatiner';
import HookIcecreamContainer from './components/hookIcecreamContainer';

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <HookIcecreamContainer />
      </div>
    </Provider>
  );
}

export default App;
