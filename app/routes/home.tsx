import type { Route } from "./+types/home";
import { Welcome } from "../welcome/welcome";
import Navbar from "~/components/navbar";
import { resumes } from "../../constants";
import ResumeCard from "~/components/ResumeCard";
import { usePuterStore } from "~/lib/puter";
import { Link, useNavigate } from "react-router";
import { useEffect, useState } from "react";


export function meta({ }: Route.MetaArgs) {
  return [
    { title: "Docugrade" },
    { name: "description", content: "Intelligent Document validation with grading!" },
  ];
}

export default function Home() {

  const { auth } = usePuterStore();

  const navigate = useNavigate();

  useEffect(() => {
    if (!auth.isAuthenticated) navigate('/auth?next=/');
  }, [auth.isAuthenticated])

  useEffect(() => {
    console.log('auth.isAuthenticated', auth.isAuthenticated);
  }, [auth.isAuthenticated]);



  return <main className="bg-[url('/images/bg-main.svg')] bg-cover">


    <Navbar />

    <section className="main-section">
      <div className="page-heading">
        <h1>Track your Graded Documents</h1>
        <h2>See how your documents are graded and get feedback</h2>
      </div>


      {resumes.length > 0 && (
        <div className="resumes-section">
          {
            resumes.map((resume) => (

              <ResumeCard key={resume.id} resume={resume} />

            ))}
        </div>
      )}

    </section>
  </main>
}

