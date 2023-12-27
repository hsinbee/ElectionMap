<script setup>
// import { ref } from "vue";
</script>

<template>
  <div class="loading_wrap">
    <div class="loading">
      <div class="loadingBear">
        <span><img src="../assets/images/logo/bearsearch.png" alt="bearsearch" /></span>
      </div>

      <span><img src="../assets/images/logo/map-tw.png" alt="map-tw" /></span>

      <h1>選民的心聲，正在揭示民意..</h1>
    </div>
  </div>
</template>

<style lang="scss">
@import url("https://fonts.googleapis.com/css2?family=Koulen&family=Noto+Sans+TC:wght@100&display=swap");

@font-face {
  font-family: "chenyuluoyan";
  src: url("./font/chenyuluoyan_thin-main/ChenYuluoyan-Thin-Monospaced.ttf")
    format("truetype");
}

.loading_wrap {
  background-color: #cefa54;;
  height: 100vh;
  margin: 0;
  padding: 0;
  overflow: hidden;

  &:before {
    content: "";
    position: absolute;
    width: 100%;
    height: 100%;

    background: radial-gradient(
      circle,
      rgb(248, 231, 159),
      rgb(198, 230, 176),
      rgb(154, 195, 236)
    );

    opacity: 0;
    animation: sky 5s infinite forwards;
    -webkit-animation: sky 3s infinite forwards;
    -moz-animation: sky 3s infinite forwards;
  }
  .loading {
    position: relative;
    z-index: 1;
    padding-top: 10%;
    color: #0f4e81;
    text-align: center;
    animation: textColor 10s infinite;
    -webkit-animation: textColor 10s infinite;
    -moz-animation: textColor 10s infinite;

    span {
      font-size: 50px;
      display: block;
      animation: spin 10s infinite;
      -webkit-animation: spin 10s infinite;
      -moz-animation: spin 10s infinite;
    }

    .loadingBear span img {
      animation: circleMove 4s linear infinite;
    }
  }
  h1 {
    // border: 2px solid#fff;
    overflow: hidden;
    width: 30ch;
    margin: 0 auto;
    font-family: "chenyuluoyan";
    line-height: 60px;
    white-space: nowrap;
    animation: type 3s steps(20, end) infinite alternate;
    -webkit-animation: type 3s steps(20, end) infinite alternate;
  }

  @keyframes sky {
    80% {
      opacity: 1;
    }
  }

  @-webkit-keyframes sky {
    50% {
      opacity: 1;
    }
  }

  @keyframes textColor {
    50% {
      color: #39678d;
    }
  }

  @-webkit-keyframes textColor {
    50% {
      color: #39678d;
    }
  }

  @keyframes type {
    from {
      width: 0;
    }
  }

  @keyframes circleMove {
    0% {
      transform: translate(0);
    }

    25% {
      transform: translate(100px, 200px);
    }

    50% {
      transform: translate(0px, 400px);
    }

    75% {
      transform: translate(-100px, 200px);
    }

    100% {
      transform: translate(0);
    }
  }
}
</style>
