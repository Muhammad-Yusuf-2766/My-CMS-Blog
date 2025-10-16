import { ThemeProvider } from '@/components/providers/theme-provider'
import { ChildProps } from '@/types'
import type { Metadata } from 'next'
import { Crete_Round, Work_Sans } from 'next/font/google'
import './globals.css'

const createRound = Crete_Round({
	variable: '--font-crete-round',
	subsets: ['latin'],
	weight: ['400'],
})

const workSans = Work_Sans({
	variable: '--font-work-sans',
	subsets: ['latin'],
	weight: ['400'],
})

export const metadata: Metadata = {
	title: 'Sammi dasturlasha oid maqolalar',
	description:
		"Dasturlash haqida yangiliklar, maslahatlar va dasturlash sohasidagi eng so'nggi xabarlar. Bizning blogda dasturlashni o'ganish  va rivojlanish uchun qo'llanma topishingiz mumkin.",
}

function RootLayout({ children }: ChildProps) {
	return (
		<html lang='en' suppressHydrationWarning>
			<body
				className={`${createRound.variable} ${workSans.variable}  overlflow-x-hidden`}
			>
				<ThemeProvider
					attribute='class'
					defaultTheme='system'
					disableTransitionOnChange
				>
					{children}
				</ThemeProvider>
			</body>
		</html>
	)
}

export default RootLayout
