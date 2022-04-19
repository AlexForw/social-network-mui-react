import './App.css'
import Header from './components/Header/Header';
import Leftbar from './components/Leftbar/Leftbar';
import Main from './components/Main/Main';
import Rightbar from './components/Rightbar/Rightbar';
import { Stack } from '@mui/material';

function App() {

  return (
    <div className="App">

      <Header />
      <Stack direction="row" gap="20px" justifyContent="space-between">
        <Leftbar />
        <Main />
        <Rightbar />
      </Stack>
    </div>
  );
}

export default App;
