import Form from './Form'
import React from 'react';
import store from './redux/Store'
import { Provider } from 'react-redux'
import ShowForm from './ShowForm';

function App() {
  return (
    <Provider store={store}>
        <Form />
        <ShowForm />
    </Provider>
  );
}

export default App;

