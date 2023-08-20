import { FC, useMemo, useState } from 'react';
import './App.scss';
import data from './assets/data.json';
import Filters from './components/Filters/Filters';
import Header from './components/Header/Header';
import Job from './components/Job/Job';

const App: FC = () => {
    const [filters, setFilters] = useState<Filter[]>([]);

    const hasFilters = useMemo(() => filters.length > 0, [filters]);

    const addFilter = (filter: Filter) => {
        // if is not present
        if (!filters.includes(filter)) {
            // add the filter
            setFilters((prevFilters) => [...prevFilters, filter]);
        }
    };

    const removeFilter = (filter: Filter) =>
        setFilters((prevFilters) =>
            prevFilters.filter((prevFilter) => prevFilter.name !== filter.name)
        );

    const clearFilters = () => setFilters([]);

    const displayedJobs: Job[] = useMemo(() => {
        if (filters.length === 0) {
            return data;
        }

        return data.filter((job: Job) =>
            filters.every(({ type, name }) => {
                switch (type) {
                    case 'role':
                        return job.role === name;
                    case 'level':
                        return job.level === name;
                    case 'language':
                        return job.languages.includes(name);
                    case 'tool':
                        return job.tools.includes(name);
                    default:
                        return true;
                }
            })
        );
    }, [filters]);

    return (
        <div className={`app${hasFilters ? ' hasFilters' : ''}`}>
            <Header />

            <div className="content">
                {hasFilters && (
                    <Filters
                        filters={filters}
                        removeFilter={removeFilter}
                        clearFilters={clearFilters}
                    />
                )}

                <div className="jobs">
                    {displayedJobs.map((job) => (
                        <Job key={job.id} job={job} addFilter={addFilter}></Job>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default App;
