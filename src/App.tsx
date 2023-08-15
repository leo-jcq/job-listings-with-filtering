import { FC } from 'react';
import './App.scss';
import data from './assets/data.json';
import Header from './components/Header/Header';
import Job from './components/Job/Job';

const App: FC = () => {
    return (
        <div className="app">
            <Header />

            <div className="jobs">
                {data.map((job: Job) => (
                    <Job key={job.id} job={job}></Job>
                ))}
            </div>
        </div>
    );
};

export default App;
