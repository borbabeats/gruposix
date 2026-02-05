'use client';

import { useEffect } from 'react';
import { useUTM } from '../hooks/useUTM';

interface UTMCaptureProps {
  onCapture?: (utmParams: Record<string, string>) => void;
}

export default function UTMCapture({ onCapture }: UTMCaptureProps) {
  const { utmParams, hasUTM } = useUTM();

  useEffect(() => {
    if (hasUTM && onCapture) {
      onCapture(utmParams);
    }

    // Enviar UTMs para analytics
    if (hasUTM) {
      console.log('UTMs capturados:', utmParams);
      
      if (typeof window !== 'undefined' && (window as any).gtag) {
        const gtag = (window as any).gtag;
        Object.entries(utmParams).forEach(([key, value]) => {
          if (value) {
            gtag('event', 'utm_capture', {
              [key]: value,
              custom_parameter: key
            });
          }
        });
      }


    }
  }, [utmParams, hasUTM, onCapture]);


  return null;
}
