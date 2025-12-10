import { ChildProps } from '@/types'
import Footer from './_components/footer'
import Navbar from './_components/navbar'

const Layout = ({ children }: ChildProps) => {
	return (
		<main className='px-2'>
			<Navbar />
			<div className='container mx-auto'>{children}</div>
			<Footer />
		</main>
	)
}

export default Layout
