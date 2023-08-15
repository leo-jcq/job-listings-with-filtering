import { FC } from 'react';
import './App.scss';
import Header from './components/Header/Header';

const App: FC = () => {
    return (
        <div className="app">
            <Header />
        </div>
    );
};

export default App;
