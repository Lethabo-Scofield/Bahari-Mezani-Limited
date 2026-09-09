import { useEffect, useState } from 'react'
import {
  ArrowDownRight, ArrowRight, Check, Droplets, Mail, MapPin, Menu, Phone,
  ShieldCheck, Truck, Users, X, Zap,
} from 'lucide-react'

const WHATSAPP = 'https://wa.me/254768066569'
const wa = (message) => `${WHATSAPP}?text=${encodeURIComponent(message)}`
const images = {
  hero: 'https://images.unsplash.com/photo-1500375592092-40eb2168fd21?auto=format&fit=crop&w=2200&q=88',
  landing: 'https://images.unsplash.com/photo-1544551763-46a013bb70d5?auto=format&fit=crop&w=1400&q=85',
  fisher: 'https://images.unsplash.com/photo-1530053969600-caed2596d242?auto=format&fit=crop&w=1400&q=85',
  mangrove: 'https://images.unsplash.com/photo-1516690561799-46d8f74f9abf?auto=format&fit=crop&w=1800&q=85',
  market: 'https://images.unsplash.com/photo-1534766555764-ce878a5e3a2b?auto=format&fit=crop&w=1400&q=85',
  cold: 'https://images.unsplash.com/photo-1580674684081-7617fbf3d745?auto=format&fit=crop&w=1400&q=85',
  coast: 'https://images.unsplash.com/photo-1548013146-72479768bada?auto=format&fit=crop&w=1800&q=85',
}

const navItems = [
  ['About Us', '/about'], ['Cold Storage & Fleet', '/cold-storage'],
  ['Products', '/products'], ['Impact', '/impact'], ['Contact', '/contact'],
]

function Logo({ light = false }) {
  return <a href="/" className={`logo ${light ? 'logo-light' : ''}`} aria-label="Bahari Mezani home">
    <span className="logo-mark"><span /><span /></span>
    <span className="logo-type"><strong>bahari</strong><em>mezani</em><small>LIMITED</small></span>
  </a>
}

function Header({ overlay = false }) {
  const [open, setOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 30)
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])
  return <header className={`site-header ${overlay && !scrolled ? 'header-overlay' : ''} ${scrolled ? 'header-scrolled' : ''}`}>
    <div className="container nav-wrap">
      <Logo light={overlay && !scrolled} />
      <nav className="desktop-nav" aria-label="Main navigation">
        <a className="nav-home" href="/">Home</a>
        {navItems.map(([label, href]) => <a key={href} href={href}>{label}</a>)}
      </nav>
      <a className="button button-small button-gold desktop-cta" href={wa('Hello Bahari Mezani, I have a general enquiry.')}>Order via WhatsApp <ArrowRight size={15} /></a>
      <button className="menu-toggle" aria-label={open ? 'Close menu' : 'Open menu'} onClick={() => setOpen(!open)}>
        {open ? <X /> : <Menu />}
      </button>
    </div>
    {open && <div className="mobile-menu">
      <div className="mobile-menu-inner">
        <a href="/" onClick={() => setOpen(false)}>Home</a>
        {navItems.map(([label, href]) => <a key={href} href={href} onClick={() => setOpen(false)}>{label}</a>)}
        <a className="button button-gold" href={wa('Hello Bahari Mezani, I have a general enquiry.')}>Order via WhatsApp <ArrowRight size={16} /></a>
      </div>
    </div>}
  </header>
}

function Footer() {
  return <footer className="footer">
    <div className="container footer-grid">
      <div><Logo light /><p className="footer-intro">Building the cold-chain infrastructure that coastal Kenya needs to keep fish fresh and livelihoods moving.</p></div>
      <div><p className="footer-label">Explore</p><a href="/about">Our story</a><a href="/cold-storage">Infrastructure</a><a href="/products">Products</a><a href="/impact">Our impact</a></div>
      <div><p className="footer-label">Connect</p><a href={wa('Hello Bahari Mezani, I have a general enquiry.')}>WhatsApp</a><a href="mailto:baharimezani@outlook.com">Email us</a><a href="/contact">Contact</a><p className="footer-address">Baobab Plaza, Charo Wa Mae Road<br />Kilifi, Kenya</p></div>
    </div>
    <div className="container footer-bottom"><span>© {new Date().getFullYear()} Bahari Mezani Limited</span><span>Samaki Freshi · Kilifi, Kenya</span></div>
  </footer>
}

