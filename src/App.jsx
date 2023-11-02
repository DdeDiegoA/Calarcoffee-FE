import { RouterProvider } from 'react-router-dom';
import { router } from './routes/routes';
import { Provider } from 'react-redux';
import combineReducers from './stores/reducers/combineReducers';

// todo: Implementar lazy loading en las imagenes con libreria https://www.npmjs.com/package/react-lazy-load-image-component
function App() {
  return (
    <Provider store={combineReducers}>
      <RouterProvider router={router} />
    </Provider>
  );
}

export default App;
