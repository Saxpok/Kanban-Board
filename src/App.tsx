import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import { store } from './store/store';
import MainRoute from 'modules/routes/MainRoute';

import './App.css';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Provider store={store}>
          <MainRoute />
        </Provider>
      </BrowserRouter>
    </div>
  );
}

export default App;
