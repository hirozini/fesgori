"use client";

import Image from "next/image";
import { useState } from "react";

type Props = {
  src: string;
  alt: string;
  fill?: boolean;
  width?: number;
  height?: number;
  className?: string;
  sizes?: string;
  priority?: boolean;
};

export function FallbackImage({ src, alt, ...props }: Props) {
  const [hidden, setHidden] = useState(false);

  if (hidden) return null;

  return (
    <Image
      src={src}
      alt={alt}
      {...props}
      onError={() => setHidden(true)}
    />
  );
}
