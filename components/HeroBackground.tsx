'use client';

import Threads from '@/components/Threads';

export default function HeroBackground() {
  return (
    <div style={{ 
      position: 'absolute', 
      top: 0, 
      left: 0, 
      right: 0, 
      bottom: 0, 
      width: '100%', 
      height: '100%', 
      zIndex: 0,
      backgroundColor: '#ffffff' // Fond du conteneur blanc
    }}>
      <Threads
        color={[0, 0, 0]} // <--- Dessin Noir pur
        amplitude={3}
        distance={0}
        enableMouseInteraction
      />
    </div>
  );
}