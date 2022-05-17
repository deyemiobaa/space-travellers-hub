import Missions from '../components_/missions/missions';
import './App.css';
import { Provider } from 'react-redux';

function App() {
  return (
    <Provider store={store}>
      <Missions />
    </Provider>
  );
}

export default App;
