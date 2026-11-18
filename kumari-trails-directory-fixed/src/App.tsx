import { useMemo, useState } from 'react';
import { Link, NavLink, Route, Routes, useParams } from 'react-router-dom';
import {
  ArrowRight, MapPin, Search, Menu, X, Compass, Hotel,
  Utensils, Map, ExternalLink
} from 'lucide-react';
import { destinations, stays, restaurants } from './data';

function Header() {
  const [open, setOpen] = useState(false);
  const close = () => setOpen(false);

  return (
    <header className="header">
      <Link to="/" className="logo" onClick={close}>
        <Compass size={25} />
        <span>KUMARI <b>TRAILS</b></span>
      </Link>
      <button className="menu-toggle" onClick={() => setOpen(!open)} aria-label="Toggle navigation">
        {open ? <X /> : <Menu />}
      </button>
      <nav className={open ? 'nav nav-open' : 'nav'}>
        <NavLink to="/" onClick={close}>Home</NavLink>
        <NavLink to="/destinations" onClick={close}>Destinations</NavLink>
        <NavLink to="/hidden-places" onClick={close}>Hidden Places</NavLink>
        <NavLink to="/stays" onClick={close}>Stays</NavLink>
        <NavLink to="/restaurants" onClick={close}>Restaurants</NavLink>
        <NavLink to="/travel-guide" onClick={close}>Travel Guide</NavLink>
      </nav>
    </header>
  );
}

function Footer() {
  return (
    <footer className="footer">
      <Link to="/" className="footer-logo">KUMARI TRAILS</Link>
      <p>Discover More. Explore Beyond.</p>
      <p>Explore the beauty, culture and coastline of Kanyakumari.</p>
      <div className="footer-links">
        <Link to="/destinations">Destinations</Link>
        <Link to="/stays">Stays</Link>
        <Link to="/restaurants">Restaurants</Link>
        <Link to="/travel-guide">Travel Guide</Link>
      </div>
      <small>© {new Date().getFullYear()} Kumari Trails. Independent travel guide.</small>
    </footer>
  );
}

function SectionHeading({ eyebrow, title, description }: {
  eyebrow: string; title: string; description: string;
}) {
  return (
    <div className="section-heading">
      <span className="eyebrow">{eyebrow}</span>
      <h2>{title}</h2>
      <p>{description}</p>
    </div>
  );
}

function DestinationCard({ place }: { place: typeof destinations[number] }) {
  return (
    <article className="destination-card">
      <Link to={`/destination/${place.id}`} className="card-image">
        <img src={place.image} alt={place.name} loading="lazy" />
        {place.hidden && <span className="image-tag">Hidden place</span>}
      </Link>
      <div className="card-content">
        <span className="card-category">{place.category}</span>
        <h3>{place.name}</h3>
        <p className="location"><MapPin size={15} /> {place.area}</p>
        <p>{place.description}</p>
        <Link className="text-link" to={`/destination/${place.id}`}>
          Explore place <ArrowRight size={16} />
        </Link>
      </div>
    </article>
  );
}

