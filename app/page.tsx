import Image from "next/image";
import { Header, Brand } from "@/components/header";
import { Icon } from "@/components/icons";
import { business, navigation, tyreCategories, services, gallery } from "@/lib/site-data";

function Button({ href, children, icon, variant = "red", external = false }: { href: string; children: React.ReactNode; icon?: "arrow" | "phone" | "pin" | "message"; variant?: "red" | "outline" | "dark" | "white"; external?: boolean }) {
  return <a className={`button button-${variant}`} href={href} target={external ? "_blank" : undefined} rel={external ? "noopener noreferrer" : undefined}>{icon && <Icon name={icon} width="18" height="18" />}<span>{children}</span><Icon name="arrow" className="button-arrow" width="18" height="18" /></a>;
}

function SectionIntro({ eyebrow, title, detail, dark = false, id }: { eyebrow: string; title: string; detail?: string; dark?: boolean; id: string }) {
  return <div className="section-intro"><div><span className={`eyebrow ${dark ? "eyebrow-dark" : ""}`}><span />{eyebrow}</span><h2 id={id}>{title}</h2></div>{detail && <p>{detail}</p>}</div>;
}

export default function Home() {
  return (
    <>
      <Header />
      <main id="home">
        <section className="hero" aria-labelledby="hero-title">
          <div className="container-wide">
            <div className="hero-grid">
              <div className="hero-heading"><span className="eyebrow"><span />HYDERABAD · SINCE 1995</span><h1 id="hero-title">TYRE<br /><em>BANK.</em></h1></div>
              <div className="hero-copy"><span className="hero-rule" /><h2>MRF Tyres &<br />Professional Tyre Care</h2><p>Expert guidance, dependable tyre services, and a local shop that has served Hyderabad for over three decades.</p><div className="hero-actions"><Button href={business.phoneHref} icon="phone">Call Now</Button><Button href={business.whatsappHref} icon="message" variant="outline" external>WhatsApp</Button></div><a className="text-link" href={business.directionsHref} target="_blank" rel="noopener noreferrer"><Icon name="pin" width="18" height="18" /> Get directions to Amberpet <Icon name="arrow" width="18" height="18" /></a></div>
            </div>
            <div className="hero-photo">
              <Image src="/images/legacy/banner_1.jpg" alt="Tyre Bank MRF tyre shop in Hyderabad" fill priority sizes="(max-width: 768px) 100vw, 1200px" />
              <div className="hero-photo-shade" /><div className="hero-photo-tag"><span className="tag-line" />THE SHOP BEHIND THE NAME <strong>AMBERPET, HYDERABAD</strong></div>
              <div className="hero-photo-count">01 / THE STOREFRONT</div>
            </div>
          </div>
        </section>

        <section className="highlights" aria-label="Tyre Bank highlights"><div className="container-wide highlight-grid"><div><strong>1995</strong><span>Established in Hyderabad</span></div><div><strong>30+</strong><span>Years serving customers</span></div><div><strong>MRF</strong><span>Tyres at the shop</span></div><div><strong>05</strong><span>Tyre care services</span></div></div></section>

        <section className="tyres-section section-pad" id="tyres" aria-labelledby="tyres-title"><div className="container-wide">
          <SectionIntro id="tyres-title" eyebrow="WHAT WE CARRY" title="The right tyres for the road ahead." detail="From daily commutes to working vehicles, explore the tyre categories shown on Tyre Bank’s existing site." />
          <div className="tyre-grid">{tyreCategories.map((category) => <article className="tyre-card" key={category.number}><div className="tyre-card-top"><span>{category.number} / TYRES</span><Icon name={category.icon} width="38" height="38" /></div><div className="tyre-ring" aria-hidden="true"><span /></div><div className="tyre-card-bottom"><h3>{category.name}</h3><p>{category.note}</p><a href={business.phoneHref} aria-label={`Call about ${category.name} tyres`}><Icon name="arrow" width="20" height="20" /></a></div></article>)}</div>
          <div className="category-note"><span>ALSO LISTED ON THE EXISTING SITE</span><p>Off the road (OTR) <b>·</b> Farm services <b>·</b> Tubes & flaps</p><a href={business.phoneHref}>Ask about availability <Icon name="arrow" width="18" height="18" /></a></div>
        </div></section>

        <section className="services-section section-pad" id="services" aria-labelledby="services-title"><div className="container-wide">
          <SectionIntro id="services-title" eyebrow="IN THE SERVICE BAY" title="Tyre care, handled with attention." detail="The essentials that help keep your wheels ready for the road, all listed on Tyre Bank’s existing website." dark />
          <div className="services-layout"><div className="services-photo"><Image src="/images/legacy/banner_5.jpg" alt="Wheel alignment equipment in Tyre Bank's service bay" fill sizes="(max-width: 900px) 100vw, 38vw" /><div className="service-photo-label">SERVICE BAY <span>TYRE BANK / HYDERABAD</span></div></div><div className="service-list">{services.map((service) => <article className="service-item" key={service.number}><span className="service-number">{service.number}</span><span className="service-icon"><Icon name={service.icon} width="28" height="28" /></span><div><h3>{service.title}</h3><p>{service.description}</p></div><Icon name="arrow" className="service-arrow" width="20" height="20" /></article>)}</div></div>
          <div className="services-bottom"><p>Need help choosing a tyre or booking a service?</p><Button href={business.phoneHref} icon="phone" variant="white">Speak to the shop</Button></div>
        </div></section>

        <section className="about-section section-pad" id="about" aria-labelledby="about-title"><div className="container-wide about-grid"><div className="about-visual"><div className="about-image"><Image src="/images/legacy/banner_4.jpg" alt="Tyre Bank shop interior with tyre displays" fill sizes="(max-width: 900px) 100vw, 48vw" /></div><div className="about-year"><span>SINCE</span><strong>1995</strong><span>HYDERABAD</span></div></div><div className="about-content"><span className="eyebrow"><span />OUR STORY</span><h2 id="about-title">A local name, built on the road.</h2><p>Tyre Bank was established in 1995 by Mr. Anatha Srinivas. The business has long focused on helping motorists find the right tyre through quality service, value and practical advice close to home.</p><p>Today, the shop continues to pair tyre choices with services such as fitting, alignment, balancing and nitrogen filling.</p><div className="owner-card"><div className="owner-monogram" aria-hidden="true">AS</div><div><span>FOUNDER, AS NAMED ON THE ORIGINAL SITE</span><strong>Mr. Anatha Srinivas</strong></div></div></div></div></section>

        <section className="gallery-section section-pad" id="gallery" aria-labelledby="gallery-title"><div className="container-wide"><SectionIntro id="gallery-title" eyebrow="A LOOK INSIDE" title="Around the shop." detail="Real photos from Tyre Bank’s existing website, showing the storefront, tyres and service areas." /><div className="gallery-grid">{gallery.map((photo, index) => <figure className={`gallery-item gallery-item-${index + 1}`} key={photo.src}><Image src={photo.src} alt={photo.alt} fill sizes="(max-width: 640px) 100vw, (max-width: 900px) 50vw, 33vw" /><figcaption><span>0{index + 1}</span>{photo.caption}</figcaption></figure>)}</div><p className="gallery-note">Archive imagery from Tyre Bank’s existing website. Shop appearance may have changed.</p></div></section>

        <section className="contact-section" id="contact" aria-labelledby="contact-title"><div className="container-wide contact-grid"><div className="contact-content"><span className="eyebrow eyebrow-dark"><span />VISIT OR GET IN TOUCH</span><h2 id="contact-title">Your next stop<br />starts here.</h2><p>Find Tyre Bank at Road No. 6 X Road in Amberpet. Call ahead for tyre availability or service enquiries.</p><div className="contact-details"><div><span>THE ADDRESS</span><strong>{business.addressLine1}<br />{business.addressLine2}</strong></div><div><span>CALL THE SHOP</span><a href={business.phoneHref}>{business.phoneDisplay}</a><small>Landline: <a href={business.landlineHref}>{business.landlineDisplay}</a></small></div><div><span>EMAIL</span><a href={`mailto:${business.email}`}>{business.email}</a></div></div><div className="contact-actions"><Button href={business.directionsHref} icon="pin" variant="white" external>Get Directions</Button><Button href={business.whatsappHref} icon="message" variant="dark" external>WhatsApp</Button></div></div><div className="map-panel"><iframe title="Map showing Tyre Bank in Amberpet, Hyderabad" src={business.mapEmbedHref} loading="lazy" referrerPolicy="no-referrer-when-downgrade" allowFullScreen /><div className="map-label"><Icon name="pin" width="20" height="20" /> AMBERPET, HYDERABAD</div></div></div></section>
      </main>
      <footer className="footer"><div className="container-wide"><div className="footer-main"><div className="footer-brand"><Brand light /><p>MRF tyres and professional tyre care in Amberpet, Hyderabad since 1995.</p></div><div className="footer-nav"><span>EXPLORE</span>{navigation.map((item) => <a key={item.label} href={item.href}>{item.label}</a>)}</div><div className="footer-contact"><span>CONTACT</span><a href={business.phoneHref}>{business.phoneDisplay}</a><a href={business.whatsappHref} target="_blank" rel="noopener noreferrer">WhatsApp the shop</a><a href={business.directionsHref} target="_blank" rel="noopener noreferrer">Get directions</a><p>Road No. 6 X Road, Amberpet<br />Hyderabad, Telangana 500013</p></div></div><div className="footer-bottom"><span>© {new Date().getFullYear()} TYRE BANK. ALL RIGHTS RESERVED.</span><span>MADE FOR THE ROAD AHEAD.</span></div></div></footer>
    </>
  );
}
