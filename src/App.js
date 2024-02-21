import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Home } from "./pages/home" 
import { GlobalReset } from './styled-components/global-styles/reset';
import { GlobalStyles } from './styled-components/global-styles/styles';
import { ShoppingCartPage } from './pages/shopping-cart';
import { Provider } from 'react-redux';
import { store } from './store/store';
import { WalletPage } from './pages/wallet';
import { GameInfos } from './pages/game-infos';

function App() {
  return (
    <>
      <Provider store={store}>
        <GlobalStyles />
        <GlobalReset />
        <BrowserRouter>
              <Routes>
                  <Route exact path="/" Component={Home}/>
                  <Route exact path="/shopping-cart/items" Component={ShoppingCartPage}/>
                  <Route exact path="/wallet" Component={WalletPage}/>
                  <Route exact path="/:game/game-infos" Component={GameInfos}/>
              </Routes>
        </BrowserRouter>
      </Provider>
    </>
  );
}

export default App;
