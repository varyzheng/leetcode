<template>
  <div class="hello">
    123
  </div>
</template>

<script>
import { myAtoi } from '../leetcode/myaToi';

export default {
  name: 'HelloWorld',
  data() {
    return {};
  },
  created() {
    window.myAtoi = myAtoi;
  },
};
</script>
