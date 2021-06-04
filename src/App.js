import { useState } from 'react';
import Header from './components/Header';
import MainContent from './components/MainContent';
import Footer from './components/Footer';

const App = () => {
  const [animeList, SetAnimeList] = useState([]);
  const [search, SetSearch] = useState('');

  const HandleSearch = e => {
    e.preventDefault();

    FetchAnime(search);
  };

  const FetchAnime = async query => {
    const temp = await fetch(
      `https://api.jikan.moe/v3/search/anime?q=${query}&order_by=title&sort=asc&limit=10`
    ).then(res => res.json());

    SetAnimeList(temp.results);
  };

  return (
    <div className='app'>
      <main className='app-container'>
        <Header />
        <div className='content-wrap'>
          <MainContent
            HandleSearch={HandleSearch}
            search={search}
            SetSearch={SetSearch}
            animeList={animeList}
          />
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default App;
