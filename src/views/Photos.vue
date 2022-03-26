<template>
    <div>
        <h1>Photo gallery</h1>
        <Photo />
    </div>
</template>

<script>

import Photo from "@/components/Photo.vue";

export default {
    name: 'Photos',
    components:{
        Photo
    }
}
</script>