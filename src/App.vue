<template>
 <div>
   <Custom-Button :href="href">
   <slot name="slot1">

   </slot>
   </Custom-Button>
   <ParentComponent></ParentComponent>
 </div>
</template>
<script>
import ParentComponent from "@/components/ParentComponent";
export default {
  components: {
    ParentComponent
  },

  data() {
     return {
       href :' abc'
     }
 },
}
</script>

<style>

</style>