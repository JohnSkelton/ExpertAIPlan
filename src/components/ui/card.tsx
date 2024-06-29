import React from 'react';

export const Card = ({ children, className }: { children: React.ReactNode, className?: string }) => (
  <div className={`border rounded-lg shadow-sm ${className}`}>{children}</div>
);

export const CardContent = ({ children }: { children: React.ReactNode }) => (
  <div className="p-6">{children}</div>
);