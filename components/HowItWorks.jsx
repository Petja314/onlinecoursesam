import Reveal from "./Reveal";
const steps = [
  ["01", "Understand the theory", "Learn the reasoning behind material choice, preparation and structure in clear, practical language."],
  ["02", "Watch the technique", "See practical demonstrations that connect the explanation to real application."],
  ["03", "Apply the knowledge", "Use what you have learned to make more informed decisions in your own work."],
];

export default function HowItWorks() {
  return <section className="how"><div className="wrap"><Reveal className="section-head"><span className="caps blue">How it works</span><div><h2 className="display">Learn online, at your own pace.</h2><p>Study the theory, watch practical demonstrations and revisit the lessons as you develop your technique.</p></div></Reveal><Reveal className="steps">{steps.map(([number, title, text]) => <article className="step" key={number}><span>{number}</span><h3>{title}</h3><p>{text}</p></article>)}</Reveal></div></section>;
}