function PageIntro({ eyebrow, title, copy, image }) {
  return <section className="page-intro">
    <div className="container page-intro-grid">
      <div><p className="eyebrow eyebrow-dark">{eyebrow}</p><h1>{title}</h1>{copy && <p className="lede">{copy}</p>}</div>
      {image && <div className="intro-image"><img src={image} alt="" /></div>}
    </div>
  </section>
}

function SectionHeading({ eyebrow, title, copy, light = false }) {
  return <div className={`section-heading ${light ? 'text-light' : ''}`}>
    {eyebrow && <p className="eyebrow">{eyebrow}</p>}<h2>{title}</h2>{copy && <p>{copy}</p>}
  </div>
}

function StatStrip({ dark = false }) {
  const stats = [['120+', 'Women fish traders supported'], ['60+', 'Fishermen in supply chain'], ['30', 'Youth employed'], ['1,400', 'Mangroves restored'], ['Up to 40%', 'Post-harvest loss problem addressed']]
  return <section className={`stat-strip ${dark ? 'stat-strip-dark' : ''}`}><div className="container stat-grid">
    {stats.map(([number, label]) => <div className="stat" key={label}><strong>{number}</strong><span>{label}</span></div>)}
  </div></section>
}

function Process({ detailed = false }) {
  const items = [
    ['01', 'Purchase', 'Fish purchased directly from 60+ fishermen at fair market rates upon landing.'],
    ['02', 'Preserve', 'Fish cleaned, graded and stored in solar-powered cold rooms operating at 0°C–4°C.'],
    ['03', 'Transport', 'Refrigerated trucks, e-bikes and tuk-tuks maintain the cold chain.'],
    ['04', 'Sell', 'Fish reaches hotels, butcheries, Mama Karanga traders, institutions and walk-in customers.'],
  ]
  return <div className={`process ${detailed ? 'process-detailed' : ''}`}>{items.map(([num, title, copy]) => <div className="process-item" key={title}>
    <span className="process-number">{num}</span><div><h3>{title}</h3><p>{copy}</p></div>
  </div>)}</div>
}

function Home() {
  return <><Header overlay />
    <main>
      <section className="hero hero-home" style={{ backgroundImage: `linear-gradient(90deg, rgba(13,43,69,.9) 0%, rgba(13,43,69,.64) 48%, rgba(13,43,69,.2) 100%), url(${images.hero})` }}>
        <div className="container hero-content"><p className="eyebrow">Samaki Freshi · Kilifi, Coastal Kenya</p><h1>Fresh Fish.<br />No Spoilage.<br /><span>Solar Cold Chain.</span></h1><p className="hero-copy">Bahari Mezani installs solar-powered cold rooms at coastal landing sites — reducing post-harvest loss and delivering cold-chain-verified fish from ocean to market.</p><div className="button-row"><a className="button button-light" href="/about">Explore Our Work <ArrowDownRight size={17} /></a><a className="button button-outline-light" href={wa('Hello Bahari Mezani, I’d like to order fish.')}>Order via WhatsApp <ArrowRight size={17} /></a></div></div>
        <div className="hero-scroll">Scroll to explore <span /></div>
      </section>
      <section className="problem-section"><div className="container problem-grid"><div><p className="eyebrow">The infrastructure gap</p><h2>Every day along Kenya's coast, up to 40% of the catch spoils before it reaches a buyer.</h2></div><div><p className="problem-copy">Not because of poor fishing. Because there is no cold storage where the fish lands.</p><p>Bahari Mezani was founded to close that infrastructure gap — with cold rooms, logistics and a market built around freshness.</p><a className="text-link text-link-light" href="/about">Why we exist <ArrowRight size={16} /></a></div></div></section>
      <section className="section"><div className="container"><SectionHeading eyebrow="From ocean to market" title="A better journey for every catch." copy="Four connected steps keep fish fresh, fair and moving — from the moment it lands to the moment it reaches a plate." /><Process /></div></section>
      <StatStrip />
      <section className="section section-offwhite"><div className="container"><SectionHeading eyebrow="Built for the market" title="Who we serve" copy="One cold chain. Three routes to market. A more reliable supply of fresh fish for coastal Kenya." /><div className="audience-grid">
        {[['B2C', 'Retail & Community', 'Mama Karanga traders and walk-in customers.', Users], ['B2B', 'Hotels & Butcheries', 'Wholesale fish supply for hospitality and retailers.', Truck], ['B2I', 'Schools & Institutions', 'Bulk supply contracts for institutional kitchens.', ShieldCheck]].map(([tag, title, copy, Icon]) => <div className="audience-card" key={tag}><span className="card-tag">{tag}</span><Icon size={25} strokeWidth={1.4} /><h3>{title}</h3><p>{copy}</p><a href="/products" className="text-link">See products <ArrowRight size={15} /></a></div>)}</div><div className="model-line"><span>Our commercial model</span><b>Cold Storage Rental</b><b>Fish Sales Margin</b><b>Logistics Fees</b><b>Processing Premium</b></div></div></section>
      <section className="partners"><div className="container partners-row"><p>Built with partners who believe in a better blue economy</p><div className="partner-logos"><span>BLUE<br /><i>ECONOMY</i></span><span className="partner-script">kilifi<br /><i>county</i></span><span>COASTAL<br /><i>FUTURES</i></span><span className="partner-circle">M<span>+</span></span></div></div></section>
      <section className="cta-band"><div className="container cta-content"><div><p className="eyebrow">Make freshness your standard</p><h2>Ready to source cold-chain-verified fish?</h2></div><div><p>Whether you run a hotel kitchen, school canteen or market stall, Samaki Freshi delivers fresh fish while maintaining the cold chain.</p><div className="button-row"><a className="button button-gold" href={wa('Hello Bahari Mezani, I’d like to place a fish order.')}>Order via WhatsApp <ArrowRight size={16} /></a><a className="button button-outline-light" href="/contact">Get in touch</a></div></div></div></section>
    </main><Footer />
  </>
}

