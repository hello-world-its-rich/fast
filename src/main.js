// This is the main.js file. Import global CSS and scripts here.
// The Client API can be used here. Learn more: https://gridsome.org/docs/client-api

import DefaultLayout from '~/layouts/Default.vue'
import '~/assets/css/base.postcss'

export default function(Vue, { router, head, isClient }) {
  // Set default layout as a global component
  Vue.component('Layout', DefaultLayout)

  head.htmlAttrs = { lang: 'en' }
  head.bodyAttrs = { class: 'antialiased font-body font-serif' }

  // Styles
  head.link.push({
    rel: 'stylesheet',
    href: 'https://fonts.googleapis.com/css?family=Great+Vibes|Libre+Baskerville&display=swap',
  })

  // Basic meta tags
  head.meta.push({
    name: 'author',
    content: 'Rich',
  })

  head.meta.push({
    name: 'keywords',
    content: '',
  })

  head.meta.push({
    name: 'description',
    content: 'Thank you for reading my description.',
  })

  // Open Graph + Twitter meta tags
  head.meta.push({
    property: 'og:description',
    content: 'Please send to a friend',
  })

  head.meta.push({
    name: 'twitter:description',
    content: 'Please send to a friend',
  })

  head.meta.push({
    property: 'og:type',
    content: 'website',
  })

  head.meta.push({
    property: 'og:title',
    content: 'Hello World',
  })

  head.meta.push({
    name: 'twitter:title',
    content: 'Hello World',
  })


}
