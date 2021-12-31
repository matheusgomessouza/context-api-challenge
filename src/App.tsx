import { SideBar } from './components/SideBar';
import { Content } from './components/Content';

import './styles/global.scss';

import './styles/sidebar.scss';
import './styles/content.scss';
import { GenreContext, GenreProvider } from './contexts/genres';
import { useContext, useEffect } from 'react';

export function App() {
  const { selectedGenreId } = useContext(GenreContext);
  useEffect(() => {
    console.log(selectedGenreId);
  }, []);

  return (
    <div style={{ display: 'flex', flexDirection: 'row' }}>
      <GenreProvider>
        <SideBar />
        <Content />
      </GenreProvider>
    </div>
  )
}