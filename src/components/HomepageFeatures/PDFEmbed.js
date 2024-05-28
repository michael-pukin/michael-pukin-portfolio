// src/components/PDFEmbed.js
import React from 'react';

const PDFEmbed = ({ src }) => (
  <iframe src={src} width="100%" height="500px" style={{ border: 'none' }} />
);

export default PDFEmbed;
