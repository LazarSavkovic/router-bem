import React from 'react'
import { useThemeContext } from './ThemeProvider';

function Home() {

  const darkTheme = useThemeContext()

  return (
    <div className={`Home ${darkTheme ? 'HomeDark' : ''}`}>
      <h1 className='HomeTitle'>HOME</h1>

    </div>
  );
}

export default Home;