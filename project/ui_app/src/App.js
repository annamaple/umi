import { useState } from 'react';
import { MantineProvider, ColorSchemeProvider, ColorScheme } from '@mantine/core';
import MyNavLink from './components/MyNavLink';
import Header from './components/Header';
import './App.css';

function App() {

  const [colorScheme, setColorScheme] = useState < ColorScheme > ('light');
  const toggleColorScheme = (value
      ? : ColorScheme
  )
=>
  setColorScheme(value || (colorScheme === 'dark' ? 'light' : 'dark'));

  return (
    <ColorSchemeProvider colorScheme={colorScheme} toggleColorScheme={toggleColorScheme}>
      <MantineProvider theme={{ colorScheme }} withGlobalStyles withNormalizeCSS>
        <div className="App">
          <Header/>
          <MyNavLink/>
        </div>
      </MantineProvider>
    </ColorSchemeProvider>
  );
}

export default App;
