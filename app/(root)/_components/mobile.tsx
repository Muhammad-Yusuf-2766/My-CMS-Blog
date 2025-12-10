'use client'

import { Button } from '@/components/ui/button'
import {
	Sheet,
	SheetContent,
	SheetTitle,
	SheetTrigger,
} from '@/components/ui/sheet'
import { navLinks } from '@/constants'
import { cn } from '@/lib/utils'
import { Separator } from '@radix-ui/react-separator'
import { Menu } from 'lucide-react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'

const MobileMenu = () => {
	const pathname = usePathname()

	return (
		<Sheet>
			<SheetTrigger asChild className='md:hidden'>
				<Button size={'icon'} variant={'ghost'} aria-label='Open Menu'>
					<Menu />
				</Button>
			</SheetTrigger>

			<SheetContent side='left' className='w-[250px] p-0'>
				<SheetTitle className='hidden'>Hi Yusuf</SheetTitle>
				<Link href={'/'}>
					<h1 className='text-4xl font-crete-round'>Sammi</h1>
				</Link>
				<Separator className=' text-white' />

				<div className='flex flex-col space-y-3'>
					{navLinks.map(link => (
						<Link
							href={link.path}
							key={link.path}
							className={cn(
								'px-4 py-2 rounded-sm hover:bg-blue-400/20 transition-colors flex items-center gap-2',
								pathname === link.path && 'bg-blue-400/20'
							)}
						>
							<link.icon className='w-5 h-5' aria-hidden />
							<span className='text-sm'>{link.name}</span>
						</Link>
					))}
				</div>
			</SheetContent>
		</Sheet>
	)
}

export default MobileMenu
