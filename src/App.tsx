import { Provider } from 'react-redux';
import Layout from "./components/layout";
import { store } from './store';

export default function App() {
  return (
    <Provider store={store}>
      <Layout>

      </Layout>
    </Provider>
  )
}