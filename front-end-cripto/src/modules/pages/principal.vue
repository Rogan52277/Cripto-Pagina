<template>
  <Disclosure as="nav" class="bg-cyan-600" v-slot="{ open }">
    <div class="mx-auto max-w-7xl px-2 sm:!px-6 lg:!px-8">
      <div class="relative flex h-16 items-center justify-between">
        <div class="absolute inset-y-0 left-0 flex items-center sm:hidden">
          <!-- Mobile menu button-->
          <DisclosureButton class="relative inline-flex items-center justify-center rounded-md p-2 text-gray-400  hover:text-white ">
            <span class="absolute -inset-0.5" />
            <span class="sr-only">Abrir menu de paginas</span>
            <Bars3Icon v-if="!open" class="block h-6 w-6" aria-hidden="true" />
            <XMarkIcon v-else class="block h-6 w-6" aria-hidden="true" />
          </DisclosureButton>
        </div>
        <div class="flex flex-1 items-center justify-center sm:items-stretch sm:!justify-start">
          <div class="flex flex-shrink-0 items-center">
            <router-link to="/" class="text-white hover:text-gray-300 ">Mi pagina persona<br> Para la materia Cripto</router-link>
          </div>
          <div class="hidden sm:ml-14 sm:block">
            <div class="flex space-x-4">
              <a v-for="item in navigation" :key="item.name" :href="item.href" :class="[item.current ? 'bg-gray-800 text-white' : 'text-white hover:bg-gray-700 hover:text-white', 'rounded-md px-3 py-2 text-sm font-medium']" :aria-current="item.current ? 'page' : undefined">{{ item.name }}</a>
            </div>
          </div>
        </div>

        <div class="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">
          <!-- Profile dropdown -->
          <Menu as="div" class="relative ml-3">
            <div>
              <MenuButton class="relative flex rounded-full  text-sm focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800">
                <span class="absolute -inset-1.5" />
                <span class="sr-only">Abrir menu de usuario</span>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="white" class="size-6">
                  <path stroke-linecap="round" stroke-linejoin="round" d="M17.982 18.725A7.488 7.488 0 0 0 12 15.75a7.488 7.488 0 0 0-5.982 2.975m11.963 0a9 9 0 1 0-11.963 0m11.963 0A8.966 8.966 0 0 1 12 21a8.966 8.966 0 0 1-5.982-2.275M15 9.75a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
                </svg>

              </MenuButton>
            </div>
            <transition enter-active-class="transition ease-out duration-100" enter-from-class="transform opacity-0 scale-95" enter-to-class="transform opacity-100 scale-100" leave-active-class="transition ease-in duration-75" leave-from-class="transform opacity-100 scale-100" leave-to-class="transform opacity-0 scale-95">
              <MenuItems class="absolute right-0 z-10 mt-2 w-48 origin-top-right rounded-md bg-white py-1 shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
                
                <MenuItem v-slot="{ active }">
                  <a href="#/login" :class="[active ? 'bg-gray-100' : '', 'block px-4 py-2 text-sm text-gray-700']">Inicio de sesión</a>
                </MenuItem>
              </MenuItems>
            </transition>
          </Menu>
        </div>
      </div>
    </div>

    <DisclosurePanel class="sm:hidden">
      <div class="space-y-1 px-2 pb-3 pt-2">
        <DisclosureButton v-for="item in navigation" :key="item.name" as="a" :href="item.href" :class="[item.current ? 'bg-gray-900 text-white' : 'text-gray-300 hover:bg-gray-700 hover:text-white', 'block rounded-md px-3 py-2 text-base font-medium']" :aria-current="item.current ? 'page' : undefined">{{ item.name }}</DisclosureButton>
      </div>
    </DisclosurePanel>
  </Disclosure>

  <div class="flex md:justify-center">
    <div class="w-full md:w-4/5 grid grid-cols-1 divide-y-[3px]">
      <div class="sm:grid grid-rows-3 grid-flow-col gap-4 mt-3">
        <div class="ml-2 mr-2 row-span-3 rounded-lg bg-white border-2 border-black animate-fadeInUp1 ">
          <img class="mx-auto w-auto" src="@/assets/images/escom.jpg" alt="Your Company">
        </div>
        <div class="col-span-2 rounded-lg bg-white border-2 border-black animate-fadeInUp0_7 mt-2 ml-2 mr-2">
          <div>
            <p class="text-center text-2xl">
              ¿Quien soy?
            </p>
          </div>
        </div>
        <div class="row-span-2 col-span-2 rounded-lg bg-white border-2 border-black animate-fadeInUp0_7 mt-2 ml-2 mr-2">
          <div>
            <p>
              Soy un chico que estudia en la ESCOM, que se encuentra apasionado por estudiar aquí, ya que me ha permitido conocer muchas personas importantes
            </p>
          </div>
        </div>
      </div>
      <div class="sm:grid grid-rows-3 grid-flow-col gap-4 mt-5">
        <div class="col-span-2 rounded-lg bg-white border-2 border-black animate-fadeInUp0_7 ml-2 mr-2">
          <div>
            <p class="text-center text-2xl">
              ¿Cuales son mis pasatiempos?
            </p>
          </div>
        </div>
        <div class="row-span-2 col-span-2 rounded-lg bg-white border-2 border-black animate-fadeInUp0_7 mt-2 ml-2 mr-2">
          <div>
            <p >
              Me gusta hacer mucha variedad de cosas ya que no me limito en cuestion de realizar actividades, ya que a lo largo de este tiempo
              me he dedicado a muchas actividades como por ejemplo, en la secundaria solia jugar voleibol y salto de cuerda,
              en la preparatoria me dique a jugar basketball y andas mucho en bicicleta, sin embargo llego pandemia donde no realice 
              nada de actividad pero una vez estando aqui y la disponibilidad de tiempo que tengo me he dedicado de lleno a tenis de mesa.
              <br>
              Tambien he ido a hacer senderismo, escala y rapel.
            </p>
          </div>
        </div>
        <div class="row-span-3 rounded-lg bg-white border-2 border-black animate-fadeInUp1 sm:w-80 mt-2">
          <v-carousel
            show-arrows="hover"
            cycle
            hide-delimiter-background
          >
            <v-carousel-item
              v-for="(item, i) in item"
              :key="i"
              :src="item.src"
              cover
            >
            </v-carousel-item>
          </v-carousel>
        </div>
      </div>
    </div>
  </div>  

</template>

<script setup>
import { onMounted, ref } from 'vue'
import { Disclosure, DisclosureButton, DisclosurePanel, Menu, MenuButton, MenuItem, MenuItems } from '@headlessui/vue'
import { Bars3Icon, XMarkIcon } from '@heroicons/vue/24/outline'


onMounted(async()=>{
  
})

const navigation = [
  { name: 'Descargar CV', href: '/CV - actualizado.pdf'},
  
]


 
  const item= [
   {src:"/img1.jpg"},
   {src:"/img2.jpg"},
   {src:"/img3.jpg"},
   {src:"/img4.jpg"},
   {src:"/img5.jpg"},
  ]
  


</script>