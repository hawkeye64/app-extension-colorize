<template>
  <div class="q-pa-md">
    <div class="q-pb-md q-gutter-md row justify-around">
      <q-input
        filled
        v-model="bgColor"
      >
        <template v-slot:append>
          <q-icon name="colorize" class="cursor-pointer">
            <q-popup-proxy transition-show="scale" transition-hide="scale">
              <q-color v-model="bgColor" />
            </q-popup-proxy>
          </q-icon>
        </template>
      </q-input>
    </div>
    <q-separator />
    <div class="q-pa-md row justify-around">
      <my-component
        :bg-color="bgColor"
      >
        <div class="text-h4">Some Text</div>
      </my-component>
    </div>
  </div>
</template>

<script>
import Vue from 'vue'
import Colorize from '@quasar/quasar-app-extension-colorize/src/colorize'

const MyComponent = Vue.extend({
  name: 'my-component',

  mixins: [Colorize],

  props: {
    // color prop is added by colorize mix-in
    // background-color is optional and needs to be added if needed
    bgColor: String
  },

  render (h) {
    return h('div', this.setBackgroundColor(this.bgColor, {
      style: {
        width: '200px',
        height: '200px'
      }
    }))
  }
})

export default {
  components: {
    MyComponent
  },

  data () {
    return {
      bgColor: '#FF0000'
    }
  }
}
</script>
