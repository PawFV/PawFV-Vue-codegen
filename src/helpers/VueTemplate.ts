export default (templateName: string) => `
<template>
  <div class="${templateName}">

  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'

@Component
export default class ${templateName} extends Vue {
  
}
</script>
`