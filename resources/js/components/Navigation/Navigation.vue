<script>
    export default {
        data() {
            return {
                expanded: false,
                opened: null
            };
        },
        computed: {
            expandedClass() {
                return { 'expanded': this.expanded }
            }
        },
        mounted() {
            window.EventHandler.listen('expand-navigation', () => {
                this.expand();
            });
            window.EventHandler.listen('open-sub-navigation', (id) => {
                this.open(id);
            });
            window.EventHandler.listen('body-clicked', (event) => {
                if (!this.$el.contains(event.target)) {
                    this.hide();
                }
            });
        },
        methods: {
            expand() {
                if (this.expanded) {
                    this.hide();
                } else {
                    this.expanded = true;
                }
            },
            hide() {
                this.expanded = false;
                this.opened = null;
            },
            isOpened(id = null) {
                if (id) {
                    return this.opened === id;
                }
                return this.opened !== null;
            },
            open(id) {
                if (this.isOpened(id)) {
                    this.opened = null;
                } else {
                    this.opened = id;
                }
            }
        }
    };
</script>