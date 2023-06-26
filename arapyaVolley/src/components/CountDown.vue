<template>
  <div class="countdown-container">
    <div class="countdown-timer">
      <div class="countdown-item">
        <div class="countdown-value">{{ countdownValue.days }}</div>
        <div class="countdown-label">Days</div>
      </div>
      <div class="countdown-item">
        <div class="countdown-value">{{ countdownValue.hours }}</div>
        <div class="countdown-label">Hours</div>
      </div>
      <div class="countdown-item">
        <div class="countdown-value">{{ countdownValue.minutes }}</div>
        <div class="countdown-label">Minutes</div>
      </div>
      <div class="countdown-item">
        <div class="countdown-value">{{ countdownValue.seconds }}</div>
        <div class="countdown-label">Seconds</div>
      </div>
    </div>
  </div>
</template>

<script>
import * as Countdown from 'countdown';
export default {
  data() {
    return {
      countdownValue: {
        days: 0,
        hours: 0,
        minutes: 0,
        seconds: 0,
      },
    };
  },
  methods: {
    startCountdown() {
      const targetDate = new Date('2023-07-29T10:00:00'); // Replace with your target date and time

      setInterval(() => {
        const now = new Date();
        const difference = targetDate - now;

        if (difference > 0) {
          const days = Math.floor(difference / (1000 * 60 * 60 * 24));
          const hours = Math.floor((difference / (1000 * 60 * 60)) % 24);
          const minutes = Math.floor((difference / 1000 / 60) % 60);
          const seconds = Math.floor((difference / 1000) % 60);

          this.countdownValue = {
            days,
            hours,
            minutes,
            seconds,
          };
        } else {
          // Countdown has already reached the target date
          this.countdownValue = {
            days: 0,
            hours: 0,
            minutes: 0,
            seconds: 0,
          };
        }
      }, 1000);
    },
  },
  mounted() {
    this.startCountdown();
  },

};
</script>

<style scoped>
.countdown-container {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 4em;
}

.countdown-timer {
  display: flex;
  justify-content: center;
  align-items: center;
}

.countdown-item {
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 0 1rem;
}

.countdown-value {
  font-size: 3rem;
  font-weight: bold;
}

.countdown-label {
  font-size: 1rem;
  text-transform: uppercase;
  margin-top: 0.5rem;
}
</style>
