import { FC } from 'react';
import './Job.scss';

interface JobProps {
    job: Job;
}

const Job: FC<JobProps> = ({ job }) => {
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
                    {/* TEMP: replace with point */}
                    -
                    <span className="contract"> {job.contract} </span>
                    -
                    <span className="location"> {job.location}</span>
                </div>
            </div>

            <hr className="separator" />

            <div className="tags">
                <span className="tag">{job.role}</span>
                <span className="tag">{job.level}</span>
                {job.languages.map((language) => (
                    <span key={language} className="tag">
                        {language}
                    </span>
                ))}
                {job.tools.map((tool) => (
                    <span key={tool} className="tag">
                        {tool}
                    </span>
                ))}
            </div>
        </div>
    );
};

export default Job;
