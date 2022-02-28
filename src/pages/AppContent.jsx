import React from 'react';

export function AppContent(props) {
  return (
    <section>
      {props.loading && props.onLoading()}
      {props.children}
    </section>
  );
}
