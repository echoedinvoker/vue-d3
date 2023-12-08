<template>
  <svg width="1000" height="200"></svg>
</template>

<script setup lang="ts">
import { useQuery } from "@tanstack/vue-query";
import { useD3Store } from "./store/d3Store";
import { render } from "./d3/render";


const d3Store = useD3Store()

useQuery({
  queryKey: ['d3'],
  queryFn: d3Store.mockApi,
  onSuccess: render,
  refetchInterval: 1000,
})
</script>
