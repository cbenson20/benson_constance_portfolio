import React, { ReactNode } from "react";
export interface CardProps {
  title: string;
  content?: string;
  imageUrl?: string;
  disabled?: boolean;
  onClick?: () => void;
  children?: ReactNode;
}
