<script setup>
import { ref } from "vue";
import Map from "../components/Map2016.vue";
import Nav from "../components/Nav.vue";

const voteList = ref([
  {
    groupimg: "images/Party_emblem/g_progressiveparty.png",
    group: "民主進步黨",
    Presidentimg: "images/President/english_chil.jpg",
    President: "蔡英文",
    wikipediaLink: "https://zh.wikipedia.org/zh-tw/%E8%94%A1%E8%8B%B1%E6%96%87",
    getVotes: "56.12%",
    getVotesnumber: "6,894,744  票",
  },

  {
    groupimg: "images/Party_emblem/b_chinesenationalistparty.png",
    group: "中國國民黨",
    Presidentimg: "images/President/pig_loun.jpg",
    President: "朱立倫",
    wikipediaLink: "https://zh.wikipedia.org/zh-tw/%E6%9C%B1%E7%AB%8B%E5%80%AB",
    getVotes: "31.04%",
    getVotesnumber: "3,813,365  票",
  },
  {
    groupimg: "images/Party_emblem/or_peoplefirstarty.png",
    group: "親民黨",
    Presidentimg: "images/President/fish_chu.jpg",
    President: "宋楚瑜",
    wikipediaLink: "https://zh.wikipedia.org/zh-tw/%E5%AE%8B%E6%A5%9A%E7%91%9C",
    getVotes: "12.83%",
    getVotesnumber: "1,576,861  票",
  },
]);
</script>

<template>
  <div class="web_container">
    <div class="web_map_container">
      <div class="web_wrap">
        <div class="title_wrap">
          <div class="title">
            <router-link to="/">
              <img src="../assets/images/logo/main_logo.png" alt="main_logo"
            /></router-link>
            <h3>2016年</h3>
            <h3>第 14 屆總統開票地圖</h3>
          </div>

          <div class="card_container">
            <div v-for="(i, index) in voteList" :class="`card_hvoer_bg${index}`">
              <div class="card_wrap">
                <a :href="i.wikipediaLink" target="_blank" rel="noopener noreferrer">
                  <div class="card_title" :class="`bgcolor_${index}`">
                    <img :src="i.groupimg" alt="groupimg" />

                    <p class="label_body">{{ i.group }}</p>
                  </div>

                  <img :src="i.Presidentimg" alt="Presidentimg" />

                  <div class="card_name label_body">{{ i.President }}</div>

                  <span class="card_footer label_footer" :class="`bgcolor_${index}`">{{
                    i.getVotes
                  }}</span>
                </a>
              </div>
            </div>
          </div>
        </div>

        <div class="coordinate_wrap">
          <img
            src="../assets/images/Party_emblem/bottom_icon_2020_2016.png"
            alt="coordinate"
          />
          <ol>
            <li class="label_body" v-for="(i, index) in voteList">
              {{ i.getVotesnumber }}
            </li>
          </ol>
        </div>
      </div>
      <Map />

      <Nav />
    </div>
  </div>
</template>

<style lang="scss" scoped>
@import "@/assets/scss/base/color.scss";
@import "@/assets/scss/base/font.scss";

* {
  // outline: 2px solid#903333;
  a {
    text-decoration: none;
  }

  .web_container {
    border: 50px solid $web_background;
    background-color: $web_background;

    .web_map_container {
      display: flex;
      gap: 40 0px;
      background-color: map-get($accent_color, accent_color2);
      border-radius: 20px;
      padding: 150px;
      .web_wrap {
        h3 {
          color: #ffffff;
        }
        .title img{
          width: 250px;
          height:  76px;
        }

        .card_container {
          display: flex;
          gap: 37px;

          .card_wrap {
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
              display: flex;
              justify-content: center;
              align-items: center;

              border-radius: 0px 0px 11px 11px;
              color: #ffffff;
              font-size: $h4;
              box-shadow: 0px -3px 17px 0px rgba(0, 0, 0, 0.25) inset;
            }
          }
          .card_wrap:hover {
            transition: transform 0.5s ease;
            transform: translate(7px, -7px);
          }

          .card_hvoer_bg0 {
            background-color: map-get($primary_color, primary_color2);
            border-radius: 11px;
          }

          .card_hvoer_bg1 {
            background-color: map-get($primary_color, primary_color1);
            border-radius: 11px;
          }
          .card_hvoer_bg2 {
            background-color: map-get($primary_color, primary_color5);
            border-radius: 11px;
          }
        }
      }
    }
  }
  .coordinate_wrap {
    display: flex;
    padding-top: 50px;

    ol {
      list-style: none;

      li {
        text-align: end;
        margin-bottom: 30px;
        color: #ffffff;
      }
    }
  }
}

.bgcolor_0 {
  background-color: map-get($primary_color, primary_color2);
}
.bgcolor_1 {
  background-color: map-get($primary_color, primary_color1);
}
.bgcolor_2 {
  background-color: map-get($primary_color, primary_color5);
}
</style>
