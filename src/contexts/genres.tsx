import { createContext, ReactNode, useState } from 'react';

export interface GenreContextData {
  selectedGenreId: number;
  handleClickButton: (id: number) => void;
}

interface GenreProvider {
  children: ReactNode
}

export const GenreContext = createContext<GenreContextData>({} as GenreContextData);

export function GenreProvider(props: GenreProvider) {
  const [selectedGenreId, setSelectedGenreId] = useState(1);
  
  function handleClickButton(id: number) {
    setSelectedGenreId(id);
  }

  return (
    <GenreContext.Provider value={{selectedGenreId, handleClickButton}}>
      {props.children}
    </GenreContext.Provider>
  )
}