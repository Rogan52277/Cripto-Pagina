
<template>
    <div class="flex min-h-full flex-col justify-center px-6 py-12 lg:px-8">
        <div class="sm:mx-auto sm:w-full sm:max-w-sm">
            <img class="mx-auto h-40 w-auto" src="@/assets/images/cripto.png" alt="Your Company">
            <h2 class="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">Iniciar sesión</h2>
        </div>

        <div class="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
            <form class="space-y-6" @submit.prevent="loginJWT">
            <div>
                <label for="email" class="block font-medium leading-6 text-gray-900">Correo electronico</label>
                <div class="mt-2">
                <input 
                    id="email"
                    name="email"
                    v-model="idUsuario"
                    required class="block w-full rounded-md border-0
                 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-cyan-300 placeholder:text-gray-400 focus:ring-2
                 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6">
                </div>
            </div>

            <div>
                <div class="flex items-center justify-between">
                <label for="password"class="block font-medium leading-6 text-gray-900">Contraseña</label>
                <div class="text-sm">
                    <a href="#" class="font-semibold text-indigo-600 hover:text-indigo-500">Recuperar contraseña</a>
                </div>
                </div>
                <div class="mt-2">
                <input 
                    id="password"
                    name="password"
                    type="password"
                    autocomplete="current-password"
                    v-model="contrasena"
                    required class="block w-full
                rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-cyan-300 placeholder:text-gray-400 focus:ring-2
                focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6">
                </div>
            </div>

            <div>
                <button type="submit" class="flex w-full justify-center rounded-md bg-cyan-400 px-3 py-1.5 text-sm font-semibold
                leading-6 text-black shadow-sm hover:bg-cyan-500 focus-visible:outline focus-visible:outline-2
                focus-visible:outline-offset-2 focus-visible:outline-red-600">Iniciar sesión</button>
            </div>
            </form>
            
        </div>
    </div>

</template>

<script>
import { toast } from "vue3-toastify"


</script>
