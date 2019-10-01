<template>
  <div>
    <label :for="computedInputId">{{ label }}</label>
    <input :type="inputType" :id="computedInputId" :placeholder="placeholder">
    <span id=""></span>
  </div>
</template>

<script>
    export default {
        name: "InputNode",
        props: {
            identifier: String,
            label: String,
            inputType: {
                type: String,
                default: "text"
            },
            placeholder: {
                type: String,
                default: ""
            }
        },
        computed: {
            computedInputId: function () {
                return `form-${this.identifier}`;
            },
            computedSpanId: function () {
                return `form-${this.identifier}-result`;
            }
        }
    }
</script>

<style scoped>

</style>
