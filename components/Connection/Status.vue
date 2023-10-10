<template>
  <!--form @submit.prevent="onSubmit">
    <input v-model="value" />

    <button type="submit" :disabled="isLoading">Submit</button>
  </form-->
</template>

<script>
/*import { socket } from "@/socket";

export default {
  name: "MyForm",

  data() {
    return {
      isLoading: false,
      value: ""
    }
  },

  methods: {
    onSubmit() {
      this.isLoading = true;

      socket.timeout(5000).emit("create-something", this.value, () => {
        this.isLoading = false;
      });
    },
  }
}*/
</script>

<!--template>
    <div>

    </div>
</template>

<script setup>
    import { reactive } from "vue";
    import { io } from "socket.io-client";

    export const state = reactive({
    connected: false,
    fooEvents: [],
    barEvents: []
    });

    // "undefined" means the URL will be computed from the `window.location` object
    const URL = process.env.NODE_ENV === "production" ? undefined : "http://localhost:4000";

    export const socket = io(URL);

    socket.on("connect", () => {
    state.connected = true;
    });

    socket.on("disconnect", () => {
    state.connected = false;
    });

    socket.on("foo", (...args) => {
    state.fooEvents.push(args);
    });

    socket.on("bar", (...args) => {
    state.barEvents.push(args);
    });
</script>

<style scoped>

</style-->