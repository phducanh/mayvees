import path from "path"
import tailwindcss from "@tailwindcss/vite"
import react from "@vitejs/plugin-react"
import { defineConfig } from "vite"
import fs from 'fs'

// Load metadata from config file
const metadata = JSON.parse(fs.readFileSync('./src/config/metadata.json', 'utf-8'))

// Create JSON-LD data
const jsonLd = {
  "@context": "https://schema.org",
  "@type": "BlogPosting",
  "dateModified": metadata.modifiedTime,
  "datePublished": metadata.publishedTime,
  "description": metadata.description,
  "headline": "Life in Weeks",
  "mainEntityOfPage": {
    "@type": "WebPage",
    "@id": metadata.baseUrl
  },
  "url": metadata.baseUrl
}

// Custom plugin to replace placeholders in HTML
function metadataPlugin() {
  return {
    name: 'html-metadata-transform',
    transformIndexHtml(html) {
      return html
        .replace(/%VITE_APP_TITLE%/g, metadata.title)
        .replace(/%VITE_APP_DESCRIPTION%/g, metadata.description)
        .replace(/%VITE_APP_BASE_URL%/g, metadata.baseUrl)
        .replace(/%VITE_APP_SITE_NAME%/g, metadata.siteName)
        .replace(/%VITE_APP_TWITTER_HANDLE%/g, metadata.twitterHandle)
        .replace(/%VITE_APP_OG_IMAGE%/g, metadata.images.og)
        .replace(/%VITE_APP_OG_ALT_IMAGE%/g, metadata.images.ogAlt)
        .replace(/%VITE_APP_TWITTER_IMAGE%/g, metadata.images.twitter)
        .replace(/%VITE_APP_FAVICON%/g, metadata.images.favicon)
        .replace(/%VITE_APP_PUBLISHED_TIME%/g, metadata.publishedTime)
        .replace(/%VITE_APP_MODIFIED_TIME%/g, metadata.modifiedTime)
        .replace(/%VITE_APP_JSON_LD%/g, JSON.stringify(jsonLd))
    }
  }
}

// https://vite.dev/config/
export default defineConfig({
  base: '/mayvees',
  plugins: [
    react(),
    tailwindcss(),
    metadataPlugin()
  ],
  build: {
    rollupOptions: {
      output: {
        assetFileNames: 'assets/[name].[hash][extname]',
        chunkFileNames: 'assets/[name].[hash].js',
        entryFileNames: 'assets/[name].[hash].js',
      },
    },
  },
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
  define: {
    // Define environment variables that will be replaced in the HTML
    'process.env.VITE_APP_TITLE': JSON.stringify(metadata.title),
    'process.env.VITE_APP_DESCRIPTION': JSON.stringify(metadata.description),
    'process.env.VITE_APP_BASE_URL': JSON.stringify(metadata.baseUrl),
    'process.env.VITE_APP_SITE_NAME': JSON.stringify(metadata.siteName),
    'process.env.VITE_APP_TWITTER_HANDLE': JSON.stringify(metadata.twitterHandle),
    'process.env.VITE_APP_OG_IMAGE': JSON.stringify(metadata.images.og),
    'process.env.VITE_APP_OG_ALT_IMAGE': JSON.stringify(metadata.images.ogAlt),
    'process.env.VITE_APP_TWITTER_IMAGE': JSON.stringify(metadata.images.twitter),
    'process.env.VITE_APP_FAVICON': JSON.stringify(metadata.images.favicon),
    'process.env.VITE_APP_PUBLISHED_TIME': JSON.stringify(metadata.publishedTime),
    'process.env.VITE_APP_MODIFIED_TIME': JSON.stringify(metadata.modifiedTime),
    'process.env.VITE_APP_JSON_LD': JSON.stringify(JSON.stringify(jsonLd)),
  },
})
