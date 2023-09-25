<template>
    <div>
        <header>
            <nav>
                <ul>                    
                    <li><NuxtLink to="/ciberbullying/">Ciberbullying </NuxtLink></li>
                </ul>
            </nav>
        </header>
        <h1>Ciberbullying {{ formatReport }}</h1>        
        <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eveniet fugiat commodi fugit voluptatum quos error. Explicabo suscipit maxime amet voluptatum possimus vero ad libero voluptates culpa. Quo quaerat quidem consequuntur.</p>
        <div class="grid grid-cols-4 gap-5">
            <div v-for="i in inphographics">                
                <!--NuxtLink :to="`/ciberbullying/${formatReport}/${i.id}`" :key="i.id"-->
                    <InphographicCard :inphographic="i" :link="`/ciberbullying/${formatReport}/${i.id}`" />                     
                <!--/NuxtLink-->
            </div>
        </div>
        <nav>
            <ul>                    
                <li><NuxtLink to="/ciberbullying/inphographic">Infografía </NuxtLink></li>
                <li><NuxtLink to="/ciberbullying/podcast">Podcast</NuxtLink></li>
                <li><NuxtLink to="/ciberbullying/video">Video</NuxtLink></li>   
            </ul>
        </nav>
    </div>
</template>

<script setup>
    /**
     *  Dynamic route for ciberbullying formatReport [inphographic | podcast | video]
     */    
    const route = useRoute();
    const {formatReport} = route.params;
    
    setPageLayout(formatReport);
    const result = await useFetch('https://fakestoreapi.com/products');
    const  inphographics = result.data._value

    useHead(() => {
        return {
            title: `Ciberbullying ${formatReport}`,
            meta: [
                {
                    hid: 'description',
                    name: 'description',
                    content: `Ciberbullying ${formatReport}`
                }
            ]
        }
    })
</script>

<style scoped></style>