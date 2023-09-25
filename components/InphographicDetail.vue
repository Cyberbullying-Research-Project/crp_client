<template>
    <div class="card">
        <div class="grid grid-cols-2 gap-10">            
            <!--Image product-->
            <div class="p-7">
                <img :src="inphographic.image" :alt="inphographic.title" class="mx-auto my-7"/>
            </div>
            <div class="p-7">
                <h2 class="text-4x1 my-7">{{ inphographic.title }}</h2>
                <p class="text-x1 my-7">{{ inphographic.price }}</p>
                <h3 class="font-bold border-b-2 mb-4 pb-2">Descripción</h3>
                <p class="mb-7">{{ inphographic.description }}</p>
                <button class="btn flex">
                    <i class="material-icons mr-2">add_shopping_cart</i>
                    <span>Agregar al carrito</span>
                </button>
            </div>            
        </div>        
    </div>
</template>

<script setup>
    const { inphographic } = defineProps(['inphographic']);
</script>

<style scoped>
    img {
        max-width: 400%;        
    }
</style>