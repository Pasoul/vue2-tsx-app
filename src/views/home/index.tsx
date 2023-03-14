import { Component, Vue } from "vue-property-decorator";
import cssModule from "./index.module.less";

@Component({})
export default class Home extends Vue {
  render() {
    return <h1 class={cssModule.myTitle}>这是首页</h1>;
  }
}
