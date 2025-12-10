import { IBlog } from '@/types'
import Image from 'next/image'

const BlogCard = (blog: IBlog) => {
	return (
		<div className='grid gap-4 group grid-cols-1 md:grid-cols-2'>
			<div className='relative bg-secondary rounded-md'>
				<Image width={650} height={335} src={blog.image} alt={blog.title} />
			</div>
		</div>
	)
}

export default BlogCard
