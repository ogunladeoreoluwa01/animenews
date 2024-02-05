<template>
  <button
    @click="handleClick"
    :class="[
      'py-1 px-6 flex gap-3 rounded-md text-center justify-center items-center transition-all duration-200 ease-in  hover:-translate-y-[1px] font-semibold',
      {
        'disabled:bg-accent3 disabled:text-accent1': state === 'disabled',
        'bg-zinc-950 text-white hover:bg-zinc-900': state === 'black',
        'bg-zinc-50 text-zinc-950 hover:bg-zinc-400': state === 'white',
        'bg-green-500 text-white hover:bg-green-600': state === 'green',
        'bg-red-500 text-white hover:bg-red-600': state === 'red'
      }
    ]"
    :disabled="state === 'disabled'"
  >
    {{ buttonText }}
  </button>
</template>

<script>
export default {
  props: {
    state: {
      type: String,
      default: 'black',
      validator: (value) => ['disabled', 'black', 'white', 'green', 'red'].includes(value)
    },
    disabled: {
      type: Boolean,
      default: false
    },
    buttonText: {
      type: String,
      default: 'Button'
    }
  },
  methods: {
    handleClick() {
      this.$emit('click')
    }
  }
}
</script>
