import { Vue, Component } from "vue-property-decorator";
import { RouteConfig } from "vue-router";

@Component({
  name: "Home",
})
export default class App extends Vue {
  private get navPages(): Array<RouteConfig> {
    const { routes } = this.$router.options;
    return routes || [];
  }

  protected render() {
    return (
      <div id="app">
        <div id="nav">
          {this.navPages.map(({ name, path }) => {
            return (
              <router-link tag="div" to={path}>
                {name}
              </router-link>
            );
          })}
        </div>
        <router-view />
      </div>
    );
  }
}
