import logo from './logo.svg';
import './App.css';
import { Provider } from 'react-redux'
import UserContainer from './container/UserContainer';
import { persistor } from './redux/store'
import store from './redux/store'
import { PersistGate } from 'redux-persist/integration/react';



function App() {
  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <div className="App">
          <UserContainer />
        </div>
      </PersistGate>
    </Provider>
  );
}

export default App;
