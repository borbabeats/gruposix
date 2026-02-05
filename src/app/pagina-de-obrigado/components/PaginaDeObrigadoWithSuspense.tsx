'use client';

import { Suspense } from 'react';
import PaginaDeObrigadoComponent from '../PaginaDeObrigadoComponent';

export default function PaginaDeObrigadoWithSuspense() {
    return (
        <Suspense fallback={<div>Carregando...</div>}>
            <PaginaDeObrigadoComponent />
        </Suspense>
    );
}
