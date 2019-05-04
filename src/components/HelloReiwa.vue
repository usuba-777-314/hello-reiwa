<template>
  <div class="hello-reiwa-host">
    <header>
      <h1 v-if="remainingTimeUntilReiwa > 0">さようなら、平成</h1>
      <h1 v-else>はじめまして、令和</h1>
    </header>

    <main>
      <div class="message-area">
        <div class="good-by-平成">
          <div class="dest" v-if="dest">{{dest}}</div>
          <p class="message">平成では誠にお世話になりました🙇</p>
        </div>

        <div v-if="remainingTimeUntilReiwa > 0" class="up-to-令和">
          <div class="label">令和まで</div>
          <div class="remaining-time">{{remainingDates}}日{{remainingHours}}時間{{remainingMinutes}}分{{remainingSeconds}}秒!!</div>
        </div>

        <div v-else class="happy-令和">
          <span>祝</span>
          <span>令</span>
          <span>和</span>
          <span>！</span>
        </div>
      </div>

      <div class="background">
        <div class="contents" :style="`animation-duration: ${duration}s`">
          <slot />
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

  props: {
    dest: String,
    sender: String,
    duration: {
      default: 120
    }
  },

  computed: {
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

  font-size: 35px;
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
  font-size: 15px;
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

main .happy-令和 {
  width: 250px;
  margin: 0 0 8px;
  padding: 16px 21px;
  background: aqua;
  opacity: 0.8;
  border-radius: 12px;
  justify-items: start;

  display: flex;
  justify-content: space-between;
}

main .happy-令和 * {
  font-size: 48px;
  font-weight: 600;
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
  border-right: 1px solid rgba(200, 200, 200, 0.8);
}

main .background .contents > *:last-child {
  border: none;
}

main .background .contents >>> .message {
  width: 400px;
  box-sizing: border-box;
  padding: 160px 0 160px;

  display: flex;
  flex-flow: column nowrap;
  justify-content: space-around;
  align-items: center;
}

main .background .contents >>> .message > * {
  padding: 8px 24px;
}

footer {
  flex-basis: 80px;
  height: 80px;
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
  padding: 8px 12px 0;

  font-size: 12px;
  line-height: 12px;

  text-align: right;
}
</style>