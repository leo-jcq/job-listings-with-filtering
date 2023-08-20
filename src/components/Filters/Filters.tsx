import { FC } from 'react';
import Filter from '../Filter/Filter';
import './Filters.scss';

interface FiltersProps {
    filters: Filter[];
    removeFilter: (filter: Filter) => void;
    clearFilters: () => void;
}

const Filters: FC<FiltersProps> = ({ filters, removeFilter, clearFilters }) => {
    return (
        <div className="filters">
            <div className="list">
                {filters.map((filter) => (
                    <Filter key={filter.name} filter={filter} removeFilter={removeFilter} />
                ))}
            </div>

            <button className="clear" onClick={clearFilters}>
                Clear
            </button>
        </div>
    );
};

export default Filters;