function Home() {
  return (
    <>
      <section className="hero">
        <div className="hero-overlay">
          <span className="eyebrow light">THE SOUTHERN EDGE OF INDIA</span>
          <h1>Discover More.<br /><em>Explore Beyond.</em></h1>
          <p>Find beautiful coastlines, hidden escapes, local food and memorable places in Kanyakumari.</p>
          <div className="hero-actions">
            <Link to="/destinations" className="button button-primary">Explore destinations <ArrowRight size={18} /></Link>
            <Link to="/travel-guide" className="button button-outline">Plan your visit</Link>
          </div>
        </div>
      </section>

      <section className="stats-strip">
        <div><strong>01</strong><span>Southern tip of India</span></div>
        <div><strong>3</strong><span>Seas meet here</span></div>
        <div><strong>∞</strong><span>Places to discover</span></div>
      </section>

      <section className="section">
        <SectionHeading eyebrow="START EXPLORING" title="Find your next destination"
          description="Discover famous landmarks, beaches, heritage sites and natural places." />
        <div className="card-grid">
          {destinations.slice(0, 3).map(place => <DestinationCard key={place.id} place={place} />)}
        </div>
        <div className="center-action">
          <Link to="/destinations" className="button button-dark">View all destinations <ArrowRight size={18} /></Link>
        </div>
      </section>

      <section className="hidden-banner">
        <div>
          <span className="eyebrow light">GO BEYOND THE USUAL</span>
          <h2>There is more to discover.</h2>
          <p>Explore quieter beaches, green landscapes and lesser-known corners of the district.</p>
          <Link to="/hidden-places" className="button button-primary">Discover hidden places <ArrowRight size={18} /></Link>
        </div>
      </section>

      <section className="section">
        <SectionHeading eyebrow="PLAN YOUR STAY" title="Stay, eat and explore"
          description="Find accommodation and restaurants to help plan your Kanyakumari trip." />
        <div className="feature-grid">
          <Link to="/stays" className="feature-card">
            <Hotel size={30} /><h3>Find a stay</h3>
            <p>Explore hotels and resorts in the district.</p>
            <span>Explore stays <ArrowRight size={16} /></span>
          </Link>
          <Link to="/restaurants" className="feature-card">
            <Utensils size={30} /><h3>Find local food</h3>
            <p>Discover restaurants and dining options.</p>
            <span>Explore restaurants <ArrowRight size={16} /></span>
          </Link>
          <Link to="/travel-guide" className="feature-card">
            <Map size={30} /><h3>Plan your journey</h3>
            <p>Useful travel tips and map searches.</p>
            <span>Travel guide <ArrowRight size={16} /></span>
          </Link>
        </div>
      </section>
    </>
  );
}

function DestinationDirectory({ hiddenOnly = false }: { hiddenOnly?: boolean }) {
  const [search, setSearch] = useState('');
  const [category, setCategory] = useState('All');
  const available = hiddenOnly ? destinations.filter(place => place.hidden) : destinations;
  const categories = ['All', ...Array.from(new Set(available.map(place => place.category)))];

  const filtered = useMemo(() => available.filter(place => {
    const matchesSearch = `${place.name} ${place.area} ${place.category}`.toLowerCase().includes(search.toLowerCase());
    return matchesSearch && (category === 'All' || place.category === category);
  }), [available, search, category]);

  return (
    <section className="section page-section">
      <SectionHeading eyebrow={hiddenOnly ? 'LESSER-KNOWN PLACES' : 'EXPLORE KANYAKUMARI'}
        title={hiddenOnly ? 'Hidden places' : 'All destinations'}
        description={hiddenOnly ? 'Explore quieter places and lesser-known attractions. Check local access before visiting.' : 'Browse attractions, beaches, heritage sites and natural destinations.'} />
      <div className="filter-bar">
        <div className="search-box">
          <Search size={19} />
          <input value={search} onChange={event => setSearch(event.target.value)} placeholder="Search places or areas..." />
        </div>
        <div className="category-list">
          {categories.map(item => (
            <button key={item} className={category === item ? 'filter-chip active' : 'filter-chip'}
              onClick={() => setCategory(item)}>{item}</button>
          ))}
        </div>
      </div>
      {filtered.length ? <div className="card-grid">
        {filtered.map(place => <DestinationCard key={place.id} place={place} />)}
      </div> : <p className="empty-message">No places found. Try another search.</p>}
    </section>
  );
}

