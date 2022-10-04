<template>{{ txt }}</template>
<script>
// import VueClipboard from 'vue-clipboard2'
// VueClipboard.config.autoSetContainer = true
export default {
    name: 'ClipInfo',
    props: {
        txt: {
            type: String,
            default: "copy"
        }
    },
    methods: {
        onCopy: function (e) {
            alert('You just copied: ' + e.text)
        },
        onError: function (e) {
            alert('Failed to copy texts')
        }
    }
}
</script>