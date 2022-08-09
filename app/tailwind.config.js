/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'blue': '#267ba6',
        'gray': '#b3b9bc',
        'red': '#f02f2f',
        'white':'#e0eff3',
        'black': '#323536',
        'brown': '#88561a',
        'green': '#35cf37',
        'pink' : '#db5ae8',
        'purple': '#6b5ac6',
        'yellow': '#f3ce15'
      },
    },
  },
  plugins: [],
  variants: {
    extend: {
      visibility: ["group-hover"],
    },
   },
   safelist: [
    'border-blue',
    'border-gray',
    'border-red',
    'border-white',
    'border-black',
    'border-brown',
    'border-green',
    'border-pink',
    'border-yellow',
    'border-purple'
  ]
}

