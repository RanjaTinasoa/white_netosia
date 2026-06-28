"use client";

import * as React from "react";
import HeroBackground from "@/components/HeroBackground";
import RotatingText from "@/components/RotatingText";
import StaggeredMenu from "@/components/StaggeredMenu";
import TeamCarousel from "@/components/TeamCarousel";
import ContactStepper from "@/components/ContactStepper";

interface Project {
  id: string;
  title: string;
  tags: string[];
  industry: string;
  techStack: string[];
  scope: string[];
  imagePlaceholder: string;
  bgColor: string;
}

export default function Home() {
  const [activeProjectId, setActiveProjectId] = React.useState<string | null>("easypark");

  const projects: Project[] = [
    {
      id: "arrive",
      title: "Arrive",
      tags: ["Payload CMS"],
      industry: "Logistics & Transport",
      techStack: ["Payload CMS", "NextJS", "Vercel"],
      scope: ["Design", "Website development"],
      imagePlaceholder: "▲ Arrive Terminal / Interface",
      bgColor: "#f1f5f9", 
    },
    {
      id: "easypark",
      title: "EasyPark",
      tags: ["Storyblok"],
      industry: "Parking & Mobility",
      techStack: ["Storyblok", "NextJS", "Vercel"],
      scope: ["Design", "Website development", "Maintenance"],
      imagePlaceholder: "❖ EasyPark App Ecosystem",
      bgColor: "#fce7f3", 
    },
    {
      id: "novalytics",
      title: "Nova Analytics",
      tags: ["Sanity CMS"],
      industry: "Finance & Big Data",
      techStack: ["Sanity", "NextJS", "Tailwind"],
      scope: ["Architecture", "Development"],
      imagePlaceholder: "◆ Nova Real-time Analytics Engine",
      bgColor: "#e0f2fe", 
    }
  ];

  const bentoServices = [
    { title: "Design UI/UX Moderne", desc: "Interfaces brutales chic, épurées et intuitives." },
    { title: "Site Vitrine sur Mesure", desc: "Du code unique adapté à l'image de votre marque." },
    { title: "Responsive Absolu", desc: "Expérience fluide sur mobile, tablette et desktop." },
    { title: "Optimisation SEO", desc: "Structure sémantique conçue pour dominer Google." },
    { title: "Performance & Vitesse", desc: "Core Web Vitals parfaits, chargement instantané." },
    { title: "Appels à l'Action (CTA)", desc: "Stratégie de conversion pour maximiser vos leads." },
    { title: "Sécurité Renforcée", desc: "Architecture Headless éliminant les failles traditionnelles." },
    { title: "Hébergement & Domaine", desc: "Configuration cloud scalable sur Vercel et AWS." },
    { title: "Maintenance Réactive", desc: "Suivi technique continu et mises à jour de sécurité." },
    { title: "Formulaires Intégrés", desc: "Connexion directe avec vos CRM (Hubspot, Notion...)." },
    { title: "Animations Modernes", desc: "Interactivité subtile via Framer Motion." },
    { title: "Accessibilité (A11y)", desc: "Sites navigables pour tous, conformes aux normes RGAA." },
    { title: "Optimisation Conversion", desc: "A/B testing natif et tracking respectueux de la vie privée." },
    { title: "Accompagnement Dédié", desc: "Un canal Slack partagé direct avec nos ingénieurs." }
  ];

  return (
    <main style={{ 
      fontFamily: 'system-ui, -apple-system, sans-serif', 
      backgroundColor: '#ffffff', 
      color: '#000000', 
      minHeight: '100vh',
      width: '100%'
    }}>

      {/* Style CSS injecté pour masquer la navigation classique sur mobile et gérer le Bento */}
      <style jsx global>{`
        .desktop-nav { display: flex; align-items: center; gap: 25px; }
        .mobile-nav { display: none; }
        .bento-grid {
          display: grid;
          grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));
          gap: 1.5rem;
        }
        @media (max-width: 768px) {
          .desktop-nav { display: none; }
          .mobile-nav { display: block; }
        }
      `}</style>

      {/* ================= HEADER FLOATING ================= */}
      <header style={{
        position: 'fixed',
        top: '20px',
        left: '50%',
        transform: 'translateX(-50%)',
        width: 'calc(100% - 40px)',
        maxWidth: '1200px',
        height: '70px',
        backgroundColor: 'rgba(255, 255, 255, 0.4)', 
        backdropFilter: 'blur(20px)', 
        WebkitBackdropFilter: 'blur(20px)',
        border: 'none', 
        borderRadius: '35px',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        padding: '0 30px',
        zIndex: 100,
        boxShadow: '0 4px 30px rgba(0, 0, 0, 0.02)' 
      }}>
        <div style={{ fontSize: '1.25rem', fontWeight: 'bold', letterSpacing: '0.05em', textTransform: 'uppercase' }}>
          Netosia<span style={{ background: "linear-gradient(90deg, #0070f3, #00E5A3)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent" }}>.</span>
        </div>

        {/* Menu Desktop classique */}
        <nav className="desktop-nav">
          <a href="#services" style={{ color: '#475569', textDecoration: 'none', fontSize: '0.9rem', fontWeight: '500' }}>Services</a>
          <a href="#projets" style={{ color: '#475569', textDecoration: 'none', fontSize: '0.9rem', fontWeight: '500' }}>Portfolio</a>
          <a href="#approche" style={{ color: '#475569', textDecoration: 'none', fontSize: '0.9rem', fontWeight: '500' }}>Approche</a>
          <a href="#equipe" style={{ color: '#475569', textDecoration: 'none', fontSize: '0.9rem', fontWeight: '500' }}>Équipe</a>
          <a href="#contact" style={{ color: '#ffffff', background: 'linear-gradient(90deg, #0070f3, #00E5A3)', textDecoration: 'none', fontSize: '0.85rem', fontWeight: '600', padding: '10px 22px', borderRadius: '20px' }}>Contact</a>
        </nav>

        {/* Menu Mobile interactif ReactBits Staggered */}
        <div className="mobile-nav">
          <StaggeredMenu />
        </div>
      </header>
      
      {/* ================= HERO SECTION ================= */}
      <section style={{ position: 'relative', minHeight: '100vh', width: '100%', overflow: 'hidden' }}>
        <HeroBackground />
        
        <div style={{
          position: 'relative',
          zIndex: 10,
          maxWidth: '1000px',
          margin: '0 auto',
          padding: '140px 2rem 0 2rem',
          minHeight: '100vh',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'center',
          textAlign: 'center'
        }}>
          {/* Titre principal adapté avec le composant "Rotating Text" */}
          <h1 style={{ 
            fontSize: 'min(4.5rem, 9vw)', 
            fontWeight: '700', 
            lineHeight: '1.2', 
            letterSpacing: '-0.02em', 
            color: '#000000', 
            margin: '0 0 4rem 0'
          }}>
            Nous créons des sites <br />
            <RotatingText
  texts={["modernes", "rapides", "élégants", "optimisés SEO", "sur mesure"]}
  mainClassName="overflow-hidden inline-flex"
  staggerFrom="last"
  initial={{ y: "100%" }}
  animate={{ y: 0 }}
  exit={{ y: "-120%" }}
  staggerDuration={0.025}
  splitLevelClassName="overflow-hidden"
  transition={{ type: "spring", damping: 30, stiffness: 400 }}
  rotationInterval={2500}
  splitBy="characters"
  auto
  loop
  style={{
    background: "linear-gradient(90deg, #3263b2, #05c58f)", // Dégradé bleu -> vert exact
    WebkitBackgroundClip: "text",
    WebkitTextFillColor: "transparent",
    fontWeight: "800",
    paddingRight: "4px"
  }}
/>
          </h1>

          <p style={{ 
            fontSize: '1.15rem', 
            color: '#334155', 
            maxWidth: '650px', 
            lineHeight: '1.6',
            margin: '0 0 2.5rem 0'
          }}>
            Nous construisons des expériences numériques sur-mesure pour les entreprises qui refusent les compromis. Architecture scalable, performance garantie, autonomie marketing incluse.
          </p>
          
          <div style={{ display: 'flex', alignItems: 'center', gap: '20px' }}>
            <a href="#contact" style={{
              background: 'linear-gradient(90deg, #0070f3, #00E5A3)', 
              color: '#ffffff',
              padding: '0.8rem 2.2rem',
              borderRadius: '20px',
              fontWeight: '600',
              fontSize: '0.95rem',
              textDecoration: 'none',
              boxShadow: '0 10px 25px rgba(0, 112, 243, 0.2)'
            }}>
              Démarrer
            </a>
            
            <div style={{
              backgroundColor: 'rgba(0, 0, 0, 0.03)', 
              backdropFilter: 'blur(10px)',
              WebkitBackdropFilter: 'blur(10px)',
              padding: '0.8rem 1.5rem',
              borderRadius: '20px',
              fontSize: '0.9rem',
              color: '#1e293b',
              fontWeight: '500'
            }}>
              Noté 5 étoiles sur Google
            </div>
          </div>
        </div>
      </section>

      {/* ================= SECTION SERVICES : MAGIC BENTO GRID ================= */}
      <section id="services" style={{ padding: '8rem 2rem', maxWidth: '1200px', margin: '0 auto', borderTop: '1px solid #e2e8f0' }}>
        <span style={{ fontSize: '0.8rem', textTransform: 'uppercase', letterSpacing: '0.15em', background: "linear-gradient(90deg, #0070f3, #00E5A3)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent", fontWeight: '700' }}>// Notre Offre Complète</span>
        <h2 style={{ fontSize: '3rem', fontWeight: '800', letterSpacing: '-0.03em', margin: '1rem 0 4rem 0' }}>L'écosystème Netosia.</h2>
        
        {/* Structure Magic Bento */}
        <div className="bento-grid">
          {bentoServices.map((service, index) => (
            <div 
              key={index}
              style={{
                backgroundColor: '#ffffff',
                border: '1px solid #e2e8f0',
                borderRadius: '16px',
                padding: '2rem',
                transition: 'all 0.3s cubic-bezier(0.25, 1, 0.5, 1)',
                cursor: 'default',
                boxShadow: '0 4px 6px rgba(0,0,0,0.01)'
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.borderColor = '#0070f3';
                e.currentTarget.style.transform = 'translateY(-4px)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.borderColor = '#e2e8f0';
                e.currentTarget.style.transform = 'translateY(0)';
              }}
            >
              <h3 style={{ fontSize: '1.25rem', fontWeight: '700', margin: '0 0 10px 0', color: '#000000' }}>{service.title}</h3>
              <p style={{ color: '#475569', lineHeight: '1.5', fontSize: '0.9rem', margin: 0 }}>{service.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* ================= SECTION PORTFOLIO ================= */}
      <section id="projets" style={{ padding: '4rem 2rem 8rem 2rem', maxWidth: '1200px', margin: '0 auto' }}>
        <span style={{ fontSize: '0.8rem', textTransform: 'uppercase', letterSpacing: '0.15em', color: '#64748b', fontWeight: '700' }}>// Case Studies</span>
        <div style={{ display: 'flex', flexDirection: 'column', marginTop: '3rem' }}>
          {projects.map((project) => {
            const isOpened = activeProjectId === project.id;
            return (
              <div key={project.id} onClick={() => setActiveProjectId(isOpened ? null : project.id)} style={{ backgroundColor: '#ffffff', padding: '2.5rem 0', cursor: 'pointer', borderBottom: '1px solid #e2e8f0' }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1.5rem' }}>
                  <h3 style={{ fontSize: '2.5rem', fontWeight: '700', margin: 0, color: isOpened ? '#000000' : '#94a3b8', transition: 'color 0.3s ease' }}>{project.title}</h3>
                  <div style={{ display: 'flex', gap: '10px' }}>
                    {project.tags.map(t => <span key={t} style={{ backgroundColor: '#f1f5f9', padding: '6px 14px', borderRadius: '20px', fontSize: '0.8rem', color: '#475569' }}>{t}</span>)}
                  </div>
                </div>
                <div style={{ display: 'grid', gridTemplateColumns: isOpened ? 'repeat(auto-fit, minmax(300px, 1fr))' : '1fr', gap: isOpened ? '3rem' : '0px', transition: 'all 0.4s ease' }}>
                  <div style={{ display: isOpened ? 'flex' : 'none', flexDirection: 'column', gap: '2rem' }} onClick={(e) => e.stopPropagation()}>
                    <div><div style={{ fontSize: '0.8rem', color: '#94a3b8', textTransform: 'uppercase' }}>Industry</div><div style={{ fontSize: '1.25rem', fontWeight: '600' }}>{project.industry}</div></div>
                    <div><div style={{ fontSize: '0.8rem', color: '#94a3b8', textTransform: 'uppercase' }}>Technical Stack</div><div style={{ display: 'flex', flexDirection: 'column', fontSize: '1.1rem', color: '#334155' }}>{project.techStack.map(t => <div key={t}>{t}</div>)}</div></div>
                    <div><div style={{ fontSize: '0.8rem', color: '#94a3b8', textTransform: 'uppercase' }}>Scope</div><div style={{ display: 'flex', flexDirection: 'column', fontSize: '1.1rem', color: '#64748b' }}>{project.scope.map(s => <div key={s}>{s}</div>)}</div></div>
                  </div>
                  <div style={{ backgroundColor: project.bgColor, borderRadius: '20px', height: isOpened ? '450px' : '90px', display: 'flex', alignItems: 'center', justifyContent: 'center', position: 'relative', overflow: 'hidden', transition: 'height 0.4s ease' }} onClick={(e) => e.stopPropagation()}>
                    <div style={{ fontWeight: '700', color: '#000000', opacity: isOpened ? 0.5 : 0.15 }}>{project.imagePlaceholder}</div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </section>

      {/* ================= SECTION APPROCHE ================= */}
      <section id="approche" style={{ padding: '8rem 2rem', maxWidth: '1200px', margin: '0 auto', borderTop: '1px solid #e2e8f0' }}>
        <span style={{ fontSize: '0.8rem', textTransform: 'uppercase', letterSpacing: '0.15em', color: '#64748b', fontWeight: '700' }}>// Notre Approche</span>
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: '4rem', marginTop: '3rem' }}>
          <div style={{ flex: '1 1 400px' }}>
            <h2 style={{ fontSize: '2.5rem', fontWeight: '800', lineHeight: '1.2', margin: 0 }}>Ingénierie rigoureuse et vision produit globale.</h2>
          </div>
          <div style={{ flex: '1 1 500px', display: 'flex', flexDirection: 'column', gap: '1.5rem', color: '#334155', lineHeight: '1.7', fontSize: '1.1rem' }}>
            <p>Nous concevons des écosystèmes entiers de contenu basé sur des architectures composables hautement scalables.</p>
            <p>Notre but est de briser les barrières techniques des entreprises en unifiant leurs outils de communication et de vente à travers des socles techniques modernes rapides comme l'éclair.</p>
          </div>
        </div>
      </section>

      {/* ================= SECTION ÉQUIPE : CAROUSEL REACTBITS ================= */}
      <section id="equipe" style={{ padding: '6rem 2rem 8rem 2rem', maxWidth: '1200px', margin: '0 auto', borderTop: '1px solid #e2e8f0' }}>
        <span style={{ fontSize: '0.8rem', textTransform: 'uppercase', letterSpacing: '0.15em', background: "linear-gradient(90deg, #0070f3, #00E5A3)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent", fontWeight: '700' }}>// Notre Équipe</span>
        <h2 style={{ fontSize: '2.5rem', fontWeight: '800', margin: '1rem 0 2rem 0' }}>Les experts derrière Netosia.</h2>
        
        {/* Injection du carrousel fluide à 4 membres */}
        <TeamCarousel />
      </section>

      {/* ================= SECTION CONTACT : STEPPER FORM ================= */}
      <section id="contact" style={{ padding: '8rem 2rem', backgroundColor: '#f8fafc', borderTop: '1px solid #e2e8f0' }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto', display: 'flex', flexWrap: 'wrap', gap: '4rem' }}>
          <div style={{ flex: '1 1 400px', display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
            <span style={{ fontSize: '0.8rem', textTransform: 'uppercase', letterSpacing: '0.15em', color: '#64748b', fontWeight: '700' }}>// Travaillons ensemble</span>
            <h2 style={{ fontSize: '3rem', fontWeight: '800', marginTop: '1rem', marginBottom: '1.5rem' }}>Prêt à accélérer ?</h2>
            <p style={{ color: '#475569', lineHeight: '1.6', fontSize: '1.1rem', margin: 0 }}>Suivez les étapes intuitives de notre configurateur pour nous faire part de vos besoins.</p>
          </div>
          
          {/* Formulaire découpé en étapes */}
          <div style={{ flex: '1 1 500px' }}>
            <ContactStepper />
          </div>
        </div>
      </section>

      {/* ================= FOOTER COMPACT & GÉANT ================= */}
      <footer style={{ backgroundColor: '#000000', color: '#ffffff', padding: '6rem 2rem 2rem 2rem', overflow: 'hidden' }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '4rem', marginBottom: '5rem' }}>
            <div>
              <div style={{ color: '#64748b', fontSize: '0.8rem', textTransform: 'uppercase', letterSpacing: '0.05em', marginBottom: '1.5rem' }}>Company</div>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '12px', fontSize: '1.05rem' }}>
                <a href="#approche" style={{ color: '#ffffff', textDecoration: 'none' }}>About</a>
                <a href="#projets" style={{ color: '#ffffff', textDecoration: 'none' }}>Portfolio</a>
                <a href="#equipe" style={{ color: '#ffffff', textDecoration: 'none' }}>Team</a>
                <a href="#contact" style={{ color: '#ffffff', textDecoration: 'none' }}>Contact Us</a>
              </div>
            </div>
            <div>
              <div style={{ color: '#64748b', fontSize: '0.8rem', textTransform: 'uppercase', letterSpacing: '0.05em', marginBottom: '1.5rem' }}>Services</div>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '12px', fontSize: '1.05rem', color: '#cbd5e1' }}>
                <div>Headless CMS Agency</div>
                <div>Headless eCommerce</div>
                <div>Next.JS Development</div>
                <div>Web Design & Modernisation</div>
              </div>
            </div>
            <div style={{ display: 'flex', flexDirection: 'column', justifySelf: 'start', alignSelf: 'end' }}>
              <p style={{ color: '#64748b', fontSize: '0.9rem', margin: '0 0 1rem 0', lineHeight: '1.4' }}>We build Composable Content Systems.<br />Fast and Scalable.</p>
            </div>
          </div>

          <div style={{ display: 'flex', gap: '20px', paddingBottom: '3rem', borderBottom: '1px solid #1e293b' }}>
            <span style={{ cursor: 'pointer', color: '#64748b' }}>𝕏</span>
            <span style={{ cursor: 'pointer', color: '#64748b' }}>LinkedIn</span>
            <span style={{ cursor: 'pointer', color: '#64748b' }}>YouTube</span>
            <span style={{ cursor: 'pointer', color: '#64748b' }}>GitHub</span>
          </div>

          <div style={{ width: '100%', textAlign: 'center', marginTop: '3rem', userSelect: 'none' }}>
            <h2 style={{ fontSize: 'min(14vw, 160px)', fontWeight: '900', letterSpacing: '0.02em', lineHeight: '0.8', color: '#ffffff', margin: 0, textTransform: 'uppercase' }}>
              Netosia
            </h2>
          </div>
        </div>
      </footer>

    </main>
  );
}