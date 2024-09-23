<template>
  <div class="grid grid-cols-1 md:grid-cols-2 mt-28 md:mt-40 px-6 py-12 lg:px-8" id="app">
    <!-- Imagen con auto centrado y ajuste de ancho -->
    <div class="w-full md:w-10/12 mx-auto">
      <img class="mx-auto md:ml-0 w-3/4" src="@/assets/images/not-found.png" alt="Page not found illustration" />
    </div>

    <!-- Contenedor de texto y botón -->
    <div class="flex flex-col items-center md:items-start">
      <!-- Texto de 404 -->
      <div class="text-5xl md:text-6xl lg:text-8xl lg:mt-3 items-text-center md:items-text-left">
        <p>404<br />Page not found</p>
      </div>

      <!-- Botón -->
      <button type="button" @click="regresar" 
        class="flex w-52 h-10 mt-5 items-center justify-center rounded-md bg-cyan-400 px-3 py-1.5 text-sm font-semibold 
        text-white shadow-sm hover:bg-cyan-500 focus-visible:outline focus-visible:outline-2 
        focus-visible:outline-offset-2 focus-visible:outline-cyan-600">
        Regresar al inicio
      </button>
    </div>
  </div>
</template>

<script>
export default {
  methods: {
    regresar() {
      this.$router.push({ name: "loginForm" });
    }
  }
};
</script>
