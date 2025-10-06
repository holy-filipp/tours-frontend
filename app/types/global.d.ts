declare module '@vue/runtime-core' {
  interface ComponentCustomProperties {
    $route: import('vue-router').RouteLocationNormalizedLoaded;
  }
}