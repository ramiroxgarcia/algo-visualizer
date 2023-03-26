<script setup lang="ts">
import WelcomeItem from './WelcomeItem.vue'
import DocumentationIcon from './icons/IconDocumentation.vue'
import ToolingIcon from './icons/IconTooling.vue'
import EcosystemIcon from './icons/IconEcosystem.vue'
import CommunityIcon from './icons/IconCommunity.vue'
import SupportIcon from './icons/IconSupport.vue'
</script>

<template>
  <div class = "cust-grid my-auto">
    <div class="border-solid border-2" v-for="test in 2500"> 1 </div>
  </div>
</template>

<style>
  .cust-grid {
    display: grid;
    grid-template-columns: repeat(50, 1.5%);
    grid-template-rows: repeat(50, 1.5%);
  }

</style>
