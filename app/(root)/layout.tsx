import { ChildProps } from '@/types'
import Footer from './_components/footer'
import Navbar from './_components/navbar'

const Layout = ({ children }: ChildProps) => {
	return (
		<main>
			<Navbar />
			<div className='container mx-auto px-4'>{children}</div>
			<Footer />
		</main>
	)
}

export default Layout
