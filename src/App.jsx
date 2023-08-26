import { RouterProvider } from 'react-router-dom';
import { router } from './routes/routes';
import { Provider } from 'react-redux';
import combineReducers from './stores/reducers/combineReducers';

function App() {
  return (
    <Provider store={combineReducers}>
      <RouterProvider router={router} />
    </Provider>
  );
}

export default App;
