<template id="shop-template">
    <section class="add-shop">
        <h1>New Shop</h1>
        <form @submit.prevent="handleSubmit">
            <label>
                Name:
                <input type="text" name="name" placeholder="Name" required
                v-model="shop.name">
            </label>

            <label>
                Neighborhood:
                <input type="text" name="neighborhood" placeholder="Neighborhood" required
                v-model="shop.neighborhood">
            </label>

            <label>
                Number:
                <input type="text" name="number" placeholder="Number" required
                v-model="shop.number">
            </label>

            <label>
                In House Roaster:
                <input type="text" name="inHouseRoaster" placeholder="InHouseRoaster" required
                v-model="shop.inHouseRoaster">
            </label>

            <label>
                <button type="submit">Add</button>
            </label>
        </form>            
    </section>
</template>

<script>

const initShop = () => {
    return {
        name: '',
        neighborhood: '',
        number: '',
        inHouseRoaster: ''
    };
};

export default {
    props: {
        onAdd: {
            type: Function,
            required: true
        }
    },
    data() {
        return {
            shop: initShop()
        };
    },
    methods: {
        handleSubmit() {
            this.onAdd(this.shop)
            //this fires when save is complete and data added to neghborhoods array
            .then(() => {
                this.shop = initShop();
            });
        }
    }
};

</script>

<style>

.add-neighborhood {
    width: 300px;
    text-align: left;
    margin: auto;
}

label {
    display: block;
}
</style>
