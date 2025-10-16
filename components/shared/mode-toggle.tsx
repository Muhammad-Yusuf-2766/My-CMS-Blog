'use client'

import { MoonStar, Sun } from 'lucide-react'
import { useTheme } from 'next-themes'
import { useEffect, useState } from 'react'
import { Button } from '../ui/button'

const ModeToggle = () => {
	const [mount, setMount] = useState(false)

	useEffect(() => setMount(true), [])
	const { setTheme, resolvedTheme } = useTheme()
	return mount && resolvedTheme === 'dark' ? (
		<Button variant={'ghost'} size={'icon'} onClick={() => setTheme('light')}>
			<Sun />
		</Button>
	) : (
		<Button variant={'ghost'} size={'icon'} onClick={() => setTheme('dark')}>
			<MoonStar />
		</Button>
	)
}

export default ModeToggle
