import type { Config } from 'tailwindcss'

const config: Config = {
  content: ['./src/**/*.tsx'],
  theme: {
    extend: {
      gridTemplateColumns: {
        app: 'minmax(20rem, 22rem) 1fr',
      },
    },
  },
  plugins: [],
}
export default config
