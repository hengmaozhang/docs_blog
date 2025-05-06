<!-- .vitepress/theme/Layout.vue -->
<template>
  <div class="vitepress">
    <aside class="sidebar" :style="{ width: sidebarWidth + 'px' }">
      <slot name="sidebar" />
    </aside>

    <main class="content">
      <slot />
    </main>

    <!-- 拖拽条 -->
    <div
      class="resizer"
      @mousedown="startResizing"
    ></div>
  </div>
</template>

<script setup>
import { ref } from 'vue';

const sidebarWidth = ref(250); // 初始宽度

const startResizing = (e) => {
  const startX = e.clientX;

  const handleMouseMove = (event) => {
    const newWidth = sidebarWidth.value + (event.clientX - startX);
    if (newWidth >= 150 && newWidth <= 400) {
      sidebarWidth.value = newWidth;
    }
  };

  const stopResizing = () => {
    document.removeEventListener('mousemove', handleMouseMove);
    document.removeEventListener('mouseup', stopResizing);
  };

  document.addEventListener('mousemove', handleMouseMove);
  document.addEventListener('mouseup', stopResizing);
};
</script>