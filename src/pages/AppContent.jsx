import React, { Suspense } from 'react';

import './AppContent.css';

export function AppContent(props) {
  return (
    <Suspense fallback={<div>Cargando...</div> }>
      <section className='AppContent'>
        {props.loading && props.onLoading()}
        {props.children}
      </section>
    </Suspense>
  );
}
