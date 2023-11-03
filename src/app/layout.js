import './globals.css'
import Header from "@/app/components/Header";
import Footer from "@/app/components/Footer";
import { Mulish } from 'next/font/google';
import NextTopLoader from 'nextjs-toploader';
import { ThemeProvider } from '@/context/ThemeContext'

const mulish = Mulish({
  weight: ['300', '400', '500', '600', '700', '800', '900'],
  subsets: ['latin'],
  display: 'swap'
})

export const metadata = {
  title: 'Netflix_movies-info',
  description: 'A Netflix content info app with data siurced from a single API source',
}


export default function RootLayout({ children }) {
  return (
    <html lang="en" className={mulish.className}>
      <body>
        <ThemeProvider>
        <NextTopLoader />
          <div className="container">
            <Header />
            {children}
            <Footer />
          </div>
        </ThemeProvider>
      </body>
    </html>
  )
}