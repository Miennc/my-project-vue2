<template>
 <div>
   <MyButton> </MyButton>
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

     }
 },
}
</script>

<style>

</style>