<template>
<section>
    <h2>Portland Coffee Shops</h2>
    <p v-if="!shops">Loading shops...</p>
    <ul v-else class="list">
        <Shop 
            v-for="shop in shops"
            :key="shop.name"
            :shop="shop"
        />
    </ul>   
</section>
</template>

<script>
import Shop from './Shop';
import { getShops } from '../services/api';

export default {
    data() {
        return {
            shops: null
        };
    },
    created() {
        getShops()
            .then(shops => {
                this.shops = shops;
            });
    },
    components: {
        Shop,
    },
    // methods: {

    // }
};

</script>


