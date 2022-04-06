<template>
  <div>
      <ChildComponent>
        <template #slot1> đây là slot 1</template>
        <template #slot2="{content}" >
          {{content}}
          đây là slot 2</template>
      </ChildComponent>
  </div>
</template>

<script>
import ChildComponent from "@/components/ChildComponent";
export default {
  components: {ChildComponent},
  component: {
    ChildComponent
   }
}
</script>

<style>

</style>