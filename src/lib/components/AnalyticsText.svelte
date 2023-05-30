<script lang="ts">
    export let text: String
</script>

{text}
<span class="ml-1.5 w-[14px] h-[14px] inline-block">
    <slot>
        <div class="w-full h-full rounded-full bg-white"></div>
    </slot>
</span>