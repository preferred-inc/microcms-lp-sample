'use client'

import { Lps, getLpsList } from '@/lib/api';
import Image from 'next/image'
import Link from 'next/link';
import { useEffect, useState } from 'react';

export default function Home() {
  // お知らせ一覧の読み込み
  const [lpsList, setLpsList] = useState<Lps[]>([]);
  useEffect(() => {
    getLpsList().then((lpsList: Lps[]) => {
      setLpsList(lpsList)
    })
  }, []);

  return (
    <main className="container mx-auto p-4">
      <h1 className="text-2xl font-bold">microCMS LP</h1>
      <div className="grid grid-cols-3 gap-4 mt-4">
        {lpsList.map(lps =>
          <Link key={lps.id} href={`/lp/${lps.id}`}
            className="flex items-center p-4 border border-gray-200 rounded-md shadow-md hover:shadow-lg">
            <span>{lps?.title} LP</span>
          </Link>)
        }
      </div>
    </main>
  )
}