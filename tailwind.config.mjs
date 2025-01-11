/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {
			colors: {
				'primary-blue': '#1DB1FF', //Btns principales, encabezados o destacados
				'dark-blue': '#121A28', //Pal fondo
				'light-blue': '#0E4D92', //Hover, enlaces y secciones secundarias
				'light-gray': '#B3B3B3', //Testos menos destacados o enkaces
				'white-perform': '#FFFFFF', //Textos principales y contrastar fondo
			},
			fontFamily: {
				inter: ['Inter', 'sans-serif'], // Para texto general
        		poppins: ['Poppins', 'sans-serif'], // Para subtítulos
        		bebas: ['Bebas Neue', 'sans-serif'], // Para títulos
			}
		},
	},
	plugins: [],
}
