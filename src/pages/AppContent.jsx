import React from 'react';

import './AppContent.css';

export function AppContent(props) {
  return (
    <section className='AppContent'>
      {props.loading && props.onLoading()}
      {props.children}
    </section>
  );
}
