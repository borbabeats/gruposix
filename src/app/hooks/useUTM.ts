'use client';

import { useEffect, useState } from 'react';
import { useSearchParams } from 'next/navigation';

type UTMParams = {
  source?: string;
  medium?: string;
  campaign?: string;
  term?: string;
  content?: string;
};

export const useUTM = () => {
  const [utmParams, setUtmParams] = useState<UTMParams>({});
  const searchParams = useSearchParams();

  useEffect(() => {
    const params: UTMParams = {};
    
    // Capturar UTMs da URL
    searchParams.forEach((value, key) => {
      if (key.startsWith('utm_')) {
        const utmKey = key.replace('utm_', '') as keyof UTMParams;
        params[utmKey] = value;
      }
    });

    if (Object.keys(params).length > 0) {
      const paramsWithPrefix: Record<string, string> = {};
      Object.entries(params).forEach(([key, value]) => {
        if (value) {
          paramsWithPrefix[`utm_${key}`] = value;
        }
      });
      localStorage.setItem('utm_params', JSON.stringify(paramsWithPrefix));
    } else {
      const storedParams = localStorage.getItem('utm_params');
      if (storedParams) {
        try {
          const parsedParams = JSON.parse(storedParams);
          const cleanedParams: UTMParams = {};
          Object.entries(parsedParams).forEach(([key, value]) => {
            if (key.startsWith('utm_') && typeof value === 'string') {
              const cleanKey = key.replace('utm_', '') as keyof UTMParams;
              cleanedParams[cleanKey] = value;
            }
          });
          Object.assign(params, cleanedParams);
        } catch (error) {
          console.error('Erro ao parsear UTMs do localStorage:', error);
        }
      }
    }
    
    setTimeout(() => setUtmParams(params), 0);
  }, [searchParams]);

  const addUTMToUrl = (baseUrl: string) => {
    // Verificar se está no browser antes de usar window.location
    if (typeof window === 'undefined') {
      return baseUrl;
    }
    
    const url = new URL(baseUrl, window.location.origin);
    
    Object.entries(utmParams).forEach(([key, value]) => {
      if (value) {
        // Adicionar com prefixo utm_ completo
        url.searchParams.set(`utm_${key}`, value);
      }
    });
    
    return url.toString();
  };

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
