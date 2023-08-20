import { FC } from 'react';
import './Job.scss';

interface JobProps {
    job: Job;
    addFilter: (filter: Filter) => void;
}

/**
 * A job
 *
 * @param {JobProps} props the props of the component
 * @param {Job} props.job the job to display
 * @param {(filter: Filter) => void} props.addFilter the function to add a filter
 * @return {JSX.Element}
 */
const Job: FC<JobProps> = ({ job, addFilter }: JobProps): JSX.Element => {
    return (
        <div className={`job${job.featured ? ' featured' : ''}`}>
            <div className="left">
                <div className="logo">
                    <img src={job.logo} alt="" className="image" />
                </div>

                <div className="infos">
                    <div className="info mainInfos">
                        <span className="company">{job.company}</span>
                        {job.new && <span className="new">New!</span>}
                        {job.featured && <span className="featured">Featured</span>}
                    </div>

                    <a href="#" className="info position">
                        {job.position}
                    </a>

                    <div className="info smallInfos">
                        <span className="postedAt">{job.postedAt} </span>·
                        <span className="contract"> {job.contract} </span>·
                        <span className="location"> {job.location}</span>
                    </div>
                </div>
            </div>

            <hr className="separator" />

            <div className="tags">
                <span className="tag" onClick={() => addFilter({ name: job.role, type: 'role' })}>
                    {job.role}
                </span>
                <span className="tag" onClick={() => addFilter({ name: job.level, type: 'level' })}>
                    {job.level}
                </span>
                {job.languages.map((language) => (
                    <span
                        key={language}
                        className="tag"
                        onClick={() => addFilter({ name: language, type: 'language' })}>
                        {language}
                    </span>
                ))}
                {job.tools.map((tool) => (
                    <span
                        key={tool}
                        className="tag"
                        onClick={() => addFilter({ name: tool, type: 'tool' })}>
                        {tool}
                    </span>
                ))}
            </div>
        </div>
    );
};

export default Job;
