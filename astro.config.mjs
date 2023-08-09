import { defineConfig } from 'astro/config'
import react from '@astrojs/react'
import image from '@astrojs/image'
import bookshop from '@bookshop/astro-bookshop'

// https://astro.build/config
export default defineConfig({
  integrations: [react(), image(), bookshop()]
})
