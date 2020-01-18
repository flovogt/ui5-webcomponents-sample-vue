<template>
 <div>Suppliers {{this.$route.params.supplier_id}}</div>
</template>

<script>
import Vue from "vue";

let Suppliers = Vue.component('Suppliers', {
  props: ["todo", "datakey"],
});

export default Suppliers;

</script>

<style>

</style>
