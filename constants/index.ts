import {
	Contact2,
	FileCode2,
	FolderArchive,
	Home,
	ListCollapse,
} from 'lucide-react'

export const navLinks = [
	{ name: 'Home', path: '/', icon: Home },
	{ name: 'About', path: '/about', icon: ListCollapse },
	{ name: 'Blogs', path: '/blogs', icon: FileCode2 },
	{ name: 'Archive', path: '/archive', icon: FolderArchive },
	{ name: 'Contact', path: '/contact', icon: Contact2 },
]

export const popularCategories = [
	{ name: 'Front End', slug: 'front-end' },
	{ name: 'Back End', slug: 'back-end' },
	{ name: 'Full Stack', slug: 'full-stack' },
	{ name: "Sun'iy Intellekt", slug: 'artficial-intelligence' },
]

export const popularTags = [
	{ name: 'JavaScript', slug: 'javascript' },
	{ name: 'TypeScript', slug: 'typescript' },
	{ name: 'ReactJS', slug: 'react-js' },
	{ name: 'NodeJS', slug: 'node-js' },
	{ name: 'NextJS', slug: 'next-js' },
]
