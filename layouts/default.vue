<template>
  <div>
    <!-- <applogic/> -->
    <nuxt/>
  </div>
</template>

<style>
.alloy-page {
  /* transition: all 0.5s cubic-bezier(0.55, 0, 0.1, 1); */
  /* display: block; */
  min-height: 100vh;
  width: 100%;
}

/* .page-leave-active,
.page-enter-active {
  transition: transform, opacity;
  transition-duration: 600ms;
  transition-timing-function: ease-in;
  overflow: hidden;
}
.page-leave-active {
  transition-timing-function: ease-out;
}
.page-enter,
.page-leave-active {
  opacity: 0;
  transform: scale(4);
}
.page-leave,
.page-enter-active {
  opacity: 1;
  transform: scale(0);
} */

.page-enter-active {
  animation: acrossIn 0.4s ease-out both;
}
.page-leave-active {
  animation: acrossOut 0.6s ease-in both;
}
@keyframes acrossIn {
  0% {
    transform: scale(0);
    /* transform: translate3d(-100%, 0, 0); */
  }
  100% {
    transform: scale(1);
    /* transform: translate3d(0, 0, 0); */
  }
}
@keyframes acrossOut {
  0% {
    transform: scale(1);
    opacity: 1;
  }
  100% {
    transform: scale(4);
    opacity: 0;
  }
}
</style>
