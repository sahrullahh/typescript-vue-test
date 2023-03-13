<script lang="ts">
  import { defineComponent } from "vue";
  import { reactive } from "vue";

  export default defineComponent({
    setup() {
      let self: string[] = reactive([
        "",
        "Fokuslah.",
        "Menjadi seorang pemimpi",
        "Emang tidak semudah yang kamu harapkan.",
        "Perlu usaha, dan juga proses",
        "Kadang memang merasa naik dan turun",
        "Jadi, wajar saja",
        "Naik bukan karena kamu, sudah hebat",
        "Turun bukan berati kamu, sudah kalah",
        "Melainkan",
        "Naik membuat mu, sudah berusaha",
        "Turun masih membuat mu berusaha",
        "Karena usaha tidak selalu naik dan turun",
        "it's my mind said",
        "Just for me, not yours",
      ]);
      let message: string | number = "";
      return {
        self,
        message,
      };
    },
    data() {
      return {
        index: 0,
      };
    },
    methods: {
      changeMessage: function () {
        this.index++;
        this.message = this.self[this.index];
      },
    },

    mounted() {
      let intervalTime = setInterval(() => {
        this.changeMessage();
        // if (this.index == 5) {
        //   clearInterval(intervalTime);
        // }
        if (this.index >= this.self.length) {
          this.index = 0;
        }
      }, 2800);
    },
  });
</script>

<template>
  <div>
    <div class="text-center flex flex-row justify-center mt-80 p-5">
      <transition name="slide-fade">
        <h1
          v-if="index > 0"
          class="text-5xl font-bold text-white"
        >
          {{ message }}
        </h1>
      </transition>
    </div>
    <p
      class="text-center"
      v-if="index == 7"
    >
      Wew
    </p>
    <p
      class="text-center"
      v-if="index == 8"
    >
      Anjay
    </p>
    <p
      class="text-center"
      v-if="index == 9"
    >
      Melainkan apa?
    </p>
    <p
      class="text-center"
      v-if="index == 13"
    >
      Kadang kegabutanku, membuat pikiran ku, suka diluar ekspetasi
    </p>
    <p
      class="text-center"
      v-if="index == 14"
    >
      Sejak kapan gw jadi motivator untuk diri sendiri
    </p>
  </div>
</template>

<style>
  .slide-fade-enter-active {
    transition: all 0.3s ease-out;
  }

  .slide-fade-leave-active {
    transition: all 0.2s cubic-bezier(1, 0.5, 0.8, 1);
  }

  .slide-fade-enter-from,
  .slide-fade-leave-to {
    transform: translateY(20px);
    opacity: 0;
  }
</style>
