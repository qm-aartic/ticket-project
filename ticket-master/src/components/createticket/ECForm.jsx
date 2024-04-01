import React, { useState } from 'react';

const ECForm = () => {
    // define state variables
    const [selectedOption, setSelectedOption] = useState('');
    const [reason, setReason] = useState('');
    const [summary, setSummary] = useState('');
    const [affectedModules, setAffectedModules] = useState([]);
    const [affectedAssessments, setAffectedAssessments] = useState([]);
    const [file, setFile] = useState(null);

    // handle form submission 
    const handleSubmit = (event) => {
        // prevent an empty form from being submitted
        event.preventDefault();
        // return error msg if either category or summary are left empty
        if (!selectedOption || !reason || !summary || affectedModules.length === 0 || affectedAssessments.length === 0) {
            alert('Please fill in all required fields.');
            return;
        }

        // when user submits form, direct them to successful ticket page
        window.location.href = '/ticket-created';
    };

    // affected modules options
    const affectedModulesList = [
        { value: 'ECS518U', label: 'ECS518U: Operating Systems' },
        { value: 'ECS506U', label: 'ECS506U: Software Engineering Project' },
        { value: 'ECS522U', label: 'ECS522U: Graphical User Interfaces' },
        { value: 'ECS524U', label: 'ECS524U: Internet Protocols and Applications' },
    ];

    // affected assessments options
    const affectedAssessmentsOptions = {
        ECS518U: ['Lab1', 'Lab2', 'Lab3', 'Lab4', 'Lab5', 'Lab6', 'Lab7', 'Lab8', 'MCQ1', 'MCQ2', 'Final Exam'],
        ECS506U: ['Domain Analysis Report', 'Domain Analysis Presentation', 'Requirements Report', 'Requirements Presentation', 'Design Report', 'Prototype Report', 'Prototype Presentation'],
        ECS522U: ['Assignment1', 'Assignment2', 'Assignment3', 'Final Exam'],
        ECS524U: ['Coursework1', 'Coursework2', 'Coursework3', 'Coursework4', 'Final Exam'],
    };

     // ec reasons choices
     const ECReasons = [
        { value: 'severe-illness-acute', label: 'Severe illness/medical reasons: acute episode' },
        { value: 'minor-illness-acute', label: 'Minor illness/medical reasons: acute episode' },
        { value: 'severe-illness-chronic', label: 'Severe illness/medical reasons: chronic episode' },
        { value: 'minor-illness-chronic', label: 'Minor illness/medical reasons: chronic episode' },
        { value: 'bereavement', label: 'Bereavement' },
        { value: 'other', label: 'Other' }, 
    ];

    // handle reason change
    const handleReasonChange = (event) => {
        setReason(event.target.value);
    };

    // handle summary change
    const handleSummaryChange = (event) => {
        setSummary(event.target.value);
    };

    // handle module checkbox change
    const handleModuleChange = (event) => {
        const { value, checked } = event.target;
        if (checked) {
            setAffectedModules([...affectedModules, value]);
        } else {
            setAffectedModules(affectedModules.filter((module) => module !== value));
        }
    };

    // handle assessment checkbox change
    const handleAssessmentChange = (event) => {
        const { value, checked } = event.target;
        let updatedAssessments = [...affectedAssessments];
        if (checked) {
            updatedAssessments.push(value);
        } else {
            updatedAssessments = updatedAssessments.filter((assessment) => assessment !== value);
        }
        setAffectedAssessments(updatedAssessments);
    };

    // handle file upload change
    const handleFileChange = (event) => {
        // only allow a single file to be uploaded
        setFile(event.target.files[0]);
    };

    return (
        <div className="flex justify-center items-center min-h-screen bg-white pt-12">
            <div className="card shrink-0 w-full max-w-screen-lg shadow-2xl bg-base-100">
                {/* heading for page */}
                <h3 className="card-title text-center pt-7 pl-10">Submit EC Claim</h3>
                {/* when submitting form, call handleSubmit function to process the form */}
                <form className="card-body p-8" onSubmit={handleSubmit}>

                    <div className="flex">
                        <div className="form-control mr-4">
                            <label className="label cursor-pointer flex items-center">
                                <input type="radio" name="radio-10" className="radio checked:bg-primary" checked />
                                <span className="label-text pl-1">Standard EC</span> 
                            </label>
                        </div>
                        <div className="form-control">
                            <label className="label cursor-pointer flex items-center pl-5">
                                <input type="radio" name="radio-10" className="radio checked:bg-primary" />
                                <span className="label-text pl-2">Urgent EC</span> 
                            </label>
                        </div>
                    </div>
                    <div className="form-control">
                        {/* choose category option */}
                        <span className="label-text block pb-0.5 pl-1"> EC Reason: </span>
                        <select className="select select-bordered w-full " name="ec-ticket-reason" id="ec-ticket-reason" value={reason} onChange={handleReasonChange} required>
                            <option value="" disabled>Select reason...</option>
                            {ECReasons.map(ECReason => (
                                <option key={ECReason.value} value={ECReason.value}>{ECReason.label}</option>
                            ))}
                        </select>
                    </div>
                    <div className="form-control">
                        {/* enter summary of lab issue */}
                        <span className="label-text block pb-0.5 pl-1"> Summary: </span>
                        <textarea className="textarea textarea-bordered w-full" placeholder="Summary..." value={summary} onChange={handleSummaryChange} maxLength={5000} required></textarea>
                        <small className="text-gray-600 pl-1">{summary.length}/5000 characters</small>
                    </div>
                    {/* choose affected modules */}
                    <div className="form-control flex items-start">
                        <span className="label-text block pl-1 text-base">Affected Module(s):</span>
                        {affectedModulesList.map(module => (
                            <label key={module.value} className="label cursor-pointer flex items-center">
                                <input
                                    type="checkbox"
                                    name="affectedModules"
                                    value={module.value}
                                    onChange={handleModuleChange}
                                    className="checkbox text-primary"
                                />
                                <span className="text-base pl-2">{module.label}</span>
                            </label>
                        ))}
                    </div>

                    {/* based on affected modules, allow user to choose affected assessments */}
                    <div id="affected-assessments" className="form-control flex items-start">
                        <span className="label-text block pl-1 text-base">Affected Assessment(s):</span>
                        {affectedModules.map((module) => (
                            <div key={module}>
                                {module in affectedAssessmentsOptions && (
                                    <>
                                        {affectedAssessmentsOptions[module].map((assessment) => (
                                            <label key={assessment} className="label cursor-pointer flex items-center">
                                                <input
                                                    type="checkbox"
                                                    name="affectedAssessments"
                                                    value={assessment}
                                                    onChange={handleAssessmentChange}
                                                    className="checkbox text-primary"
                                                />
                                                <span className="text-base">{module}: {assessment}</span>
                                            </label>
                                        ))}
                                        <br />
                                    </>
                                )}
                            </div>
                        ))}
                    </div>
                    <div className="form-control">
                        {/* user can attach evidence if needed */}
                        <span className="label-text block pb-0.5 pl-1"> Attach evidence (optional): </span>
                        <input type="file" className="file-input file-input-bordered file-input-md w-full max-w-xs" accept=".pdf,.doc,.docx,.jpg,.jpeg,.png" onChange={handleFileChange} />
                        <small className="text-gray-600">Accepted file types: PDF, Word, JPEG, PNG.</small>
                    </div>
                    {/* Submit button */}
                    <button type="submit" className="btn btn-primary mt-4 text-white">Submit</button>
                </form>
            </div>
        </div>
);
};

export default ECForm;