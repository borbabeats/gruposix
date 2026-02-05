'use client';

import { Suspense } from 'react';
import HomePageComponent from '../HomePageComponent';

export default function PageWithSuspense() {
    return (
        <Suspense fallback={<div>Carregando...</div>}>
            <HomePageComponent />
        </Suspense>
    );
}
