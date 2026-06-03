"use client";

import { CalendarDays, FileText, MapPin, Search } from "lucide-react";
import Link from "next/link";
import { useMemo, useState } from "react";
import type { jobs } from "../jobs";
import { StateSelect } from "../state-select";

type Job = (typeof jobs)[number];

const stateOptions = ["All States", "Bihar", "Rajasthan", "UP", "Madhya Pradesh", "Haryana"];

export function SarkariNaukriFilters({ jobs }: { jobs: Job[] }) {
  const [query, setQuery] = useState("");
  const [state, setState] = useState("All States");

  const filteredJobs = useMemo(() => {
    const search = query.trim().toLowerCase();

    return jobs.filter((job) => {
      const matchesSearch =
        !search ||
        [job.title, job.org, job.type, job.state].some((value) =>
          value.toLowerCase().includes(search)
        );
      const matchesState = state === "All States" || job.state === state;

      return matchesSearch && matchesState;
    });
  }, [jobs, query, state]);

  return (
    <section className="container directoryShell">
      <div className="filterPanel softPanel">
        <label className="searchField">
          <Search size={18} />
          <input
            aria-label="Search job by name"
            onChange={(event) => setQuery(event.target.value)}
            placeholder="Job name se search karein"
            type="search"
            value={query}
          />
        </label>

        <StateSelect onChange={setState} options={stateOptions} value={state} />
      </div>

      <div className="directoryCount">
        <strong>{filteredJobs.length}</strong>
        <span>{filteredJobs.length === 1 ? "job found" : "jobs found"}</span>
      </div>

      <div className="jobList">
        {filteredJobs.map((job) => (
          <article className="jobRow softPanel" key={job.slug}>
            <div className="jobRowIcon">
              <FileText size={20} />
            </div>
            <div className="jobRowBody">
              <span className="chip">{job.type}</span>
              <h2>{job.title}</h2>
              <p>{job.body}</p>
              <div className="jobRowMeta">
                <span>{job.org}</span>
                <span>
                  <MapPin size={14} />
                  {job.state}
                </span>
                <span>
                  <CalendarDays size={14} />
                  {job.date}
                </span>
              </div>
            </div>
            <Link className="detailButton" href={`/naukri/${job.slug}`}>
              Detail
            </Link>
          </article>
        ))}
      </div>

      {filteredJobs.length === 0 ? (
        <div className="emptyJobs softPanel">
          <h2>No jobs found</h2>
          <p>Search text ya state filter change karke phir try karein.</p>
        </div>
      ) : null}
    </section>
  );
}
