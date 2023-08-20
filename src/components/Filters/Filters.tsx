import { FC } from 'react';
import Filter from '../Filter/Filter';
import './Filters.scss';

interface FiltersProps {
    filters: Filter[];
    removeFilter: (filter: Filter) => void;
    clearFilters: () => void;
}

/**
 * The filters list
 *
 * @param {FiltersProps} props the props of the component
 * @param {Filter[]} props.filters the filters to display
 * @param {(filter: Filter) => void} props.removeFilter the function to remove a filter
 * @param {() => void} props.clearFilters the function to clear all the filters
 * @return {JSX.Element}
 */
const Filters: FC<FiltersProps> = ({
    filters,
    removeFilter,
    clearFilters
}: FiltersProps): JSX.Element => {
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