function About() {
  const problems = [['No cold storage at landing sites', 'Fish can spoil within hours after landing.', Droplets], ['Unreliable power grid', 'Long power interruptions make conventional cold rooms difficult to operate.', Zap], ['Women traders bear the loss', 'Mama Karanga traders absorb spoilage losses without reliable cold-chain infrastructure.', Users], ['Youth unemployment', 'Coastal communities have limited formal employment opportunities.', ArrowUpRight]]
  const team = [['AO', 'Alphonce Ochieng Owiti', 'Founder & CEO'], ['ZR', 'Zipporah Rehema', 'Managing Director'], ['CO', 'Cliff Austine Obonyo', 'Chief Finance Officer'], ['YA', 'Yvonne Atieno', 'Head of Programs'], ['RW', 'Ruth Wanjiru', 'Head of Marketing'], ['AB', 'Agnes Bokole', 'Production Manager'], ['HZ', 'Hephisiba Zale', 'Administrative Manager'], ['AA', 'Afyle Akinyi', 'Sourcing Manager']]
  return <><Header /><main><PageIntro eyebrow="Our story" title={<>Built at the<br /><em>landing site.</em></>} copy="Bahari Mezani was founded by Alphonce Ochieng Owiti after observing that fish landed fresh every morning along Kenya's coast, but significant portions became unsaleable before reaching buyers." image={images.fisher} />
    <section className="section"><div className="container narrow-copy"><p className="eyebrow">The problem</p><h2>The problem was not supply.<br /><em>It was infrastructure.</em></h2><p>Cold storage capable of operating through coastal power outages was missing precisely where it was needed. So we built a model that starts where the fish lands, not where it is sold.</p></div><div className="container problem-cards">{problems.map(([title, copy, Icon]) => <div className="problem-card" key={title}><Icon size={22} /><h3>{title}</h3><p>{copy}</p></div>)}</div></section>
    <section className="split-feature"><div className="split-image"><img src={images.cold} alt="Cold storage infrastructure" /></div><div className="split-copy"><p className="eyebrow">Samaki Freshi</p><h2>A solar cold chain built for the coast.</h2><p>Samaki Freshi uses 40-foot solar-powered cold-storage containers positioned at fish landing sites. The cold rooms connect to refrigerated trucks, e-bikes and tuk-tuks.</p><div className="spec-inline"><div><strong>0°C–4°C</strong><span>Operating temperature</span></div><div><strong>Off-grid, 24/7</strong><span>Operating model</span></div></div><div className="feature-list"><span><Check size={16} /> Off-grid solar</span><span><Check size={16} /> End-to-end cold chain</span><span><Check size={16} /> Community-integrated model</span></div></div></section>
    <section className="section section-offwhite"><div className="container"><SectionHeading eyebrow="The people behind the work" title="Leadership" copy="A hands-on team building practical infrastructure for a more resilient coastal economy." /><div className="team-grid">{team.map(([initials, name, role]) => <div className="team-card" key={name}><div className="initials">{initials}</div><h3>{name}</h3><p>{role}</p></div>)}</div></div></section>
    <section className="values-section"><div className="container"><SectionHeading eyebrow="What guides us" title="Built on four convictions." light /><div className="values-grid">{[['01', 'Sustainability', 'We build for the long view — commercially and ecologically.'], ['02', 'Inclusion', 'The people closest to the problem belong in the solution.'], ['03', 'Innovation', 'Practical technology makes infrastructure more resilient.'], ['04', 'Integrity', 'Trust is the foundation of every relationship we keep.']].map(([num, title, copy]) => <div key={title}><span>{num}</span><h3>{title}</h3><p>{copy}</p></div>)}</div></div></section>
  </main><Footer /></>
}

