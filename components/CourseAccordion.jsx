"use client";
import { useState } from "react";

export default function CourseAccordion({ modules }) {
  const [open, setOpen] = useState(null);
  return <div className="accordion">{modules.map((module, index) => { const isOpen = open === index; return <article className={`course-item${isOpen ? " open" : ""}`} key={module.number}><button className="course-button" type="button" aria-expanded={isOpen} onClick={() => setOpen(isOpen ? null : index)}><span className="course-number">{module.number}</span><span className="course-title"><small>{module.problem}</small><strong>{module.title}</strong></span><span className="course-plus" aria-hidden="true">+</span></button><div className="course-panel"><div><p>{module.description}</p></div></div></article>; })}</div>;
}
