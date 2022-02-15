<template>
  <input
    ref="header"
    v-for="item in items"
    v-once
    id="uniqueID"
    v-model="headerData"
    my-prop="prop"
    v-if="!visible"
    is="header"
    @input="functionCall"
    v-text="textContent"
  />
</template>