function ColdStorage() {
  const specs = [['Unit type', '40ft shipping container, solar-powered'], ['Operating temperature', '0°C–4°C'], ['Power source', '100% solar, off-grid'], ['Grid dependency', 'None'], ['Location', 'Coastal fish landing sites'], ['Operating hours', '24/7']]
  const fleet = [['Refrigerated trucks', 'Long-distance cold delivery to hotels, butcheries and institutions.', images.cold, Truck], ['E-bikes', 'Low-emission last-mile delivery around coastal towns.', images.coast, Zap], ['Tuk-tuks', 'High-frequency short-distance distribution to depots and traders.', images.market, ArrowRight]]
  return <><Header /><main><PageIntro eyebrow="Infrastructure" title={<>Cold-chain infrastructure<br /><em>built for coastal Kenya.</em></>} copy="Solar-powered. Off-grid. Operating 24/7 at 0°C–4°C." image={images.cold} />
    <section className="section"><div className="container infra-grid"><div className="infra-photo"><img src={images.landing} alt="Coastal landing site" /><span className="photo-label">Landing-site infrastructure / Kilifi</span></div><div className="infra-content"><p className="eyebrow">Solar cold rooms</p><h2>Where the catch lands, the cold chain begins.</h2><p>Our cold rooms are designed for coastal conditions: independent of the grid, close to fishing communities and ready to protect the day's catch around the clock.</p><div className="spec-table">{specs.map(([label, value]) => <div key={label}><span>{label}</span><strong>{value}</strong></div>)}</div></div></div></section>
    <section className="section section-navy"><div className="container"><SectionHeading eyebrow="The system" title="Cold chain, without the weak links." copy="Preservation doesn't stop at the cold-room door. Every handoff is designed to keep cold conditions intact." light /><Process detailed /></div></section>
    <section className="section section-offwhite"><div className="container"><SectionHeading eyebrow="Last-mile infrastructure" title="Cold Logistics Fleet" copy="The fleet maintains cold conditions throughout delivery — from coastal landing sites to the customers who count on consistency." /><div className="fleet-grid">{fleet.map(([title, copy, image, Icon]) => <div className="fleet-card" key={title}><img src={image} alt="" /><div className="fleet-card-body"><Icon size={22} /><h3>{title}</h3><p>{copy}</p></div></div>)}</div></div></section>
    <section className="cta-band cta-sand"><div className="container cta-content"><div><p className="eyebrow">For operators and traders</p><h2>Rent cold storage space.</h2></div><div><p>Landing-site operators and fish traders can enquire about renting storage space without purchasing equipment.</p><a className="button button-navy" href={wa('Hello Bahari Mezani, I’d like to enquire about cold storage rental.')}>Enquire via WhatsApp <ArrowRight size={16} /></a></div></div></section>
  </main><Footer /></>
}

