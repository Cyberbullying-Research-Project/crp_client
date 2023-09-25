<template>
    <div>
        <InphographicDetail  :inphographic="inphographic"/>
    </div>    
    <nav>
        <ul>                    
            <li><NuxtLink to="/ciberbullying/inphographic">Infografía </NuxtLink></li>
            <li><NuxtLink to="/ciberbullying/podcast">Podcast</NuxtLink></li>
            <li><NuxtLink to="/ciberbullying/video">Video</NuxtLink></li>   
        </ul>
    </nav>
</template>

<script setup>
    /**
     *  Dynamic route for ciberbullying formatReport [inphographic | podcast | video]
     *  Dynamic route for ciberbullying id
     */
    const route = useRoute();    
    const { id, formatReport} = route.params;
    
    const  { data } = await useFetch(`https://fakestoreapi.com/products/${id}`);
    const inphographic = data.value

    if(!inphographic) {
        throw createError({ statusCode: 404, statusMessage: 'Inphographic not found'  });
    }

    useHead(() => {
        return {
            title: `Ciberbullying ${inphographic.title}`,
            meta: [
                {
                    hid: 'description',
                    name: 'description',
                    content: `Ciberbullying ${inphographic.description}`
                }
            ]
        }
    })

</script>

<style scoped>

</style>