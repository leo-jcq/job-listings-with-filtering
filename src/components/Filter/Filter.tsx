import { FC } from 'react';
import iconRemove from '../../assets/icon-remove.svg';
import './Filter.scss';

interface FilterProps {
    filter: Filter;
    removeFilter: (filter: Filter) => void;
}

/**
 * A filter
 *
 * @param {FilterProps} props the props of the component
 * @param {Filter} props.filter the filter to display
 * @param {(filter: Filter) => void} props.removeFilter the function to remove a filter
 * @return {JSX.Element}
 */
const Filter: FC<FilterProps> = ({ filter, removeFilter }: FilterProps): JSX.Element => {
    return (
        <div className="filter">
            <span className="text">{filter.name}</span>

            <button className="remove" onClick={() => removeFilter(filter)}>
                <img src={iconRemove} alt="Remove" className="img" />
            </button>
        </div>
    );
};

export default Filter;
