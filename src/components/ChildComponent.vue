<template>
  <div>
      <h2>childComponent</h2>
      <slot name="slot1"> helo im children component </slot>
       <slot name="slot2" :content="content"> đây là slot hai</slot>
  </div>
</template>

<script>

export default {
data(){
 return {
   content:'content children'
 }
}
}
</script>

<style>

</style>