function Products() {
  const productCards = [['Fresh Fish', 'Daily Fresh', 'Whole fish sourced daily from landing sites along the Kilifi coast. Stored chilled at 0°C–4°C.', images.market, ['Cold-chain verified', 'Freshly sourced', 'No preservatives']], ['Cleaned & Graded Seafood', 'Value-Added', 'Cleaned, graded and packaged seafood for hotels, butcheries and institutional customers.', images.landing, ['Cleaned & graded', 'Packaged', 'Wholesale available']]]
  return <><Header /><main><section className="products-hero"><div className="container products-hero-inner"><p className="eyebrow eyebrow-dark">Samaki Freshi · Product catalogue</p><h1>Cold-chain verified.<br /><em>Direct from the coast.</em></h1><p className="lede">Fish sourced from more than 60 local fishermen, stored, graded and distributed through the Samaki Freshi cold chain.</p><a className="button button-navy" href={wa('Hello Bahari Mezani, I’d like to place a fish order.')}>Order via WhatsApp <ArrowRight size={16} /></a></div><div className="products-hero-image" style={{ backgroundImage: `url(${images.market})` }} /></section>
    <section className="section"><div className="container"><SectionHeading eyebrow="What is available" title="Good fish needs a good route to market." /><div className="product-grid">{productCards.map(([title, label, copy, image, tags]) => <div className="product-card" key={title}><div className="product-img"><img src={image} alt="" /><span>{label}</span></div><div className="product-card-body"><h3>{title}</h3><p>{copy}</p><div className="tag-row">{tags.map(tag => <span key={tag}>{tag}</span>)}</div></div></div>)}</div></div></section>
    <section className="section section-offwhite"><div className="container"><SectionHeading eyebrow="Our customers" title="Who we supply" /><div className="supply-grid">{[['B2C', 'Mama Karanga & Walk-In Customers', 'Reliable access to fresh, fairly sourced fish.'], ['B2B', 'Hotels, Restaurants & Butcheries', 'Consistent wholesale supply for hospitality and retail.'], ['B2I', 'Schools & Institutions', 'Bulk supply contracts for institutional kitchens.']].map(([tag, title, copy]) => <div className="supply-card" key={tag}><span>{tag}</span><h3>{title}</h3><p>{copy}</p></div>)}</div></div></section>
    <section className="section"><div className="container order-section"><SectionHeading eyebrow="Simple by design" title="Order in three steps." /><div className="order-grid">{[['1', 'Message us on WhatsApp', 'Send fish type, quantity and delivery location.'], ['2', 'We confirm & pack', 'Your order is picked from cold storage, graded and packed.'], ['3', 'Collect or receive delivery', 'Collect from a Samaki Freshi hub or arrange refrigerated delivery.']].map(([number, title, copy]) => <div className="order-step" key={number}><span>{number}</span><h3>{title}</h3><p>{copy}</p></div>)}</div><div className="product-stats"><strong>100% <small>Cold-chain verified</small></strong><strong>Same-day <small>Hub collection</small></strong><strong>Zero <small>Apps required</small></strong></div><a className="button button-gold button-centered" href={wa('Hello Bahari Mezani, I’d like to place a fish order.')}>Order via WhatsApp · +254 768 066 569 <ArrowRight size={16} /></a></div></section>
  </main><Footer /></>
}

function Impact() {
  const dashboard = [['120+', 'Women fish traders supported'], ['60+', 'Fishermen in supply chain'], ['30', 'Youth employed'], ['1,400', 'Mangroves restored'], ['Up to 40%', 'Post-harvest loss challenge addressed']]
  return <><Header /><main><section className="impact-hero" style={{ backgroundImage: `linear-gradient(90deg, rgba(13,43,69,.92), rgba(13,43,69,.35)), url(${images.mangrove})` }}><div className="container"><p className="eyebrow">Impact, measured locally</p><h1>This is what 1,400 mangroves and 120+ livelihoods look like.</h1><p>Bahari Mezani measures its impact through stronger livelihoods, coastal employment and protection of marine ecosystems alongside the growth of its cold-chain business.</p></div></section>
    <section className="dashboard"><div className="container"><SectionHeading eyebrow="Impact dashboard" title="Business growth should leave a stronger coastline behind." /><div className="dashboard-grid">{dashboard.map(([number, label]) => <div key={label}><strong>{number}</strong><span>{label}</span></div>)}</div></div></section>
    <section className="section"><div className="container impact-story-grid"><div className="impact-story-image"><img src={images.market} alt="Women working with fresh fish" /></div><div className="impact-story-copy"><p className="eyebrow">Women</p><h2>Protecting the backbone of Kenya's coastal fish economy.</h2><p>Mama Karanga traders are central to the coastal fish economy. Access to cold-chain infrastructure reduces spoilage exposure, protects margins and improves product consistency.</p><strong className="story-number">120+ <small>women supported</small></strong></div></div></section>
    <section className="section section-offwhite"><div className="container impact-story-grid impact-story-reverse"><div className="impact-story-image"><img src={images.cold} alt="Logistics operations" /></div><div className="impact-story-copy"><p className="eyebrow">Youth</p><h2>30 young people employed in the cold economy.</h2><p>Cold-chain infrastructure creates practical roles across handling, processing, logistics and operations — giving coastal youth a place in a growing blue economy.</p></div></div></section>
    <section className="mangrove-band" style={{ backgroundImage: `linear-gradient(rgba(0,43,42,.55), rgba(0,43,42,.6)), url(${images.mangrove})` }}><div className="container mangrove-content"><p className="eyebrow">Coastal ecosystems</p><h2>Mangroves are nurseries of the sea.</h2><div><strong>1,400</strong><span>mangroves restored</span><small>Target: 50,000 by 2030</small></div></div></section>
    <section className="section"><div className="container"><div className="fishermen-row"><div><p className="eyebrow">Fishermen</p><h2>Fair pricing.<br /><em>Direct relationships.</em></h2></div><p>Bahari Mezani works directly with more than 60 local fishermen, creating a more predictable path from a fair landing-site price to a reliable customer.</p></div><div className="roadmap"><SectionHeading eyebrow="Looking ahead" title="Growth roadmap" copy="These are roadmap targets, not current achievements." /><div className="roadmap-grid">{[['Phase 1', '2024–2026', ['2 cold rooms', '300 community members', 'Seed funding']], ['Phase 2', '2027–2029', ['10 cold rooms', '3 coastal counties', 'Full logistics fleet']], ['Phase 3', '2030+', ['25 cold rooms', '500+ value-chain actors', '50,000 mangroves']]].map(([phase, years, targets]) => <div key={phase}><span>{phase}</span><h3>{years}</h3>{targets.map(target => <p key={target}><Check size={15} /> {target}</p>)}</div>)}</div></div></div></section>
  </main><Footer /></>
}

