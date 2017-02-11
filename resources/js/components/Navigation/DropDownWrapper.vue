<template>
    <li class="has-dropdown" :class="openedClass">
        <a href="#" @click.prevent="open(id)" v-text="label"></a>
        <ul class="dropdown">
            <slot></slot>
        </ul>
    </li>
</template>
<script>
    export default {
        props: {
            id: {
                type: Number,
                required: true
            },
            label: {
                type: String,
                required: true
            },
            isOpened: {
                type: Boolean,
                required: true
            }
        },
        computed: {
            openedClass() {
                return this.isOpened ? 'opened' : null;
            }
        },
        methods: {
            open() {
                window.EventHandler.fire('open-sub-navigation', this.id);
            }
        }
    };
</script>