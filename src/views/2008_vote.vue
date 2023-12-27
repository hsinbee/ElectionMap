<script setup>
import { ref } from "vue";
import Map from "../components/Map2008.vue";
import Nav from "../components/Nav.vue";

const voteList = ref([
  {
    groupimg: "images/Party_emblem/b_chinesenationalistparty.png",
    group: "中國國民黨",
    Presidentimg: "images/President/horse_nine.jpg",
    President: "馬英九",
    wikipediaLink: "https://zh.wikipedia.org/wiki/%E9%A6%AC%E8%8B%B1%E4%B9%9D",
    getVotes: "58.44%",
    getVotesnumber: "7,659,014  票",
  },

  {
    groupimg: "images/Party_emblem/g_progressiveparty.png",
    group: "民主進步黨",
    Presidentimg: "images/President/long_ting.jpg",
    President: "謝長廷",
    wikipediaLink: "https://zh.wikipedia.org/wiki/%E8%AC%9D%E9%95%B7%E5%BB%B7",
    getVotes: "41.55%",
    getVotesnumber: "5,444,949  票",
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
            <h3>2008年</h3>
            <h3>第 12 屆總統開票地圖</h3>
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
            src="../assets/images/Party_emblem/bottom_icon_2008.png"
            alt="coordinate"
          />
          <ol>
            <li class="label_body" v-for="(i, index) in voteList">
              {{ i.getVotesnumber }}
            </li>
          </ol>
        </div>
      </div>

      <Map /> <Nav />
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
            background-color: map-get($primary_color, primary_color1);
            border-radius: 11px;
          }

          .card_hvoer_bg1 {
            background-color: map-get($primary_color, primary_color2);
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
  background-color: map-get($primary_color, primary_color1);
}
.bgcolor_1 {
  background-color: map-get($primary_color, primary_color2);
}
</style>
