'use client';

import { useEffect, useState } from 'react';
import { useSearchParams, useRouter } from 'next/navigation';

export function useUTM() {
  const [utmParams, setUtmParams] = useState<Record<string, string>>({});
  const searchParams = useSearchParams();
  const router = useRouter();

  useEffect(() => {
    // Capturar UTMs da URL atual
    const params: Record<string, string> = {};
    
    searchParams.forEach((value, key) => {
      if (key.startsWith('utm_')) {
        params[key] = value;
      }
    });

    // Se encontrou UTMs, salvar no localStorage e no estado
    if (Object.keys(params).length > 0) {
      setUtmParams(params);
      localStorage.setItem('utm_params', JSON.stringify(params));
    } else {
      // Se não tem UTMs na URL, tentar recuperar do localStorage
      const stored = localStorage.getItem('utm_params');
      if (stored) {
        try {
          const parsedParams = JSON.parse(stored);
          setUtmParams(parsedParams);
        } catch (error) {
          console.error('Erro ao parsear UTMs do localStorage:', error);
        }
      }
    }
  }, [searchParams]);

  // Função para adicionar UTMs a qualquer URL
  const addUTMToUrl = (baseUrl: string) => {
    const url = new URL(baseUrl, window.location.origin);
    
    Object.entries(utmParams).forEach(([key, value]) => {
      if (value) {
        url.searchParams.set(key, value);
      }
    });
    
    return url.toString();
  };

  // Função para limpar UTMs
  const clearUTM = () => {
    setUtmParams({});
    localStorage.removeItem('utm_params');
  };

  return {
    utmParams,
    addUTMToUrl,
    clearUTM,
    hasUTM: Object.keys(utmParams).length > 0
  };
}
