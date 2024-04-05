// import React, { useState } from 'react';

// const ECForm = () => {
//     // define state variables
//     const [selectedOption, setSelectedOption] = useState('');
//     const [reason, setReason] = useState('');
//     const [summary, setSummary] = useState('');
//     const [affectedModules, setAffectedModules] = useState([]);
//     const [affectedAssessments, setAffectedAssessments] = useState([]);
//     const [file, setFile] = useState(null);

//     // handle form submission 
//     const handleSubmit = (event) => {
//         // prevent an empty form from being submitted
//         event.preventDefault();
//         // return error msg if either category or summary are left empty
//         if (!selectedOption || !reason || !summary || affectedModules.length === 0 || affectedAssessments.length === 0) {
//             alert('Please fill in all required fields.');
//             return;
//         }

//         // when user submits form, direct them to successful ticket page
//         window.location.href = '/ticket-created';
//     };

//     // affected modules options
//     const affectedModulesList = [
//         { value: 'ECS518U', label: 'ECS518U: Operating Systems' },
//         { value: 'ECS506U', label: 'ECS506U: Software Engineering Project' },
//         { value: 'ECS522U', label: 'ECS522U: Graphical User Interfaces' },
//         { value: 'ECS524U', label: 'ECS524U: Internet Protocols and Applications' },
//     ];

//     // affected assessments options
//     const affectedAssessmentsOptions = {
//         ECS518U: ['Lab1', 'Lab2', 'Lab3', 'Lab4', 'Lab5', 'Lab6', 'Lab7', 'Lab8', 'MCQ1', 'MCQ2', 'Final Exam'],
//         ECS506U: ['Domain Analysis Report', 'Domain Analysis Presentation', 'Requirements Report', 'Requirements Presentation', 'Design Report', 'Prototype Report', 'Prototype Presentation'],
//         ECS522U: ['Assignment1', 'Assignment2', 'Assignment3', 'Final Exam'],
//         ECS524U: ['Coursework1', 'Coursework2', 'Coursework3', 'Coursework4', 'Final Exam'],
//     };

//      // ec reasons choices
//      const ECReasons = [
//         { value: 'severe-illness-acute', label: 'Severe illness/medical reasons: acute episode' },
//         { value: 'minor-illness-acute', label: 'Minor illness/medical reasons: acute episode' },
//         { value: 'severe-illness-chronic', label: 'Severe illness/medical reasons: chronic episode' },
//         { value: 'minor-illness-chronic', label: 'Minor illness/medical reasons: chronic episode' },
//         { value: 'bereavement', label: 'Bereavement' },
//         { value: 'other', label: 'Other' }, 
//     ];

//     // handle reason change
//     const handleReasonChange = (event) => {
//         setReason(event.target.value);
//     };

//     // handle summary change
//     const handleSummaryChange = (event) => {
//         setSummary(event.target.value);
//     };

//     // handle module checkbox change
//     const handleModuleChange = (event) => {
//         const { value, checked } = event.target;
//         if (checked) {
//             setAffectedModules([...affectedModules, value]);
//         } else {
//             setAffectedModules(affectedModules.filter((module) => module !== value));
//         }
//     };

//     // handle assessment checkbox change
//     const handleAssessmentChange = (event) => {
//         const { value, checked } = event.target;
//         let updatedAssessments = [...affectedAssessments];
//         if (checked) {
//             updatedAssessments.push(value);
//         } else {
//             updatedAssessments = updatedAssessments.filter((assessment) => assessment !== value);
//         }
//         setAffectedAssessments(updatedAssessments);
//     };

//     // handle file upload change
//     const handleFileChange = (event) => {
//         // only allow a single file to be uploaded
//         setFile(event.target.files[0]);
//     };

//     return (
//         <div className="flex justify-center items-center min-h-screen bg-white ">
//             <div className="card shrink-0 w-full max-w-screen-lg shadow-2xl bg-base-100">
//                 {/* heading for page */}
//                 <h3 className="card-title text-center pt-7 pl-10">Submit EC Claim</h3>
//                 {/* when submitting form, call handleSubmit function to process the form */}
//                 <form className="card-body p-8" onSubmit={handleSubmit}>

