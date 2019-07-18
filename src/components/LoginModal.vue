<template>
  <b-modal id="b-modal-login" hide-footer no-close-on-esc no-close-on-backdrop hide-header-close>
    <template slot="modal-title">
      Login screen
    </template>
    <div class="d-block text-center">
      <h3>Hello From This Modal!</h3>
      <input value="some value" placeholder="some plcholder" />
      <p> nejaky odstavecek lorem ipsum...</p>
      <input value="some value 2" placeholder="some plcholder 2" />
    </div>
    <b-button class="mt-3" block @click="$bvModal.hide('b-modal-login')">Close Me (metoda na instanci)</b-button>
  </b-modal>
</template>

<script>
// TODO utilise Vue JS Modal instead - https://www.npmjs.com/package/vue-js-modal
  export default {
    name: 'LoginModal',
    methods: {
    },
    mounted: function() {
      this.$bvModal.show('b-modal-login')
    },
    updated: function() {
      this.$bvModal.show('b-modal-login')
    }
  }
</script>
