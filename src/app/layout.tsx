import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import type { ReactNode } from 'react'

import '../styles/globals.css'
import { AuthenticatedStudentProvider } from '@/contexts/authenticated-student-context'
import { TagsProvider } from '@/contexts/tags-context'
import { QueryProvider } from '@/lib/tanstack-query/query-provider'
import { NextAuthSessionProvider } from '@/providers/session-provider'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Deck',
  description: 'Generated by create next app',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: ReactNode
}>) {
  return (
    <html lang="pt-BR">
      <body
        className={`${inter.className} overflow-x-hidden`}
        suppressHydrationWarning={true}
      >
        <QueryProvider>
          <NextAuthSessionProvider>
            <TagsProvider>
              <AuthenticatedStudentProvider>
                {children}
              </AuthenticatedStudentProvider>
            </TagsProvider>
          </NextAuthSessionProvider>
        </QueryProvider>
      </body>
    </html>
  )
}
