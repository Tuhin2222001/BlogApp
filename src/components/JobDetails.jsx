import React from "react";
import { useLoaderData } from "react-router-dom";

function JobDetails() {
  const JobDetails = useLoaderData();
  return (
    <div className="job-details">
      <p>
        <b>Job Title: </b>
        {JobDetails.title}
      </p>
      <p>
        <b>Salary: </b>
        {JobDetails.Salary}
      </p>
      <p>
        <b>Job Location: </b>
        {JobDetails.location}
      </p>
      <p>
        <b>Description: </b>We are seeking a highly motivated and skilled
        Developer to join our team. The ideal candidate will be responsible for
        designing, developing, and maintaining software applications. This role
        involves collaborating with cross-functional teams, writing clean and
        efficient code, and participating in all phases of the software
        development lifecycle.NavLink, useNavigate,useLoaderData Nested Routes, Route
        Parameters, Error Handling A strong understanding of programming
        principles, problem-solving abilities, and a commitment to continuous
        learning are essential.
      </p>
      <button>Apply Now</button>
    </div>
  );
}

export default JobDetails;

export const JobDetailsLoader = async ({ params }) => {
  const { id } = params;
  const res = await fetch("http://localhost:5000/jobs/" + id);
  if (!res.ok) {
    throw Error("Could not found the job details");
  }
  return res.json();
};
