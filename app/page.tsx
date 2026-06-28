"use client";

import * as React from "react";
import HeroBackground from "@/components/HeroBackground";

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
      imagePlaceholder: "[ Image Arrive Grand Format ]",
      bgColor: "#f1f5f9", // Gris très clair neutre pour le fond du projet
    },
    {
      id: "easypark",
      title: "EasyPark",
      tags: ["Storyblok"],
      industry: "Parking & Mobility",
      techStack: ["Storyblok", "NextJS", "Vercel"],
      scope: ["Design", "Website development", "Maintenance"],
      imagePlaceholder: "[ Image EasyPark Mockup Laptop ]",
      bgColor: "#fce7f3", // Teinte rose très douce et claire pour fond blanc
    },
    {
      id: "novalytics",
      title: "Nova Analytics",
      tags: ["Sanity CMS"],
      industry: "Finance & Big Data",
      techStack: ["Sanity", "NextJS", "Tailwind"],
      scope: ["Architecture", "Development"],
      imagePlaceholder: "[ Image Nova Analytics Grand Format ]",
      bgColor: "#e0f2fe", // Bleu ciel très doux
    }
  ];

  return (
    <main style={{ 
      fontFamily: 'system-ui, -apple-system, sans-serif', 
      backgroundColor: '#ffffff', // Fond blanc global
      color: '#000000', // Texte noir par défaut
      minHeight: '100vh',
      width: '100%'
    }}>

      {/* ================= HEADER FLOATING WITH BLUR (NO BORDER) ================= */}
      <header style={{
        position: 'fixed',
        top: '20px',
        left: '50%',
        transform: 'translateX(-50%)',
        width: 'calc(100% - 40px)',
        maxWidth: '1200px',
        height: '70px',
        backgroundColor: 'rgba(255, 255, 255, 0.4)', // Plus transparent pour accentuer le flou arrière
        backdropFilter: 'blur(20px)', // Flou renforcé
        WebkitBackdropFilter: 'blur(20px)',
        border: 'none', // Plus aucun contour blanc
        borderRadius: '35px',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        padding: '0 30px',
        zIndex: 100,
        boxShadow: '0 4px 30px rgba(0, 0, 0, 0.03)' // Ombre extrêmement légère pour détacher subtilement
      }}>
        {/* Menu Burger Sombre */}
        <div style={{ cursor: 'pointer', display: 'flex', flexDirection: 'column', gap: '5px' }}>
          <div style={{ width: '22px', height: '2px', backgroundColor: '#000000' }}></div>
          <div style={{ width: '22px', height: '2px', backgroundColor: '#000000' }}></div>
          <div style={{ width: '22px', height: '2px', backgroundColor: '#000000' }}></div>
        </div>

        {/* Logo */}
        <div style={{ fontSize: '1.25rem', fontWeight: 'bold', letterSpacing: '0.05em', textTransform: 'uppercase', color: '#000000' }}>
          Netosia
        </div>

        {/* Navigation */}
        <nav style={{ display: 'flex', alignItems: 'center', gap: '25px' }}>
          <a href="#services" style={{ color: '#475569', textDecoration: 'none', fontSize: '0.9rem', fontWeight: '500' }}>Services</a>
          <a href="#projets" style={{ color: '#000000', textDecoration: 'none', fontSize: '0.9rem', fontWeight: '600' }}>Réalisations</a>
          <div style={{ color: '#475569', fontSize: '0.9rem', cursor: 'pointer', display: 'flex', alignItems: 'center', gap: '4px', fontWeight: '500' }}>
            Approche <span style={{ fontSize: '0.7rem' }}>▼</span>
          </div>
        </nav>
      </header>
      
      {/* ================= HERO SECTION ================= */}
      <section style={{ position: 'relative', minHeight: '100vh', width: '100%', overflow: 'hidden' }}>
        <HeroBackground />
        
        <div style={{
          position: 'relative',
          zIndex: 10,
          maxWidth: '900px',
          margin: '0 auto',
          padding: '120px 2rem 0 2rem',
          minHeight: '100vh',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'center',
          textAlign: 'center'
        }}>
          <h1 style={{ 
            fontSize: '4.5rem', 
            fontWeight: '700', 
            lineHeight: '1.15', 
            letterSpacing: '-0.02em', 
            color: '#000000', // Titre Noir
            margin: '0 0 2rem 0'
          }}>
            Des sites web qui génèrent des résultats
          </h1>
          <p style={{ 
            fontSize: '1.15rem', 
            color: '#334155', // Gris foncé pour rester lisible sur fond blanc
            maxWidth: '650px', 
            lineHeight: '1.6',
            margin: '0 0 2.5rem 0'
          }}>
            Nous construisons des expériences numériques sur-mesure pour les entreprises qui refusent les compromis. Architecture scalable, performance garantie, autonomie marketing incluse.
          </p>
          
          <div style={{ display: 'flex', alignItems: 'center', gap: '20px' }}>
            <button style={{
              backgroundColor: '#000000', // Bouton principal noir de jais
              color: '#ffffff',
              border: 'none',
              padding: '0.8rem 2rem',
              borderRadius: '20px',
              fontWeight: '600',
              cursor: 'pointer',
              fontSize: '0.95rem',
              boxShadow: '0 10px 20px rgba(0,0,0,0.05)'
            }}>
              Démarrer
            </button>
            
            {/* Badge Google avec pur flou sans bordure */}
            <div style={{
              backgroundColor: 'rgba(0, 0, 0, 0.04)', // Fond gris ultra-léger transparent
              backdropFilter: 'blur(10px)',
              WebkitBackdropFilter: 'blur(10px)',
              border: 'none', // Pas de contour
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

      {/* ================= SECTION REALISATIONS (Style Focus Reactive - Fond Blanc) ================= */}
      <section id="projets" style={{ 
        padding: '6rem 2rem', 
        maxWidth: '1200px', 
        margin: '0 auto',
        borderTop: '1px solid #e2e8f0'
      }}>
        <h2 style={{ fontSize: '1rem', textTransform: 'uppercase', letterSpacing: '0.1em', color: '#94a3b8', marginBottom: '3rem' }}>
          Nos projets
        </h2>

        <div style={{ display: 'flex', flexDirection: 'column' }}>
          {projects.map((project) => {
            const isOpened = activeProjectId === project.id;

            return (
              <div 
                key={project.id}
                onClick={() => setActiveProjectId(isOpened ? null : project.id)}
                style={{
                  backgroundColor: '#ffffff',
                  padding: '2.5rem 0',
                  cursor: 'pointer',
                  borderBottom: '1px solid #e2e8f0',
                  transition: 'all 0.3s ease'
                }}
              >
                {/* En-tête de ligne */}
                <div style={{
                  display: 'flex',
                  justifyContent: 'space-between',
                  alignItems: 'center',
                  width: '100%',
                  marginBottom: '1.5rem'
                }}>
                  <h3 style={{ 
                    fontSize: '2.5rem', 
                    fontWeight: '700', 
                    margin: 0,
                    color: isOpened ? '#000000' : '#94a3b8', // Actif = Noir, Inactif = Gris clair
                    transition: 'color 0.3s ease'
                  }}>
                    {project.title}
                  </h3>
                  
                  <div style={{ display: 'flex', gap: '10px' }}>
                    {project.tags.map(t => (
                      <span key={t} style={{
                        backgroundColor: '#f1f5f9',
                        padding: '6px 14px',
                        borderRadius: '20px',
                        fontSize: '0.8rem',
                        color: '#475569',
                        fontWeight: '500'
                      }}>{t}</span>
                    ))}
                  </div>
                </div>

                {/* Conteneur Principal de la Ligne */}
                <div style={{
                  display: 'grid',
                  gridTemplateColumns: isOpened ? 'repeat(auto-fit, minmax(300px, 1fr))' : '1fr',
                  gap: isOpened ? '3rem' : '0px',
                  transition: 'all 0.4s cubic-bezier(0.25, 1, 0.5, 1)'
                }}>
                  
                  {/* Métadonnées */}
                  <div style={{ 
                    display: isOpened ? 'flex' : 'none', 
                    flexDirection: 'column', 
                    gap: '2rem'
                  }} onClick={(e) => e.stopPropagation()}>
                    <div>
                      <div style={{ fontSize: '0.8rem', color: '#94a3b8', textTransform: 'uppercase', marginBottom: '0.4rem' }}>Industry</div>
                      <div style={{ fontSize: '1.25rem', fontWeight: '600', color: '#000000' }}>{project.industry}</div>
                    </div>
                    <div>
                      <div style={{ fontSize: '0.8rem', color: '#94a3b8', textTransform: 'uppercase', marginBottom: '0.4rem' }}>Technical Stack</div>
                      <div style={{ display: 'flex', flexDirection: 'column', gap: '4px', fontSize: '1.1rem', color: '#334155', fontWeight: '500' }}>
                        {project.techStack.map(tech => <div key={tech}>{tech}</div>)}
                      </div>
                    </div>
                    <div>
                      <div style={{ fontSize: '0.8rem', color: '#94a3b8', textTransform: 'uppercase', marginBottom: '0.4rem' }}>Scope of work</div>
                      <div style={{ display: 'flex', flexDirection: 'column', gap: '4px', fontSize: '1.1rem', color: '#64748b' }}>
                        {project.scope.map(s => <div key={s}>{s}</div>)}
                      </div>
                    </div>
                  </div>

                  {/* Le Visuel Média (Aperçu de 90px conservé quand il est fermé !) */}
                  <div style={{
                    backgroundColor: project.bgColor,
                    borderRadius: '20px',
                    height: isOpened ? '450px' : '90px',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    position: 'relative',
                    overflow: 'hidden',
                    transition: 'height 0.4s cubic-bezier(0.25, 1, 0.5, 1)'
                  }} onClick={(e) => e.stopPropagation()}>
                    <span style={{
                      position: 'absolute',
                      top: '15px',
                      left: '20px',
                      backgroundColor: 'rgba(255, 255, 255, 0.7)',
                      backdropFilter: 'blur(4px)',
                      padding: '4px 12px',
                      borderRadius: '10px',
                      fontSize: '0.75rem',
                      color: '#000000',
                      fontWeight: '500'
                    }}>
                      {project.tags[0]}
                    </span>
                    
                    <div style={{ fontWeight: 'bold', color: '#000000', opacity: isOpened ? 0.6 : 0.15, fontSize: '1.1rem', transition: 'opacity 0.3s' }}>
                      {project.imagePlaceholder}
                    </div>
                  </div>

                </div>

              </div>
            );
          })}
        </div>
      </section>

      <footer style={{ padding: '4rem 2rem', textAlign: 'center', color: '#94a3b8', fontSize: '0.9rem' }}>
        © {new Date().getFullYear()} Netosia. Minimalist White Theme.
      </footer>
    </main>
  );
}