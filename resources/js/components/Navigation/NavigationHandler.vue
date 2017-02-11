<template>
    <div class="handlers">
        <a :href="telephoneAttribute"><span class="fa fa-phone"></span> 0800 800 800</a>
        <span class="trigger" @click.prevent="expand()"><span class="fa fa-bars"></span></span>
    </div>
</template>
<script>
    export default {
        props: {
            telephone: {
                type: String,
                required: true
            }
        },
        computed: {
            telephoneAttribute() {
                return 'tel:' + this.telephone.replace(/ /g,'');
            }
        },
        methods: {
            expand() {
                window.EventHandler.fire('expand-navigation');
            }
        }
    };
</script>