//                     <div className="flex">
//                         <div className="form-control mr-4">
//                             <label className="label cursor-pointer flex items-center">
//                                 <input type="radio" name="radio-10" className="radio checked:bg-primary" checked />
//                                 <span className="label-text pl-1">Standard EC</span> 
//                             </label>
//                         </div>
//                         <div className="form-control">
//                             <label className="label cursor-pointer flex items-center pl-5">
//                                 <input type="radio" name="radio-10" className="radio checked:bg-primary" />
//                                 <span className="label-text pl-2">Urgent EC</span> 
//                             </label>
//                         </div>
//                     </div>
//                     <div className="form-control">
//                         {/* choose category option */}
//                         <span className="label-text block pb-0.5 pl-1"> EC Reason: </span>
//                         <select className="select select-bordered w-full " name="ec-ticket-reason" id="ec-ticket-reason" value={reason} onChange={handleReasonChange} required>
//                             <option value="" disabled>Select reason...</option>
//                             {ECReasons.map(ECReason => (
//                                 <option key={ECReason.value} value={ECReason.value}>{ECReason.label}</option>
//                             ))}
//                         </select>
//                     </div>
//                     <div className="form-control">
//                         {/* enter summary of lab issue */}
//                         <span className="label-text block pb-0.5 pl-1"> Summary: </span>
//                         <textarea className="textarea textarea-bordered w-full" placeholder="Summary..." value={summary} onChange={handleSummaryChange} maxLength={5000} required></textarea>
//                         <small className="text-gray-600 pl-1">{summary.length}/5000 characters</small>
//                     </div>
//                     {/* choose affected modules */}
//                     <div className="form-control flex items-start">
//                         <span className="label-text block pl-1 text-base">Affected Module(s):</span>
//                         {affectedModulesList.map(module => (
//                             <label key={module.value} className="label cursor-pointer flex items-center">
//                                 <input
//                                     type="checkbox"
//                                     name="affectedModules"
//                                     value={module.value}
//                                     onChange={handleModuleChange}
//                                     className="checkbox text-primary"
//                                 />
//                                 <span className="text-base pl-2">{module.label}</span>
//                             </label>
//                         ))}
//                     </div>

//                     {/* based on affected modules, allow user to choose affected assessments */}
//                     <div id="affected-assessments" className="form-control flex items-start">
//                         <span className="label-text block pl-1 text-base">Affected Assessment(s):</span>
//                         {affectedModules.map((module) => (
//                             <div key={module}>
//                                 {module in affectedAssessmentsOptions && (
//                                     <>
//                                         {affectedAssessmentsOptions[module].map((assessment) => (
//                                             <label key={assessment} className="label cursor-pointer flex items-center">
//                                                 <input
//                                                     type="checkbox"
//                                                     name="affectedAssessments"
//                                                     value={assessment}
//                                                     onChange={handleAssessmentChange}
//                                                     className="checkbox text-primary"
//                                                 />
//                                                 <span className="text-base">{module}: {assessment}</span>
//                                             </label>
//                                         ))}
//                                         <br />
//                                     </>
//                                 )}
//                             </div>
//                         ))}
//                     </div>
//                     <div className="form-control">
//                         {/* user can attach evidence if needed */}
//                         <span className="label-text block pb-0.5 pl-1"> Attach evidence (optional): </span>
//                         <input type="file" className="file-input file-input-bordered file-input-md w-full max-w-xs" accept=".pdf,.doc,.docx,.jpg,.jpeg,.png" onChange={handleFileChange} />
//                         <small className="text-gray-600">Accepted file types: PDF, Word, JPEG, PNG.</small>
//                     </div>
//                     {/* Submit button */}
//                     <button type="submit" className="btn btn-primary mt-4 text-white">Submit</button>
//                 </form>
//             </div>
//         </div>
// );
// };

// export default ECForm;


// original EC form is above 


import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import axios from "axios";
import { jwtDecode } from "jwt-decode";
import { useNavigate } from "react-router-dom";

