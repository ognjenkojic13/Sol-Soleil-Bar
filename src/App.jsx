import { useState, useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const menuTabs = ['Beer', 'Wine & Bubbles', 'Spirits', 'Cocktails', 'Soft & Organic', 'Hot Drinks', 'Snacks'];

const menuData = {
  'Beer': {
    left: {
      title: 'DRAFT',
      items: [
        { name: 'Stella 25cl', price: '3' },
        { name: 'Stella 33cl', price: '4' },
        { name: 'Stella 50cl', price: '6' },
        { name: 'Cherry Chouffe', price: '5,2' },
        { name: 'Victoria', price: '4,8' },
      ],
    },
    right: {
      title: 'TRAPPIST',
      items: [
        { name: 'Westmalle Dubbel', price: '4,2' },
        { name: 'Westmalle Tripel', price: '4,8' },
        { name: 'Orval', price: '5,2' },
        { name: 'Rochefort 8', price: '5,5' },
        { name: 'Rochefort 10', price: '5,2' },
      ],
    },
  },
  'Wine & Bubbles': {
    left: {
      title: 'WINE',
      priceHeaders: ['GLASS', 'BOTTLE'],
      items: [
        { name: 'White', prices: ['4,50', '18,00'] },
        { name: 'Red', prices: ['4,50', '18,00'] },
        { name: 'Rosé', prices: ['4,50', '18,00'] },
      ],
    },
    right: {
      title: 'BUBBLES',
      items: [
        { name: 'Prosecco', price: '6,00' },
        { name: 'Cava', price: '7,50' },
        { name: "Crémant d'Alsace", price: '7,50' },
        { name: 'Champagne', note: 'bottle', price: 'from 55,00' },
      ],
    },
  },
  'Spirits': {
    left: {
      title: 'GIN — RUM — VODKA',
      items: [
        { name: 'Gin', note: 'Hendricks / Tanqueray / Monkey 47', price: '9,00' },
        { name: 'Rum', note: 'Bacardi / Havana 7 / Diplomatico', price: '8,50' },
        { name: 'Vodka', note: 'Absolut / Grey Goose', price: '8,50' },
        { name: 'Tequila', note: 'Cuervo / Patron', price: '8,50' },
      ],
    },
    right: {
      title: 'WHISKY — COGNAC',
      items: [
        { name: 'Jameson', price: '9,00' },
        { name: 'Glenfiddich 12', price: '10,00' },
        { name: "Maker's Mark", price: '10,00' },
        { name: 'Hennessy VSOP', price: '11,00' },
      ],
    },
  },
  'Cocktails': {
    left: {
      title: 'COCKTAILS',
      items: [
        { name: 'Old Fashioned', note: 'bourbon, bitters, sugar', price: '12,00' },
        { name: 'Negroni', note: 'gin, campari, vermouth', price: '12,00' },
        { name: 'Mojito', note: 'rum, mint, lime, sugar', price: '11,00' },
        { name: 'Espresso Martini', note: 'vodka, kahlúa, espresso', price: '12,00' },
      ],
    },
    right: {
      title: '',
      items: [
        { name: 'Margarita', note: 'tequila, cointreau, lime', price: '12,00' },
        { name: 'Gin & Tonic', note: 'house gin, tonic, garnish', price: '10,00' },
        { name: 'Moscow Mule', note: 'vodka, ginger beer, lime', price: '10,00' },
        { name: 'Cosmopolitan', note: 'vodka, cointreau, cranberry', price: '11,00' },
      ],
    },
  },
  'Soft & Organic': {
    left: {
      title: 'SOFT DRINKS',
      items: [
        { name: 'Cola', price: '3,00' },
        { name: 'Cola Zero', price: '3,00' },
        { name: 'Fanta', price: '3,00' },
        { name: 'Sprite', price: '3,00' },
        { name: 'Tonic', note: 'Fever-Tree', price: '3,50' },
        { name: 'Ginger Beer', price: '3,50' },
      ],
    },
    right: {
      title: 'ORGANIC',
      items: [
        { name: 'Still Water', note: '50cl', price: '2,50' },
        { name: 'Sparkling Water', note: '33cl', price: '3,00' },
        { name: 'Biotta Juice', note: 'organic', price: '4,50' },
        { name: 'Kombucha', note: 'organic', price: '4,50' },
      ],
    },
  },
  'Hot Drinks': {
    left: {
      title: 'COFFEE',
      items: [
        { name: 'Espresso', price: '2,50' },
        { name: 'Americano', price: '3,00' },
        { name: 'Latte', price: '3,50' },
        { name: 'Cappuccino', price: '3,50' },
        { name: 'Flat White', price: '3,50' },
      ],
    },
    right: {
      title: 'HOT',
      items: [
        { name: 'Tea', note: 'your choice', price: '3,00' },
        { name: 'Hot Chocolate', price: '4,00' },
        { name: 'Irish Coffee', note: 'whisky, coffee, cream', price: '8,00' },
      ],
    },
  },
  'Snacks': {
    image: '/menu/Gemini_Generated_Image_8ne85k8ne85k8ne8.png',
    left: {
      title: 'BITES',
      items: [
        { name: 'Cheese & Charcuterie', note: 'house board', price: '12,00' },
        { name: 'Olives', note: 'seasoned', price: '4,00' },
        { name: 'Bread & Dips', note: 'hummus, pesto', price: '6,00' },
        { name: 'Mixed Nibbles', price: '5,00' },
      ],
    },
    right: {
      title: '',
      items: [
        { name: 'Crisps', price: '2,50' },
        { name: 'Roasted Nuts', price: '3,00' },
        { name: 'Soup of the Day', note: 'with bread', price: '7,00' },
      ],
    },
  },
};

const galleryImages = [
  '/Sol-Soleil-Bar/footer.png',
  '/Sol-Soleil-Bar/gallery2.png',
  '/Sol-Soleil-Bar/gallery3.png',
  '/Sol-Soleil-Bar/gallery4.png',
];

function splitChars(text) {
  return text.split('').map((char, i) => (
    <span key={i} className="char-wrap">
      <span className="char">{char === ' ' ? '\u00A0' : char}</span>
    </span>
  ));
}

function WaveText({ text, tag: Tag = 'div', className }) {
  const ref = useRef(null);
  useEffect(() => {
    if (!ref.current) return;
    const chars = ref.current.querySelectorAll('.char');
    gsap.fromTo(chars,
      { yPercent: 120 },
      {
        yPercent: 0, stagger: 0.018, duration: 0.85, ease: 'power3.out',
        scrollTrigger: { trigger: ref.current, start: 'top 88%', once: true },
      }
    );
  }, []);
  return <Tag ref={ref} className={className}>{splitChars(text)}</Tag>;
}

function IconInstagram() {
  return (
    <svg width="32" height="32" viewBox="0 0 24 24" fill="none"
      stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <rect x="2" y="2" width="20" height="20" rx="5" ry="5"/>
      <circle cx="12" cy="12" r="4"/>
      <circle cx="17.5" cy="6.5" r="0.5" fill="currentColor" stroke="none"/>
    </svg>
  );
}

function HeroSection() {
  const titleRef = useRef(null);
  const stampRef = useRef(null);

  useEffect(() => {
    const chars = titleRef.current.querySelectorAll('.char');

    gsap.fromTo(chars,
      { yPercent: 120 },
      { yPercent: 0, stagger: 0.04, duration: 1.3, ease: 'power4.out', delay: 0.15 }
    );
    gsap.fromTo(stampRef.current,
      { opacity: 0, scale: 0.7 },
      { opacity: 1, scale: 1, duration: 0.6, ease: 'back.out(1.7)', delay: 0.9 }
    );
    gsap.to(stampRef.current, {
      rotation: -10,
      repeat: -1,
      yoyo: true,
      ease: 'sine.inOut',
      duration: 0.9,
      delay: 1.5,
    });
  }, []);

  return (
    <section className="section-hero">
      <div className="hero-bg" />
      <div className="hero-flex">
        <div className="hero-logo-wrap">
          <div ref={titleRef} className="hero-logo-text">
            <div className="hero-logo-line">{splitChars('SEL &')}</div>
            <div className="hero-logo-line">{splitChars('SOLEIL')}</div>
          </div>
        </div>
        <div ref={stampRef} className="hero-stamp">
          <span style={{color:'#002395'}}>open</span>{' '}
          <span style={{color:'#ffffff'}}>every</span>{' '}
          <span style={{color:'#EF4135'}}>day</span>
        </div>
        <div className="hero-panels">
          <div className="hero-panel">
            <p className="panel-eyebrow">Bd du Littoral,</p>
            <p className="panel-eyebrow" style={{whiteSpace:'nowrap'}}>06160</p>
            <p className="panel-city">
              <span style={{color:'#002395'}}>AN</span><span style={{color:'#ffffff'}}>TI</span><span style={{color:'#EF4135'}}>BES</span>
            </p>
          </div>
          <a href="https://www.selsoleil.fr" target="_blank" rel="noopener noreferrer"
            className="hero-panel-right">
            <span>@sel.soleil</span>
            <IconInstagram />
          </a>
        </div>
      </div>
    </section>
  );
}

function MenuCol({ col, hasHeaderSpacer }) {
  if (!col) return null;
  const hasMultiPrice = col.items?.some(i => i.prices);

  return (
    <div className="menu-col">
      {col.title && <div className="menu-col-title">{col.title}</div>}
      {hasHeaderSpacer && <div className="menu-row menu-row--spacer" />}
      {hasMultiPrice && col.priceHeaders && (
        <div className="menu-row menu-row--header">
          <span className="menu-item-name" />
          {col.priceHeaders.map(h => (
            <span key={h} className="menu-price-header">{h}</span>
          ))}
        </div>
      )}
      {col.items?.map((item, i) => (
        <div key={i} className="menu-row">
          <div className="menu-item-name-wrap">
            <span className="menu-item-name">{item.name}</span>
            {item.note && <span className="menu-item-note">{item.note}</span>}
          </div>
          {item.prices ? (
            item.prices.map((p, j) => (
              <span key={j} className="menu-item-price">{p}</span>
            ))
          ) : (
            <span className="menu-item-price">{item.price}</span>
          )}
        </div>
      ))}
    </div>
  );
}

function MenuSection() {
  const [active, setActive] = useState('Beer');
  const gridRef = useRef(null);

  const handleTab = (tab) => {
    if (tab === active) return;
    gsap.fromTo(gridRef.current,
      { opacity: 0, y: 12 },
      { opacity: 1, y: 0, duration: 0.3, ease: 'power2.out' }
    );
    setActive(tab);
  };

  const data = menuData[active];

  return (
    <section className="section-menu" id="menu">
      <div className="padding-global">
        <div className="container-large">
          <WaveText text="here for drinks" className="section-heading" />
          <div className="tabs-wrap">
            <div className="tabs-list" role="tablist">
              {menuTabs.map(tab => (
                <button
                  key={tab}
                  role="tab"
                  aria-selected={active === tab}
                  className={`tab-btn${active === tab ? ' is-active' : ''}`}
                  onClick={() => handleTab(tab)}
                >
                  {tab}
                </button>
              ))}
            </div>
            <div ref={gridRef} className="menu-grid">
              <MenuCol col={data.left} hasHeaderSpacer={!!data.right?.priceHeaders} />
              <MenuCol col={data.right} />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function GallerySection() {
  return (
    <section className="section-gallery">
      <div className="gallery-grid">
        {galleryImages.map((src, i) => (
          <div key={i} className={`gallery-item gallery-item--${i + 1}`}>
            <img src={src} alt={`gallery ${i + 1}`} className="gallery-img" />
          </div>
        ))}
      </div>
    </section>
  );
}

const slideshowImages = [
  '/Sol-Soleil-Bar/menu1.png',
  '/Sol-Soleil-Bar/menu2.png',
  '/Sol-Soleil-Bar/menu3.png',
  '/Sol-Soleil-Bar/menu4.png',
];

function MapSection() {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent(i => (i + 1) % slideshowImages.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="section-map">
      <div className="map-label">
        <p className="map-location">fresh from the sea.</p>
        <p className="map-location"><span style={{color:'#4B7BFF'}}>local</span> <span style={{color:'#ffffff'}}>&</span> <span style={{color:'#EF4135'}}>domestic.</span></p>
        <p className="map-location">sun-kissed bites.</p>
      </div>
      <div className="slideshow-wrap">
        {slideshowImages.map((src, i) => (
          <img
            key={i}
            src={src}
            alt={`slide ${i + 1}`}
            className={`slideshow-img${i === current ? ' is-active' : ''}`}
          />
        ))}
        <div className="slideshow-dots">
          {slideshowImages.map((_, i) => (
            <button
              key={i}
              className={`slideshow-dot${i === current ? ' is-active' : ''}`}
              onClick={() => setCurrent(i)}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

function JobsSection() {
  return (
    <section className="section-cta section-cta--jobs">
      <div className="padding-global" style={{position:'relative', zIndex:1, width:'100%'}}>
        <div className="cta-wrap">
          <WaveText text="book a table" className="section-heading" />
          <p className="cta-sub">
            reserve your spot at the bar.<br />
            we'll save the best seat for you.
          </p>
          <div className="cta-buttons">
            <a href="https://www.selsoleil.fr" className="cta-btn">+33 4 94 97 00 00</a>
            <a href="https://www.selsoleil.fr" className="cta-btn">info@selsoleil.fr</a>
          </div>
        </div>
      </div>
    </section>
  );
}

function HoursSection() {
  return (
    <section className="section-cta section-cta--grey">
      <div className="padding-global">
        <div className="cta-wrap">
          <WaveText text="open mostly" className="section-heading" />
          <p className="cta-sub">we are open every day from 10am until 3am.</p>
          <div className="cta-buttons">
            <a href="https://www.selsoleil.fr" className="cta-btn">email us</a>
            <a href="tel:" className="cta-btn cta-btn--disabled" aria-disabled="true">call us</a>
          </div>
        </div>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer className="site-footer">
      <div className="footer-top">
        <div className="footer-address">
          <p>Bd du Littoral,</p>
          <p>06160</p>
          <p><span style={{color:'#002395'}}>AN</span><span style={{color:'#ffffff'}}>TI</span><span style={{color:'#EF4135'}}>BES</span></p>
        </div>
        <a href="https://www.selsoleil.fr" target="_blank" rel="noopener noreferrer"
          className="footer-insta">
          @sel.soleil <IconInstagram />
        </a>
      </div>
      <div className="footer-bottom">
        <div className="footer-logo">{splitChars('SEL & SOLEIL')}</div>
        <div className="footer-legal">
          <div className="footer-legal-left">
            <a href="#">Cookie preferences</a>
            <a href="#">Privacy policy</a>
          </div>
          <span>Designed by Ognjen Kojic</span>
        </div>
      </div>
    </footer>
  );
}

export default function App() {
  return (
    <>
      <HeroSection />
      <MenuSection />
      <MapSection />
      <JobsSection />
      <HoursSection />
      <Footer />
    </>
  );
}
