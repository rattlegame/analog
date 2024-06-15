// This is the root layout component for your Next.js app.
// Learn more: https://nextjs.org/docs/app/building-your-application/routing/pages-and-layouts#root-layout-required

import { Syne } from 'next/font/google'
import { DM_Sans } from 'next/font/google'
import './styles.css'

const syne = Syne({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-syne',
})
const dm_sans = DM_Sans({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-dm_sans',
})

export default function Layout({ children }) {
  return (
    <html lang="en">
      <body className={syne.variable + ' ' + dm_sans.variable}>
        {children}
      </body>
    </html>
  )
}
