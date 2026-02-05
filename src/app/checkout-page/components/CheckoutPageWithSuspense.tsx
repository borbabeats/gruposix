'use client';

import { Suspense } from 'react';
import CheckoutPageComponent from '../CheckoutPageComponent';

export default function CheckoutPageWithSuspense() {
    return (
        <Suspense fallback={<div>Carregando...</div>}>
            <CheckoutPageComponent />
        </Suspense>
    );
}
