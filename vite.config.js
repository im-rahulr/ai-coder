import { defineConfig } from 'vite'
import firebase from 'vite-plugin-firebase'

export default defineConfig({
  plugins: [
    firebase({
      projectId: 'crazy-boys-b25e3'
    })
  ]
}) 