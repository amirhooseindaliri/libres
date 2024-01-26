<template>
  <div class="row align-center">
    <div class="col-md-auto col-auto circlenumber mx-2">1</div>
    <div id="detailX_11495" class="col-md col text-left detailX">
      <table cellpadding="1" cellspacing="1" style="width: 500px">
        <tbody>
          <tr>
            <td v-for="item in data.hint">
              <audio controls v-if="data.hint_type === 'image'">
                <source :src="item" type="audio/mpeg" />
                Your browser does not support the audio tag.
              </audio>
              <video
                width="320"
                height="240"
                controls
                v-else-if="data.hint_type === 'video'"
              >
                <source :src="item" type="video/mp4" />
                Your browser does not support the video tag.
              </video>
              <img
                v-else-if="data.hint_type === 'image'"
                alt=""
                :src="item"
                width="100"
                height="100"
              />
              <p v-else>{{ item }}</p>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>
<script>
export default {
  props: ["data"],
};
</script>
