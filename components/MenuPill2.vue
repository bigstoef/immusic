<template>
  <div :class="['pill-menu', imagePosition]">
    <img :src="imageSrc" alt="Pill Image" class="pill-image" v-if="imageSrc" />
    <div class="pill-label">
      <div class="pill-text-wrapper">
      <span class="pill-text">{{ label }}</span>
      <div class="pill-line"></div>
    </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    label: {
      type: String,
      required: true
    },
    imageSrc: {
      type: String,
      required: true
    },
    imagePosition: {
      type: String,
      default: 'left',
      validator: (value) => ['left', 'right'].includes(value)
    }
  }
};
</script>

<style scoped>

.pill-menu {
  margin-bottom: 10px;
  display: flex;
  align-items: center;
  max-width: 280px;
}

.pill-menu.left {
  flex-direction: row;
  margin-right: 20px;
}
.pill-menu.right {
  flex-direction: row-reverse;
  margin-left: 20px;
}

.pill-menu.left .pill-label{
  margin-left: -80px;

}
.pill-menu.right .pill-label{
  margin-right: -80px;
}

.pill-menu.left .pill-text{
  padding-left: 90px;
}
.pill-menu.right .pill-text{
  padding-right: 90px;
}

.pill-text-wrapper {
    display: flex;
    flex-direction: column;
    width: 100%;
}
.pill-menu.left .pill-text-wrapper{
  align-items: start;
}
.pill-menu.right .pill-text-wrapper{
  align-items: end;
}

.pill-line {
  display: flex;
  width: 50%;
  height: 2px;
  margin-top: 10px;
  background-color: #F4EFE4;
}
.pill-menu.left .pill-line{
  margin-right: 50%;
}

.pill-menu.right .pill-line{
  margin-left: 50%;
}

.pill-label {
  display: flex;
  flex-direction: column;
  justify-content: center;
  background-color: #332924;
  border-radius: 60px;
  width: 400px;
  height: 80px;
}

.pill-image {
  width: 110px;
  height: 110px;
  border-radius: 50%;
  object-fit: cover;
  margin: 0px;
  z-index: 1;

}

.pill-text {
  flex: 1;
  color: white;
  text-transform: uppercase;
  font-size: 1.8em;
  font-family: 'hightide', sans-serif; /* Fallback to sans-serif if the font fails to load */
}

</style>
