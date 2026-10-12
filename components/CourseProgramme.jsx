import Reveal from "./Reveal";
import CourseAccordion from "./CourseAccordion";
import { modules } from "@/data/course";

export default function CourseProgramme() {
  return <section id="programme"><div className="wrap"><Reveal className="programme-intro"><span className="caps blue">Inside the course</span><h2 className="display">Everything you&apos;ve been struggling with — finally explained.</h2><p>No more guessing which products to use, why lifting happens or how to create strong nails without unnecessary thickness.</p></Reveal><Reveal><CourseAccordion modules={modules} /></Reveal></div></section>;
}
