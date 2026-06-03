"use client";

import { CalendarDays, FileText, MapPin, Search } from "lucide-react";
import Link from "next/link";
import { useMemo, useState } from "react";
import { StateSelect } from "./state-select";
import type { DirectoryItem } from "./updates";

const stateOptions = ["All States", "Bihar", "Rajasthan", "UP", "Madhya Pradesh", "Haryana"];

export function UpdateDirectoryFilters({
  items,
  detailBasePath,
  emptyText,
  searchPlaceholder,
  unitLabel
}: {
  items: DirectoryItem[];
  detailBasePath: string;
  emptyText: string;
  searchPlaceholder: string;
  unitLabel: string;
}) {
  const [query, setQuery] = useState("");
  const [state, setState] = useState("All States");

  const filteredItems = useMemo(() => {
    const search = query.trim().toLowerCase();

    return items.filter((item) => {
      const matchesSearch =
        !search ||
        [item.title, item.org, item.type, item.state].some((value) =>
          value.toLowerCase().includes(search)
        );
      const matchesState = state === "All States" || item.state === state;

      return matchesSearch && matchesState;
    });
  }, [items, query, state]);

  return (
    <section className="container directoryShell">
      <div className="filterPanel softPanel">
        <label className="searchField">
          <Search size={18} />
          <input
            aria-label={searchPlaceholder}
            onChange={(event) => setQuery(event.target.value)}
            placeholder={searchPlaceholder}
            type="search"
            value={query}
          />
        </label>

        <StateSelect onChange={setState} options={stateOptions} value={state} />
      </div>

      <div className="directoryCount">
        <strong>{filteredItems.length}</strong>
        <span>{filteredItems.length === 1 ? `${unitLabel} found` : `${unitLabel}s found`}</span>
      </div>

      <div className="jobList">
        {filteredItems.map((item) => (
          <article className="jobRow softPanel" key={item.slug}>
            <div className="jobRowIcon">
              <FileText size={20} />
            </div>
            <div className="jobRowBody">
              <span className="chip">{item.type}</span>
              <h2>{item.title}</h2>
              <p>{item.body}</p>
              <div className="jobRowMeta">
                <span>{item.org}</span>
                <span>
                  <MapPin size={14} />
                  {item.state}
                </span>
                <span>
                  <CalendarDays size={14} />
                  {item.date}
                </span>
              </div>
            </div>
            <Link className="detailButton" href={`${detailBasePath}/${item.slug}`}>
              Detail
            </Link>
          </article>
        ))}
      </div>

      {filteredItems.length === 0 ? (
        <div className="emptyJobs softPanel">
          <h2>No updates found</h2>
          <p>{emptyText}</p>
        </div>
      ) : null}
    </section>
  );
}
