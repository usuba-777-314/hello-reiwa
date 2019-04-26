<template>
  <div class="hello-reiwa-host">
    <header>
      <h1>さようなら、平成</h1>
    </header>

    <main>
      <div class="message-area">
        <div class="good-by-平成">
          <div class="dest" v-if="dest">{{dest}}</div>
          <p class="message">平成では誠にお世話になりました🙇</p>
        </div>

        <div class="up-to-令和">
          <div class="label">令和まで</div>
          <div class="remaining-time">{{remainingDates}}日{{remainingHours}}時間{{remainingMinutes}}分{{remainingSeconds}}秒!!</div>
        </div>
      </div>

      <div class="background">
        <div class="contents">
          <div class="message">
            <p>これが</p>
            <p>平成最後の…</p>
          </div>

          <img src="/image1.jpeg">

          <div class="message">
            <p>イラストは頂きものです</p>
            <p>ありがとうございます</p>
          </div>

          <img src="/image2.jpeg">

          <div class="message">
            <p>Vue.jsで</p>
            <p>大規模アプリケーション作れるの？</p>
            <p>って聞かれたら、</p>
            <p>「私がいれば大丈夫です」</p>
            <p>って返しますね✌</p>
          </div>

          <img src="/image3.jpeg">

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
        </div>
      </div>
    </main>

    <footer>
      <div v-if="sender" class="sender">By {{sender}}</div>
    </footer>
  </div>
</template>

<script>
const SECOND = 1000;
const MINUTE = SECOND * 60;
const HOUR = MINUTE * 60;
const DATE = HOUR * 24;

export default {
  data() {
    return {
      now: new Date()
    };
  },

  computed: {
    search() {
      const search = location.search;
      if (search == null) return {};

      return decodeURIComponent(search)
        .slice(1)
        .split("&")
        .map(kv => {
          const [ key, value ] = kv.split("=");
          return { key, value };
        })
        .reduce((result, {key, value}) => {
          result[key] = value;
          return result;
        }, {});
    },

    dest() {
      return this.search.dest;
    },

    sender() {
      return this.search.sender;
    },

    messages() {
      if (this.search.messages == null) return [];
      return this.search.messages.split(",");
    },

    remainingTimeUntilReiwa() {
      const reiwa = new Date("2019/05/01 00:00:00+09:00");
      return reiwa.getTime() - this.now.getTime();
    },

    remainingDates() {
      return Math.floor(this.remainingTimeUntilReiwa / DATE);
    },

    remainingHours() {
      const remainingTime = this.remainingTimeUntilReiwa % DATE;
      return Math.floor(remainingTime / HOUR);
    },

    remainingMinutes() {
      const remainingTime = this.remainingTimeUntilReiwa % HOUR;
      return Math.floor(remainingTime / MINUTE);
    },

    remainingSeconds() {
      const remainingTime = this.remainingTimeUntilReiwa % MINUTE;
      return Math.floor(remainingTime / SECOND);
    }
  },

  created() {
    setInterval(() => this.now = new Date(), 1000);
  }
}
</script>

<style scoped>
.hello-reiwa-host {
  display: flex;

  flex-flow: column nowrap;
  justify-content: space-between;
  align-items: center;

  width: 100vw;
  height: 100vh;
  margin: 0;
  padding: 0;
}

header {
  flex-basis: 64px;
  height: 64px;
  box-sizing: border-box;

  width: 100%;
  border-bottom: 1px solid #555;
}

header h1 {
  margin: 0;
  padding: 0;

  font-size: 36px;
  line-height: 64px;
  text-align: center;
}

main {
  flex: 1 1 auto;
  width: 100%;

  position: relative;
}

main .message-area {
  height: 100%;
  box-sizing: border-box;

  padding: 0 12px;

  display: flex;
  flex-flow: column nowrap;
  justify-content: space-between;
  align-items: center;

  text-align: center;

  position: relative;
  z-index: 100;
}

main .good-by-平成 {
  margin: 8px 0;
  padding: 8px 24px;
  font-size: 16px;
  line-height: 32px;

  background: white;
  color: #555;
  border-radius: 4px;
  opacity: 0.8;
}

main .up-to-令和 {
  width: 250px;
  margin: 0 0 8px;
  padding: 12px 8px;
  background: aqua;
  opacity: 0.8;
  border-radius: 12px;
  justify-items: start;
}

main .up-to-令和 .label {
  font-weight: 600;
  margin-bottom: 12px;
}

main .up-to-令和 .remaining-time {
  font-size: 24px;
  line-height: 24px;
}

main .background {
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;

  overflow: hidden;
}

main .background .contents {
  position: absolute;
  height: 100%;

  display: flex;
  animation-duration: 90s;
  animation-name: SLIDE;
  animation-iteration-count: infinite;
}

@keyframes SLIDE {
  0% {
    transform: translateX(12px);
  }
  50% {
    transform: translateX(calc(-100% + 100vw - 12px));
  }
  100% {
    transform: translateX(12px);
  }
}

main .background .contents > * {
  height: 100%;
  box-sizing: border-box;
}

main .background .contents .message {
  width: 400px;
  padding: 160px 0 160px;

  display: flex;
  flex-flow: column nowrap;
  justify-content: space-around;
  align-items: center;
}

main .background .contents .message > * {
  padding: 8px 24px;
}

footer {
  flex-basis: 40px;
  height: 40px;
  box-sizing: border-box;

  width: 100%;
  border-top: 1px solid #555;
}

footer .sender {
  width: 100%;
  max-width: 1200px;
  height: 100%;
  box-sizing: border-box;

  margin: 0 auto;
  padding: 16px 12px 8px;

  font-size: 16px;
  line-height: 16px;

  text-align: right;
}
</style>