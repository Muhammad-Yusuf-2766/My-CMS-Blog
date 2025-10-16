import { Badge } from '@/components/ui/badge'
import {
	Drawer,
	DrawerContent,
	DrawerHeader,
	DrawerTitle,
	DrawerTrigger,
} from '@/components/ui/drawer'
import { Input } from '@/components/ui/input'
import { popularCategories, popularTags } from '@/constants'
import { Search } from 'lucide-react'

const GlobalSearch = () => {
	return (
		<Drawer>
			<DrawerTrigger>
				<div className='px-3 py-2 rounded-md hover:bg-blue-400/20 transition-colors flex items-center gap-2 cursor-pointer'>
					<span className='hidden md:flex'>Search</span>
					<Search className='w-4 h-4' />
				</div>
			</DrawerTrigger>
			<DrawerContent>
				<DrawerHeader>
					<DrawerTitle className='sr-only'>Global Search</DrawerTitle>
				</DrawerHeader>
				<div className='container max-w-6xl mx-auto py-12'>
					<Input className='bg-secondary' placeholder='Search blogs...' />

					<div className='flex flex-col space-y-2 mt-4'>
						<p className='font-crete-round text-2xl'>See posts by categories</p>
						<div className='flex flex-wrap gap-2'>
							{popularCategories.map(category => (
								<Badge variant={'secondary'} key={category.slug}>
									{category.name}
								</Badge>
							))}
						</div>
					</div>

					<div className='flex flex-col space-y-2 mt-4'>
						<p className='font-crete-round text-2xl'>See posts by tags</p>
						<div className='flex flex-wrap gap-2'>
							{popularTags.map(tag => (
								<Badge variant={'secondary'} key={tag.slug}>
									{tag.name}
								</Badge>
							))}
						</div>
					</div>
				</div>
			</DrawerContent>
		</Drawer>
	)
}

export default GlobalSearch