function Contact() {
  const [sent, setSent] = useState(false)
  return <><Header /><main><PageIntro eyebrow="Start a conversation" title={<>Let's talk<br /><em>fish.</em></>} copy="Whether you're sourcing for a hotel kitchen, exploring a partnership or interested in investing in Kenya's blue economy, get in touch." image={images.coast} />
    <section className="section contact-section"><div className="container contact-grid"><div className="contact-details"><p className="eyebrow">Find us</p><h2>Good conversations<br /><em>start here.</em></h2><div className="contact-list"><a href={wa('Hello Bahari Mezani, I have a general enquiry.')}><Phone size={20} /><span><small>WhatsApp / Phone</small>+254 768 066 569</span></a><a href="mailto:baharimezani@outlook.com"><Mail size={20} /><span><small>Email</small>baharimezani@outlook.com</span></a><div><MapPin size={20} /><span><small>Visit us</small>Baobab Plaza, Charo Wa Mae Road<br />Kilifi, Kenya<br />P.O. Box 195 – 80108</span></div></div><a className="button button-gold" href={wa('Hello Bahari Mezani, I have a general enquiry.')}>Message us on WhatsApp <ArrowRight size={16} /></a></div><div className="contact-form-wrap"><p className="eyebrow">Send an enquiry</p>{sent ? <div className="form-success"><Check size={28} /><h3>Thanks for reaching out.</h3><p>Your message is ready to be sent. We’ll be in touch soon.</p></div> : <form onSubmit={(event) => { event.preventDefault(); setSent(true) }}><label>Full name <input required name="name" placeholder="Your name" /></label><label>Organisation <input name="organisation" placeholder="Company or organisation" /></label><div className="form-two"><label>Email <input required type="email" name="email" placeholder="you@example.com" /></label><label>Phone / WhatsApp <input name="phone" placeholder="+254" /></label></div><label>Enquiry type <select name="type" defaultValue="Buying Fish"><option>Buying Fish</option><option>Cold Storage Rental</option><option>Partnership</option><option>Investment</option><option>Media</option><option>General</option></select></label><label>Message <textarea required name="message" rows="4" placeholder="How can we help?" /></label><button className="button button-navy" type="submit">Send enquiry <ArrowRight size={16} /></button></form>}</div></div></section>
    <section className="map-section"><iframe title="Map showing Kilifi, Kenya" src="https://www.google.com/maps?q=Kilifi%2C%20Kenya&output=embed" loading="lazy" /></section>
  </main><Footer /></>
}

function App() {
  useEffect(() => { window.scrollTo(0, 0) }, [])
  const path = window.location.pathname.replace(/\/$/, '') || '/'
  const pages = { '/': Home, '/about': About, '/cold-storage': ColdStorage, '/products': Products, '/impact': Impact, '/contact': Contact }
  const Page = pages[path] || Home
  return <Page />
}

export default App