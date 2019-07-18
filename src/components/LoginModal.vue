<template>
  <modal name="modal-login" id="modal-login">
    <div class="d-block text-center">
      <h3>Hello From This Modal!</h3>
      <input value="some value" placeholder="some plcholder" />
      <p> nejaky odstavecek lorem ipsum...</p>
      <input value="some value 2" placeholder="some plcholder 2" />
    </div>
    <b-button class="mt-3" @click="$modal.hide('modal-login')">Close Me</b-button>
  </modal>
</template>

<script>
  export default {
    name: 'LoginModal',
    methods: {
      show (id) {
        this.$modal.show(id);
      },
      hide (id) {
        this.$modal.hide(id);
      },
      beforeOpen (event) {
        console.log(event.params);
      }
    },
    mounted: function() {
      this.$modal.show('modal-login')
      // this.$modal.show('dialog', {
      //   title: 'Alert!',
      //   text: 'You are too awesome',
      //   buttons: [
      //     {
      //       title: 'Deal with it',
      //       handler: () => { alert('Woot!') }
      //     },
      //     {
      //       title: '',       // Button title
      //       default: true,    // Will be triggered by default if 'Enter' pressed.
      //       handler: () => {} // Button click handler
      //     },
      //     {
      //       title: 'Close'
      //     }
      //   ]
      // })
    },
    updated: function() {
      this.$modal.show('modal-login')
    }
  }
</script>
