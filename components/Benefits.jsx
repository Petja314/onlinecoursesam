import Reveal from "./Reveal";
import { benefits } from "@/data/course";

export default function Benefits() {
  return <section className="benefits"><div className="wrap"><Reveal className="section-head"><span className="caps blue">What you&apos;ll learn</span><div><h2 className="display">Know exactly what you&apos;re doing — and why.</h2><p>Build the understanding behind every product choice, preparation step and layer of structure.</p></div></Reveal><Reveal className="benefit-grid">{benefits.map(([number, title, description]) => <article className="benefit" key={number}><span className="num">{number}</span><h3>{title}</h3><p>{description}</p></article>)}</Reveal></div></section>;
}
