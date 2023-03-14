<template>
  <div class="card-wrapper">{{ title }}</div>
</template>
<script lang="ts">
import { Component, Prop, Vue } from "vue-property-decorator";
@Component({})
export default class About extends Vue {
  private title: string = "这是hello";
}
</script>
<style lang="less" scoped></style>
