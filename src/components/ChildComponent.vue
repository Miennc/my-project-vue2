<template>
  <div>
      {{msg || ' không có props'}}
      <button @click="sendData()">con cho cha tiền</button>
  </div>
</template>

<script>
export default {
  data() {
      return {
          
      }
  },
  props: {
      msg:String,
  },
  methods: {
      sendData(){
          this.$emit('conchochatien',6000)
      }
  },
}
</script>

<style>

</style>