const ecSchema = z.object({
    title: z.string().min(1), // Assuming minimum length of 1, adjust as needed
    desc: z.string().min(1), // Assuming minimum length of 1, adjust as needed
    eta: z.string().optional().default("One Day"),
    status: z.string().optional().default("Pending"),
    comments: z.array(z.string()).default([]),
    moduleCode: z.string().min(1), // Assuming minimum length of 1, adjust as needed
    department: z.string().min(1), // Assuming minimum length of 1, adjust as needed
    isUrgent: z.boolean(),
});




const InputTicket = () => {
  const navigate = useNavigate();
  const [loggedUser, setLoggedUser] = useState("");

  useEffect(() => {
    try {
      const jwt = localStorage.getItem("token");
      const user = jwtDecode(jwt);
      setLoggedUser(user);
    } catch (error) {
      console.log(error.message);
    }
  }, []);

  const [allTickets, setAllTickets] = useState([]);

  axios.defaults.headers.common["x-auth-token"] = localStorage.getItem("token");

  useEffect(() => {
    axios
      .get("http://localhost:3000/api/ticket")
      .then((res) => setAllTickets(res.data));
  }, []);

  const {
    register,
    handleSubmit,
    formState: { errors, isValid },
  } = useForm({ resolver: zodResolver(ecSchema) });

  // Start Drop Down Code Changes
  const [departmentDropDownOptions, setDepartmentDropDownOptions] = useState(
    []
  );
  const [moduleDropDownOptions, setModuleDropDownOptions] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState("");
  const [selectedPriority, setSelectedPriority] = useState("");
  const [selectedService, setSelectedService] = useState("");


  const categoryDropDownOptions = [
    { label: "Technical", value: "technical" },
    { label: "Functional", value: "functional" },
    { label: "Accessibility", value: "accessibility" },
    { label: "Other", value: "other" },
  ];

  const serviceDropDownOptions = [
    { label: "QM Plus", value: "qmplus" },
    { label: "MySIS", value: "mysis" },
    { label: "QM App", value: "qmapp" },
    { label: "Other", value: "other"}
  ];

  const PriorityDropDownOptions = [
    { label: "Standard", value: "default" },
    { label: "Urgent", value: "urgent" },
  ];

  const handleCategoryDropDownChange = (selectedValue) => {
      setSelectedCategory(selectedValue);
  };

  const handleSelectedService = (selectedValue) => {
    setSelectedService(selectedValue);

  };

  const handlePriorityDropDownChange = (selectedValue) => {
    setSelectedPriority(selectedValue);
  };


  // End Drop Down Code Changes

  const onSubmit = (data) => {

  console.log("Form submitted", data); // Add this line
    const originalTickets = [...allTickets];
    const newTicket = {
      title: data.title,
      desc: data.desc,
      eta: data.category,
      status: data.department,
      comments: data?.module,
      moduleCode: data.priority,
      department: loggedUser._id,
      isUrgent: loggedUser.name,
    };

    const { z } = require("zod");

    console.log("new ticket", newTicket);
    // setAllTickets([newTicket, ...allTickets])

    // axios
    //   .post("http://localhost:3000/api/ticket", newTicket)
    axios
      .post("http://localhost:3000/api/ecircumstance", newTicket, {
        headers: { "Content-Type": "multipart/form-data" },
      })
      .then(({ data: savedTicket }) =>
        setAllTickets([savedTicket, ...allTickets])
      )
      .catch((err) => {
        console.log("error caused posting ", err);
        setAllTickets(...originalTickets);
      });
    setTimeout(() => {
      navigate("/ticket-created");
    }, 100);
  };

  return (
    <>
      <div className="flex justify-center items-center min-h-[70vh] bg-white">
        <div className="card shrink-0 w-full max-w-screen-lg shadow-2xl bg-base-100">
            <h3 className="card-title text-center pt-7 pl-10">Submit EC</h3>
            {/* when submitting form, call onSubmit function to process the form */}
            <form className="card-body p-8" onSubmit={handleSubmit(onSubmit)}>
            {/* <div className="form-control">
                     <label htmlForm="title" className="label-text block pb-0.5 pl-1">Title</label>
                     <input
                        id="title"
                        {...register("title")}
                        type="text"
                        className="textarea textarea-bordered w-full"
                        />
                        {errors.title && (
                        <p className="text-danger">{errors.title.message}</p>
                        )}
                 </div>             */}
                 {/* <div className="form-control">
                     <label htmlFor="desc" className="label-text block pb-0.5 pl-1"> Description </label>
                     <textarea
                        id="desc"
                        {...register("desc")}
                        className="textarea textarea-bordered w-full"
                        placeholder="Description..."
                        maxLength={5000}
                        required
                    ></textarea>
                    {errors.desc && (
                        <p className="text-danger">{errors.desc.message}</p>
                    )}
                </div>
                <div className="form-control">
            <label htmlFor="department"className="label-text block pb-0.5 pl-1"> Service </label>
            <select
              id="department"
              {...register("department")}
              className="select select-bordered w-full"
              onChange={(e) => handleSelectedService(e.target.value)}
            >
              <option value="">Select...</option>
              {serviceDropDownOptions.map((department) => (
                <option key={department.value} value={department.value}>
                  {department.label}
                </option>
              ))}
            </select>
          </div>
          <div className="form-control">
            <label htmlFor="category" className="label-text block pb-0.5 pl-1"> Category </label>
            <select
              id="category"
              {...register("category")}
              className="select select-bordered w-full"
              onChange={(e) => handleCategoryDropDownChange(e.target.value)}
            >
              <option value="" disabled>Select...</option>
              {categoryDropDownOptions.map((option) => (
                <option key={option.value} value={option.value}>
                  {option.label}
                </option>
              ))}
            </select>
          </div>
          <div className="form-control">
            <label htmlFor="priority" className="label-text block pb-0.5 pl-1"> Priority </label>
            <select
              id="priority"
              {...register("priority")}
              className="select select-bordered w-full"
              onChange={(e) => handlePriorityDropDownChange(e.target.value)}
            >
              <option value="" disabled>Select...</option>
              {PriorityDropDownOptions.map((option) => (
                <option key={option.value} value={option.value}>
                  {option.label}
                </option>
              ))}
            </select>
          </div> */}

        

          {/* testing with default values to see if form will submit at all */}
        <input type="hidden" {...register("title", { value: "titletextforecform" })} />
        <input type="hidden" {...register("desc", { value: "descriptionforecformtestingtestingtestingtesting" })} />


          {/* set status to pending */}
          <input type="hidden" {...register("status", { value: "Pending" })} />
          {/* set ETA to One Day */}
          <input type="hidden" {...register("eta", { value: "One Day" })} />
          {/* set comments to default */}
          <input type="hidden" {...register("comments", { value: [] })} />

        <div className="flex justify-center items-center min-h-screen bg-white pt-12">
            <div className="card shrink-0 w-full max-w-screen-lg shadow-2xl bg-base-100">
                {/* heading for page */}
                <h3 className="card-title text-center pt-7 pl-10">Submit EC Claim</h3>
                {/* when submitting form, call handleSubmit function to process the form */}
                <form className="card-body p-8" onSubmit={handleSubmit}>
          <input type="hidden" {...register("moduleCode", { value: "ECS518U" })} />

          <input type="hidden" {...register("department", { value: "ComputerScience" })} />

          <input type="hidden" {...register("isUrgent", { value: "True" })} />


          {/* <div className="form-control">
              <label htmlFor="fileName" className="label-text block pb-0.5 pl-1"> Attach evidence (optional): </label>
              <input {...register("fileName")} type="file" className="file-input file-input-bordered file-input-md w-full max-w-xs" accept=".pdf,.doc,.docx,.jpg,.jpeg,.png"  />
              <small className="text-gray-600">Accepted file types: PDF, Word, JPEG, PNG.</small>
          </div> */}
          {/* Submit button */}
          <button type="submit" className="btn btn-primary mt-4 text-white">Submit</button>
        </form>
      </div>
      </div>
    </>
  );
};

export default InputTicket;
