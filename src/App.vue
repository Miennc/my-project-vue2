<template>
    <div>
        <ChildComponent :msg="getting" @conchochatien="chanhantien"/>
    </div>
</template>


<script>
import ChildComponent from './components/ChildComponent.vue'
export default {
  data() {
      return {
          getting: 'msg from component father'
      }
  },    
  components: {
      ChildComponent
  },
  methods: {
      chanhantien(money){
        alert(money); 
        alert('thank you so much')     
      }
  },
}
</script>

<style>

</style>