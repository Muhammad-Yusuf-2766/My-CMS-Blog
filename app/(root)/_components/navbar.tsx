'use client'

import ModeToggle from '@/components/shared/mode-toggle'
import { navLinks } from '@/constants'
import { cn } from '@/lib/utils'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import GlobalSearch from './global-search'
import MobileMenu from './mobile'

const Navbar = () => {
	const pathname = usePathname()

	return (
		<div className='h-[10vh] backdrop-blur-sm border-b sticky z-40 inset-0 bg-background px-2'>
			<div className='container max-w-6xl mx-auto h-[10vh] w-full flex items-center justify-between'>
				{/* Logo */}
				<Link href='/' className='font-bold text-lg'>
					<h1 className='text-4xl font-crete-round'>Sammi</h1>
				</Link>

				{/* Nav links */}
				<div className='hidden md:flex gap-2'>
					{navLinks.map(link => (
						<Link
							href={link.path}
							key={link.path}
							className={cn(
								'px-4 py-2 rounded-md hover:bg-blue-400/20 transition-colors',
								pathname === link.path && 'bg-blue-400/20'
							)}
						>
							{link.name}
						</Link>
					))}
				</div>

				<div className='flex items-center gap-1'>
					<GlobalSearch />
					<ModeToggle />
					<MobileMenu />
				</div>
			</div>
		</div>
	)
}

export default Navbar
