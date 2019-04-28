<template>
  <HelloReiwa :dest="dest" :sender="sender" :duration="120">
    <div class="message">
      <p>これが</p>
      <p>平成最後の…</p>
    </div>

    <img src="/image1.jpeg">

    <div class="message">
      <p>Vue.jsで</p>
      <p>大規模アプリケーション作れるの？</p>
      <p>って聞かれたら、</p>
      <p>「私がいれば大丈夫です」</p>
      <p>って返しますね✌</p>
    </div>

    <div class="message">
      <p v-for="(message, index) in messages" :key="index">{{message}}</p>
      <p>令和で会いましょう</p>
      <p>令和でもよろしくお願い申し上げます✌️</p>
    </div>

    <div class="message">
      <p>（作るのに4時間かかった………）</p>
      <p>（期待のハードルを超えられたかな………）</p>
      <p>（令和でもがんばるぞい）</p>
    </div>
  </HelloReiwa>
</template>

<script>
import HelloReiwa from '@/components/HelloReiwa.vue'

export default {
  components: {
    HelloReiwa
  },

  computed: {
    dest() {
      return this.$route.query.dest;
    },

    sender() {
      return this.$route.query.sender;
    },

    messages() {
      if (this.$route.query.messages == null) return [];
      return this.$route.query.messages.split(",");
    }
  }
}
</script>
