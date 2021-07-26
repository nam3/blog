import * as React from 'react';
import { thumbnail } from './thumbnail.module.css';

export const Thumbnail = ({ src }) => {
  if (!!src) {
    return <img className={thumbnail} src={src} />;
  }
  return;
};
