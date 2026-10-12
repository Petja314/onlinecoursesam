import Reveal from "./Reveal";
const CHECKOUT_URL = "https://samanta-s-site-5559.thinkific.com/order?ct=eee42c54-2189-43f8-b1b0-555067a9dc08";

export default function Offer() {
  return <section className="offer" id="enrol"><Reveal className="wrap offer-box"><div><span className="caps blue">Your next step</span><h2 className="display">Ready to stop guessing and start understanding hard gel?</h2><p>Hard Gel: Thin &amp; Strong Nails is an online course for nail technicians who want to understand their materials, improve their technique and create clean, strong, long-lasting nails.</p><div className="offer-features"><span>✓ Online training</span><span>✓ Theory &amp; practical demonstrations</span><span>✓ ABT accredited</span></div></div><div className="price"><div className="amount">£300</div><small>Hard Gel: Thin &amp; Strong Nails</small><a className="btn btn-blue" href={CHECKOUT_URL}>ENROL NOW <span className="arrow">→</span></a></div></Reveal></section>;
}
