import React, { useState } from 'react';


const LabForm = () => {
    // define state variables
    const [category, setCategory] = useState('');
    const [summary, setSummary] = useState('');
    const [file, setFile] = useState(null);


    // handle form submission 
    const onSubmit = (event) => {
        // prevent an empty form from being submitted
        event.preventDefault();
        // return error msg if either category or summary are left empty
        if (!category || !summary) {
            alert('Please fill in all required fields: Category and Summary.');
            return;
        }

        // when user submits form, direct them to successful ticket page
        window.location.href = '/ticket-created';

    };

    // category choices
    const categoryOptions = [
        { value: 'building-hazard', label: 'Building Hazard' },
        { value: 'hardware', label: 'Hardware' },
        { value: 'power', label: 'Power' },
        { value: 'other', label: 'Other' }, 
    ];

    // handle category change
    const handleCategoryChange = (event) => {
        const selectedCategory = event.target.value;

        setCategory(selectedCategory);

    };

    // handle summary change
    const handleSummaryChange = (event) => {
        // summary input max 5000 characters
        if (event.target.value.length <= 5000) {
            setSummary(event.target.value);
        }
    };

    // handle file upload change
    const handleFileChange = (event) => {
        // only allow a single file to be uploaded
        setFile(event.target.files[0]);
    };

    return (
        <div className="flex justify-center items-center min-h-[70vh] bg-white">
            <div className="card shrink-0 w-full max-w-screen-lg shadow-2xl bg-base-100">
                {/* heading for page */}
                <h3 className="card-title text-center pt-7 pl-10">Report Lab Issue</h3>
                {/* when submitting form, call onSubmit function to process the form */}
                <form className="card-body p-8" onSubmit={onSubmit}>
                    <div className="form-control">
                        {/* choose category option */}
                        <span className="label-text block pb-0.5 pl-1"> Category: </span>
                        <select className="select select-bordered w-full " name="lab-ticket-category" id="lab-ticket-category" value={category} onChange={handleCategoryChange} required>
                            <option value="" disabled>Select category...</option>
                            {categoryOptions.map(option => (
                                <option key={option.value} value={option.value}>{option.label}</option>
                            ))}
                        </select>
                    </div>
                    <div className="form-control">
                        {/* enter summary of lab issue */}
                        <span className="label-text block pb-0.5 pl-1"> Summary: </span>
                        <textarea className="textarea textarea-bordered w-full" placeholder="Summary..." value={summary} onChange={handleSummaryChange} maxLength={5000} required></textarea>
                        <small className="text-gray-600 pl-1">{summary.length}/5000 characters</small>
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

export default LabForm;
