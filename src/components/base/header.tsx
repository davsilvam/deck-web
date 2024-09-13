'use client'
import { SearchInputWithFilters } from '@/components/filter/searchInputWithFilters' 
import { Package } from 'lucide-react'
import Link from 'next/link'
import { Button } from '../ui/button'

export function Header() {
  return (
    <header className="flex h-20 w-full items-center justify-between px-10">
      <div className="flex items-center gap-10">
        <div className="flex gap-2">
          <Package size={28} className="text-slate-600" />
          <h1 className="font-semibold text-2xl text-slate-600">Deck</h1>
        </div>

        <SearchInputWithFilters />
      </div>

      <Button asChild>
        <Link href="/login">Entrar</Link>
      </Button>
    </header>
  )
}