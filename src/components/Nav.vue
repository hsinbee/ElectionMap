<script setup>
import { ref } from "vue";

const navlist = ref([
  { year: 2020, number: 15 },
  { year: 2016, number: 14 },
  { year: 2012, number: 13 },
  { year: 2008, number: 12 },
]);

const selectNavItem = ref(null);
</script>

<template>
  <div class="nav_container">
    <div class="nav_wrap">
      <ol v-for="(i, index) in navlist" :key="index">
        <li :class="{ selected: selectNavItem === index }">
          <router-link
            class="nav_link_top"
            :to="`/${i.year}_vote`"
            @click="selectNavItem = index"
            >{{ i.year }} 年</router-link
          >

          <router-link
            class="nav_link_bottom"
            :to="`/${i.year}_vote`"
            @click="selectNavItem = index"
            >第{{ i.number }}任總統選舉</router-link
          >
        </li>

        <img
          v-if="$route.path.indexOf(i.year) != -1"
          src="../assets/images/logo/nav_bear_logo.png"
          alt="nav_bear"
        />
      </ol>
    </div>

    <img src="../assets/images/design_material/vote_line.png" alt="vote_line" />
  </div>
</template>

<style lang="scss" scoped>
@import "@/assets/scss/base/color.scss";
@import "@/assets/scss/base/font.scss";


  .nav_container {
    // border: 3px solid#b11e1e;
    width: 338px;
    height: 100%;
    display: flex;
    justify-content: center;
    background-color: rgb(255, 255, 255);
    border-radius: 29px;
    box-shadow: 0px -3px 17px 0px rgba(0, 0, 0, 0.25) inset;
    position: relative;
    z-index: 999;

    > img {
      // border: 6px solid#b1650f;
      padding-top: 20px;
      width: 18px;
      height: 80%;
      position: absolute;
      right: 58px;
      z-index: -1;
    }
    .nav_wrap {
      // border: 3px solid#140707;

      ol {
        // border: 6px solid#0f35b1;
        padding: 0;
        display: flex;
        list-style-type: none;
        text-decoration: none;
        color: map-get($accent_color, accent_color2);

        > img {
          // border: 6px solid#0f35b1;
          height: 50px;
    
        }
      }

      li {
        // border: 5px solid#0aa521;

        text-decoration: none;
        padding-top: 10px;
      }
      .selected {
        background-color: $web_background;
        color: black;
      }
    }
  }

</style>
