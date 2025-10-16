export const Service = {
	async getBlogs() {
		const response = await fetch('https://jsonplaceholder.typicode.com/posts', {
			next: { revalidate: 5 },
		})
		if (!response.ok) {
			throw new Error('Failed to fetch data')
		}

		const data = response.json()
		return data
	},
}

//  Next.js da fetch ichida next: { revalidate: 5 } ishlatish orqali
//  server componentlarda ma'lumotlarni 5 soniyada bir yangilash mumkin.
//  Bu, ma'lumotlar tez-tez o'zgaradigan ilovalarda foydalidir va serverga bo'lgan yukni kamaytiradi.
//  Client componentlarda esa useEffect ichida fetch ishlatib, ma'lumotlarni olish mumkin,
//  lekin bu usul server componentlardagi kabi samarali emas, chunki har safar komponent yuklanganda fetch chaqiriladi.
//  Shuning uchun, agar ma'lumotlar tez-tez o'zgaradigan bo'lsa, server componentlardan foydalanish tavsiya etiladi.
//

//  fetch ichida yana { cache: 'no-store' } caching orqali ma'lumotlarni har safar yangilash mumkin.
//  Bu, ma'lumotlar doimiy ravishda o'zgaradigan ilovalarda foydalidir, lekin serverga bo'lgan yukni oshiradi.
