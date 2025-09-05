<script setup lang="ts">
const languages: string[] = ['Python', 'C#', 'JAVA', 'PHP', 'JavaScript', 'TypeScript']
const databases: string[] = ['SQL Server', 'MySQL', 'PostgreSQL', 'MongoDB']
const tools: string[] = ['.Net', 'NodeJS', 'Docker', 'Git', 'Github']
</script>

<template>
  <p>Languages</p>
  <div class="tags">
    <span v-for="language in languages" :key="language" class="tag">{{ language }}</span>
  </div>
  <p>Databases</p>
  <div class="tags">
    <span v-for="database in databases" :key="database" class="tag">{{ database }}</span>
  </div>
  <p>Tools & Frameworks</p>
  <div class="tags">
    <span v-for="tool in tools" :key="tool" class="tag">{{ tool }}</span>
  </div>
</template>

<style scoped></style>
