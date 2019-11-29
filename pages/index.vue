<template>
  <div>
    <form @submit.prevent="handleSubmit">
      <label for="name" name="name">Nom</label>
      <input id="name" name="name" type="text" />

      <label for="lastName" name="lastName">Prénom</label>
      <input id="lastName" name="lastName" type="text" />

      <label for="age" name="age">Age</label>
      <input id="age" name="age" type="text" />
      <button type="submit">Record</button>
    </form>
  </div>
</template>

<script>
import WriteTest from '../test'

export default {
  methods: {
    handleSubmit() {
      WriteTest.Write('coucou Jean')
      console.log('Test message:', 'Coucou')
    }
  }
}
</script>

<style lang="scss" scoped></style>
