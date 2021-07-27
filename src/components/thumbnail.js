import * as React from 'react';
import { thumbnail } from './thumbnail.module.css';

export const Thumbnail = ({ src, alt }) => {
  if (!!src) {
    return <img className={thumbnail} alt={alt} src={src} />;
  }
  return;
};
