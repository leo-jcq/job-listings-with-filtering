import { FC } from 'react';
import iconRemove from '../../assets/icon-remove.svg';
import './Filter.scss';

interface FilterProps {
    filter: Filter;
    removeFilter: (filter: Filter) => void;
}

const Filter: FC<FilterProps> = ({ filter, removeFilter }) => {
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
