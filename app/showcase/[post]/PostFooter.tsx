'use client';

import Giscus from "@giscus/react";

export default function PostFooter() {
  return <Giscus
    repo="FourwingsY/portfolio"
    repoId="MDEwOlJlcG9zaXRvcnkzNzE3NDAyMzg="
    category="Comments"
    categoryId="DIC_kwDOFihOTs4CWOq9"
    mapping="pathname"
    strict="0"
    reactions-enabled="1"
    emit-metadata="0"
    input-position="top"
    theme="light_tritanopia"
    lang="ko"
    loading="lazy"
  />
}