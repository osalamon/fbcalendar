<template>
  <Layout>
    <h1>About us</h1>
    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Error doloremque omnis animi, eligendi magni a voluptatum, vitae, consequuntur rerum illum odit fugit assumenda rem dolores inventore iste reprehenderit maxime! Iusto.</p>
    <button @click="toggleTF">SHOW</button>
    <ExampleModalNondynamic v-if="showed"></ExampleModalNondynamic>
  </Layout>
</template>

<script>
import ExampleModalNondynamic from '~/components/ExampleModalNondynamic'

export default {
  components: {
    ExampleModalNondynamic
  },
  metaInfo: {
    title: 'About us'
  },
  data() {
    return {
      showed: false
    }
  },
  methods: {
    toggleTF() {
      return this.showed = !this.showed
    }
  }
}
</script>
