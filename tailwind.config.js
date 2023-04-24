/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ['./{src,app}/**/*.{ts,tsx}'],
  theme: {
    extend: {
      boxShadow: {
        'navbar': '0 2px 8px #0000001a',
        'footer': 'inset 0 1px #ffffff1a'
      },

      fontFamily: {
        'default': ['Sohne', 'sans-serif']
      },
      
      animation: {
        text: 'text 5s ease infinite',
      },
      keyframes: {
        text: {
          '0%, 100%': {
            'background-size': '200% 200%',
            'background-position': 'left center',
          },
          '50%': {
            'background-size': '200% 200%',
            'background-position': 'right center',
          },
        },
      },

      backgroundColor: {
        'color-gradient': 'linear-gradient(45deg,#F6B5C0,#85C3FF,#FED266,#65BB94,#C7B0AF,#FF9D79,#F6B5C0) 0 0/600% 100%'
      },

      backgroundImage: {
        'color-gradient': 'linear-gradient(45deg,#F6B5C0,#85C3FF,#FED266,#65BB94,#C7B0AF,#FF9D79,#F6B5C0) 0 0/600% 100%'
      },

      textColor: {
        'color-gradient': 'linear-gradient(45deg,#F6B5C0,#85C3FF,#FED266,#65BB94,#C7B0AF,#FF9D79,#F6B5C0) 0 0/600% 100%'
      },

      colors: {
        transparent: 'transparent',
        current: 'currentColor',
        'light': '#F5F5F2',
        'dark': '#1C1C1C',
        'main': '#004fa3'
      },
    },
  },
  plugins: [require("tw-elements/dist/plugin")]
}
