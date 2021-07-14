import TitleCom from './src/Title.vue'

TitleCom.install = function (Vue) {
  Vue.component(TitleCom.name, TitleCom)
}
export default TitleCom