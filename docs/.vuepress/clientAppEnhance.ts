import { defineClientAppEnhance } from '@vuepress/client'
import MyComponent from '../../packages/title-comp/src/Title.vue'
import DemoBlock from '../components/demo-block.vue'
// 注册全局组件
export default defineClientAppEnhance(({ app, router, siteData }) => {
  app.component('MyComponent', MyComponent)
  app.component('DemoBlock', DemoBlock)
})
