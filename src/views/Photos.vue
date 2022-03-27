<template>
    <div>
        <h1>Photo gallery</h1>
        <!-- RouterLink takes the route where it is hosted -->
        <router-link :to="{name: 'photos', params: {id : item}}" 
        v-for="(item, index) of arrayPhotos" :key="index">
            <button>Photo {{item}}</button>
        </router-link>
        <Photo />
        <button @click="home">Home</button>
        <button @click="previous">Previous</button>
        <button @click="next">Next</button>
    </div>
</template>

<script>

import Photo from "@/components/Photo.vue";

export default {
    name: 'Photos',
    components:{
        Photo
    },
    data(){
        return{
            arrayPhotos: [1, 2, 3]
        }         
    },
    methods: {
        home(){
            this.$router.push('/')
        },
        previous(){
            this.$router.go(-1)
        },
        next(){
            this.$router.go(1)
        }
    },
}
</script>