function DestinationDetail() {
  const { id } = useParams();
  const place = destinations.find(item => item.id === Number(id));
  if (!place) return <section className="section page-section"><h2>Destination not found</h2><Link to="/destinations">Back to destinations</Link></section>;

  const mapUrl = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(`${place.name}, Kanyakumari, Tamil Nadu, India`)}`;

  return (
    <section className="section page-section detail-layout">
      <img className="detail-image" src={place.image} alt={place.name} />
      <div className="detail-content">
        <span className="eyebrow">{place.category}</span>
        <h1>{place.name}</h1>
        <p className="location"><MapPin size={17} /> {place.area}, Kanyakumari</p>
        <p>{place.description}</p>
        <p>Before visiting, check local conditions, opening information, transport and any access restrictions.</p>
        <a className="button button-dark" href={mapUrl} target="_blank" rel="noreferrer">View on Google Maps <ExternalLink size={17} /></a>
        <Link to="/destinations" className="back-link">← Back to destinations</Link>
      </div>
    </section>
  );
}

function StaysPage() {
  return (
    <section className="section page-section">
      <SectionHeading eyebrow="ACCOMMODATION" title="Find your stay"
        description="Explore accommodation options. Contact each property to confirm rates and availability." />
      <div className="listing-grid">
        {stays.map(stay => (
          <article className="listing-card" key={stay.id}>
            <div className="listing-icon"><Hotel size={32} /></div>
            <div className="listing-content">
              <span className="card-category">Accommodation</span>
              <h3>{stay.name}</h3>
              <p className="location"><MapPin size={15} /> {stay.area}</p>
              <p>{stay.description}</p>
              <div className="listing-actions">
                <a className="button button-dark small-button" href={stay.map} target="_blank" rel="noreferrer">Find on Maps <ExternalLink size={15} /></a>
                <a className="button button-light small-button" href={stay.map} target="_blank" rel="noreferrer">Directions <MapPin size={15} /></a>
              </div>
            </div>
          </article>
        ))}
      </div>
      <p className="directory-note">Map links open Google Maps. Confirm exact addresses, prices, facilities and availability directly with each property.</p>
    </section>
  );
}

function RestaurantsPage() {
  return (
    <section className="section page-section">
      <SectionHeading eyebrow="LOCAL FOOD" title="Restaurants around Kanyakumari"
        description="Explore dining options and check current details before visiting." />
      <div className="listing-grid">
        {restaurants.map(restaurant => (
          <article className="listing-card" key={restaurant.id}>
            <div className="listing-icon"><Utensils size={32} /></div>
            <div className="listing-content">
              <span className="card-category">{restaurant.cuisine}</span>
              <h3>{restaurant.name}</h3>
              <p className="location"><MapPin size={15} /> {restaurant.area}</p>
              <p>{restaurant.description}</p>
              <div className="listing-actions">
                <a className="button button-dark small-button" href={restaurant.map} target="_blank" rel="noreferrer">Find on Maps <ExternalLink size={15} /></a>
              </div>
            </div>
          </article>
        ))}
      </div>
      <p className="directory-note">Check opening hours, menu and table availability directly with the restaurant.</p>
    </section>
  );
}

function TravelGuide() {
  const tips = [
    { title: 'Best time to visit', description: 'October to March is generally a popular period for sightseeing. Weather can vary, so check the forecast before travelling.' },
    { title: 'Getting around', description: 'Use local buses, taxis or other available transport. Check return transport before visiting remote places.' },
    { title: 'Sunrise and sunset', description: 'Kanyakumari is known for its coastal views. Check local weather and sunrise or sunset times on your travel date.' },
    { title: 'Responsible travel', description: 'Keep beaches clean, respect local communities and follow safety notices near the sea, waterfalls and forest areas.' }
  ];

  return (
    <section className="section page-section">
      <SectionHeading eyebrow="TRAVEL SMART" title="Kanyakumari travel guide"
        description="Useful tips to help plan a comfortable and responsible visit." />
      <div className="tips-grid">
        {tips.map((tip, index) => (
          <article className="tip-card" key={tip.title}>
            <span className="tip-number">{String(index + 1).padStart(2, '0')}</span>
            <h3>{tip.title}</h3><p>{tip.description}</p>
          </article>
        ))}
      </div>
      <div className="guide-map">
        <span className="eyebrow light">FIND YOUR WAY</span>
        <h2>Explore the district on the map</h2>
        <p>Search for attractions, transport and nearby services.</p>
        <a className="button button-primary" href="https://www.google.com/maps/search/tourist+places+in+Kanyakumari/" target="_blank" rel="noreferrer">Open Google Maps <ExternalLink size={17} /></a>
      </div>
    </section>
  );
}

function NotFound() {
  return <section className="section page-section not-found"><h1>Page not found</h1><p>The page you are looking for does not exist.</p><Link to="/" className="button button-dark">Return home</Link></section>;
}

export default function App() {
  return (
    <>
      <Header />
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/destinations" element={<DestinationDirectory />} />
          <Route path="/hidden-places" element={<DestinationDirectory hiddenOnly />} />
          <Route path="/destination/:id" element={<DestinationDetail />} />
          <Route path="/stays" element={<StaysPage />} />
          <Route path="/restaurants" element={<RestaurantsPage />} />
          <Route path="/travel-guide" element={<TravelGuide />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </main>
      <Footer />
    </>
  );
}
