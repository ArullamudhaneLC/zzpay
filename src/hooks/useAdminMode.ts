import { useState, useEffect, useCallback } from 'react';

export function useAdminMode() {
  const [isAdminMode, setIsAdminMode] = useState(false);
  const [konami, setKonami] = useState<string[]>([]);

  const konamiCode = ['ArrowUp', 'ArrowUp', 'ArrowDown', 'ArrowDown', 'ArrowLeft', 'ArrowRight', 'ArrowLeft', 'ArrowRight', 'b', 'a'];

  const handleKeyPress = useCallback((event: KeyboardEvent) => {
    setKonami((prev) => {
      const newKonami = [...prev, event.key];
      if (newKonami.length > konamiCode.length) {
        newKonami.shift();
      }
      
      if (newKonami.join(',') === konamiCode.join(',')) {
        setIsAdminMode(true);
      }
      
      return newKonami;
    });
  }, []);

  useEffect(() => {
    window.addEventListener('keydown', handleKeyPress);
    return () => window.removeEventListener('keydown', handleKeyPress);
  }, [handleKeyPress]);

  const resetAdminMode = () => setIsAdminMode(false);

  return { isAdminMode, resetAdminMode };
}