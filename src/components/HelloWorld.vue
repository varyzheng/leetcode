<template>
  <div class="hello">
    123
  </div>
</template>

<script>
import { simplifyPath } from '../leetcode/71-简化路径';

export default {
  name: 'HelloWorld',
  data() {
    return {};
  },
  created() {
    window.simplifyPath = simplifyPath;
  },
};
</script>
