import Image from "next/image";

export default function Hero() {
  return <section className="hero"><div className="wrap hero-grid"><div className="hero-copy"><span className="eyebrow">Sams Nail Training · Online Education</span><h1 className="display">Tried so many different gels, but still getting <span className="blue">lifting &amp; cracks?</span></h1><p>You&apos;ve changed brands, tried new products and followed different techniques… but the same problems keep coming back.</p><a className="btn" href="#why">DISCOVER WHAT&apos;S MISSING <span className="arrow">↓</span></a><span className="hero-detail">Hard Gel: Thin &amp; Strong Nails · ABT Accredited</span></div><div className="hero-portrait"><Image className="hero-photo" src="/sam.jpg" alt="Sam, nail educator and creator of Hard Gel: Thin and Strong Nails" fill priority sizes="(max-width: 900px) 100vw, 40vw" /></div></div></section>;
}
