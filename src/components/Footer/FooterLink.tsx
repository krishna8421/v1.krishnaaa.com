import Link from "next/link";
import React from "react";

interface Props {
  url: string;
  name: string;
}

export const FooterLink = ({ url, name }: Props) => (
  <Link href={url}>
    <a>{name}</a>
  </Link>
);
