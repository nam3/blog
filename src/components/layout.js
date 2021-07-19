import * as React from 'react';
import { container } from './layout.module.css';

const Layout = ({ title, children }) => {
  return (
    <main className={container}>
      <title>{title}</title>
      <h1>{title}</h1>
      {children}
    </main>
  );
};

export default Layout;
