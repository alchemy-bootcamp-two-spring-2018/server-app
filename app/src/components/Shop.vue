<template id="shop-template">
    <article>
        <h3>{{ shop.name }}</h3>
        <p>Neighborhood: {{ shop.neighborhood }}</p>
        <p>Number: {{ shop.number }}</p>
        <p>In House Roaster: {{ shop.inHouseRoaster }}</p>
    </article>
</template>

<script>

    export default {
        props: ['shop'],
    };

</script>