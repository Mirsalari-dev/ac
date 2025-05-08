import { ReactElement } from "react";

export interface SubSubItem {
  title: string;
  href: string;
  icon?: ReactElement;
}

export interface SubItem {
  title: string;
  href: string;
  icon?: ReactElement;
  subSubItems?: SubSubItem[];
}

export interface NavItem {
  title: string;
  href: string;
  icon?: ReactElement;
  mobileIcon?: ReactElement;
  subItems?: SubItem[];
}
