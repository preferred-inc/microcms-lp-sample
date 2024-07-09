"use client";

import { Lps, getLps } from "@/lib/api";
import { useEffect, useState } from "react";
import parse from "html-react-parser";

export default function LpPage({ params }: { params: { slug: string } }) {
  const [lps, setLps] = useState<Lps | null>(null);
  useEffect(() => {
    getLps(params.slug ?? "").then((lps: Lps) => {
      setLps(lps);
    });
  }, [params.slug]);

  return (
    <>
      <div
        className="lp"
      >{parse(lps?.content ?? "")}</div>
    </>
  );
}
