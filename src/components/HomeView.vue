<script setup>
// import { useMyStore } from "../stores/pinia.js";
// useMyStore().increment();

import Loading from "../components/Loading.vue";

import { ref, onMounted } from "vue";

const showLoading = ref(true);

onMounted(() => {
  setTimeout(() => {
    showLoading.value = false;
  }, 3800);
});

const voteList = ref([
  {
    groupimg: "/votemap/images/Party_emblem/g_progressiveparty.png",
    group: "民主進步黨",
    Presidentimg: "/votemap/images/President/english_chil.jpg",
    President: "蔡英文",
    wikipediaLink: "https://zh.wikipedia.org/zh-tw/%E8%94%A1%E8%8B%B1%E6%96%87",
  },
  {
    groupimg: "/votemap/images/Party_emblem/g_progressiveparty.png",
    group: "民主進步黨",
    Presidentimg: "/votemap/images/President/long_ting.jpg",
    President: "謝長廷",
    wikipediaLink: "https://zh.wikipedia.org/zh-tw/%E8%AC%9D%E9%95%B7%E5%BB%B7",
  },

  {
    groupimg: "/votemap/images/Party_emblem/or_peoplefirstarty.png",
    group: "親民黨",
    Presidentimg: "/votemap/assets/images/President/fish_chu.jpg",
    President: "宋楚瑜",
    wikipediaLink: "https://zh.wikipedia.org/zh-tw/%E5%AE%8B%E6%A5%9A%E7%91%9C",
  },

  {
    groupimg: "/votemap/images/Party_emblem/b_chinesenationalistparty.png",
    group: "中國國民黨",
    Presidentimg: "/votemap/assets/images/President/horse_nine.jpg",
    President: "馬英九",
    wikipediaLink: "https://zh.wikipedia.org/wiki/%E9%A6%AC%E8%8B%B1%E4%B9%9D",
  },

  {
    groupimg: "/votemap/images/Party_emblem/b_chinesenationalistparty.png",
    group: "中國國民黨",
    Presidentimg: "/votemap/assets/images/President/pig_loun.jpg",
    President: "朱立倫",
    wikipediaLink: "https://zh.wikipedia.org/wiki/%E9%A6%AC%E8%8B%B1%E4%B9%9D",
  },

  {
    groupimg: "/votemap/images/Party_emblem/b_chinesenationalistparty.png",
    group: "中國國民黨",
    Presidentimg: "src/assets/images/President/korea_fissh.jpg",
    President: "韓國瑜",
    wikipediaLink: "https://zh.wikipedia.org/wiki/%E9%9F%93%E5%9C%8B%E7%91%9C",
  },
]);
</script>

<template>
  <div>
    <Loading v-show="showLoading" />

    <div class="enter_container" v-show="!showLoading">
      <div class="enter_title">
        <img src="/votemap/images/logo/circle_bear_logo.png" alt="circle_bear_logo" />

        <h2 class="h2">台灣歷屆總統選舉 即時開票地圖</h2>
      </div>

      <p class="enter_year">2008 ~ 2020年</p>

      <div class="card_container">
        <img
          src="/votemap/images/Party_emblem/bottom_icon_2020_2016.png"
          alt="group_b_g_o"
          class="custom-image"
        />

        <div v-for="(i, index) in voteList" :class="`card_hvoer_bg${index}`">
          <div class="card_wrap">
            <a :href="i.wikipediaLink" target="_blank" rel="noopener noreferrer">
              <div class="card_title" :class="`bgcolor_${index}`">
                <img :src="i.groupimg" alt="groupimg" />

                <p class="label_body">{{ i.group }}</p>
              </div>

              <img :src="i.Presidentimg" alt="Presidentimg" />

              <div class="card_name label_body">{{ i.President }}</div>

              <span class="card_footer" :class="`bgcolor_${index}`"></span>
            </a>
          </div>
        </div>
      </div>

      <div class="enter_container_foot">
        <router-link to="/2020_vote">
          <button class="button_check h1" @click="">查看</button>
        </router-link>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
@import url("https://fonts.googleapis.com/css2?family=Koulen&family=Noto+Sans+TC:wght@100;300;800;900&family=Rampart+One&display=swap");

@import "@/assets/scss/base/color.scss";
@import "@/assets/scss/base/font.scss";

* {
  // outline: 1px solid#215d8b;

  a {
    text-decoration: none;
  }
}

body {
  .enter_container {
    background: url(../assets/images/design_material/bg_border.png),
      url(../assets/images/design_material/homepage_bg.png);

    background-size: cover;
    background-repeat: no-repeat;

    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding-top: 200px;

    .enter_title {
      display: flex;

      h2 {
        color: $gray_font_color;
      }
      img {
        width: 120px;
      }
    }

    .card_container {
      display: flex;

      gap: 51px;

      > img {
        width: 81px;
        height: 179px;
      }

      .card_wrap {
        display: flex;
        flex-direction: column;
        width: 140px;
      }
      .card_wrap:hover {
        transition: transform 0.5s ease;
        transform: translate(7px, -7px);
      }
      .card_hvoer_bg0,
      .card_hvoer_bg1 {
        background-color: map-get($second_color, second_color2);
        border-radius: 11px;
      }

      .card_hvoer_bg2 {
        background-color: map-get($second_color, second_color3);
        border-radius: 11px;
      }

      .card_hvoer_bg3,
      .card_hvoer_bg4,
      .card_hvoer_bg5 {
        background-color: map-get($second_color, second_color1);
        border-radius: 11px;
      }

      .card_title {
        display: flex;
        justify-content: center;
        align-items: center;
        gap: 5px;
        border-radius: 12px 12px 0px 0px;
        box-shadow: 0px -3px 17px 0px rgba(0, 0, 0, 0.25) inset;

        P {
          color: #ffffff;
        }
        img {
          width: 25px;
          height: 26.691px;
        }
      }
    }

    .card_name {
      width: 140px;
      height: 34px;
      display: flex;
      justify-content: center;
      align-items: center;
      color: #000000;
      background: #fafbff;
      box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.25) inset;
    }
    .card_footer {
      display: block;
      width: 100%;
      height: 20px;
      border-radius: 0px 0px 11px 11px;
      box-shadow: 0px -3px 17px 0px rgba(0, 0, 0, 0.25) inset;
    }
  }
}

.enter_container_foot {
  display: flex;
  flex-direction: column;

  align-items: center;
  padding-top: 70px;
  padding-bottom: 600px;
  box-shadow: none;
}

.bgcolor_0 {
  background-color: map-get($second_color, second_color2);
}
.bgcolor_1 {
  background-color: map-get($second_color, second_color2);
}
.bgcolor_2 {
  background-color: map-get($second_color, second_color3);
}
.bgcolor_3 {
  background-color: map-get($second_color, second_color1);
}
.bgcolor_4 {
  background-color: map-get($second_color, second_color1);
}
.bgcolor_5 {
  background-color: map-get($second_color, second_color1);
}

/* @mixin mobile{
  @media (max-width: 768px;) {

  }
}
@include mobile {

  } */
</style>
