import { FC } from 'react';
import './Job.scss';

interface JobProps {
    job: Job;
    addFilter: (filter: Filter) => void;
}

const Job: FC<JobProps> = ({ job, addFilter }) => {
    return (
        <div className="job">
            <div className="logo">
                <img src={job.logo} alt="" className="image" />
            </div>

            <div className="infos">
                <div className="info mainInfos">
                    <span className="company">{job.company}</span>
                    {job.new && <span className="new">New!</span>}
                    {job.featured && <span className="featured">Featured</span>}
                </div>

                <span className="info position">{job.position}</span>

                <div className="info smallInfos">
                    <span className="postedAt">{job.postedAt} </span>
                    {/* TEMP: replace with point */}-
                    <span className="contract"> {job.contract} </span>-
                    <span className="location"> {job.location}</span>
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
