<template>
  <div class="row align-center">
    <div class="col-md-auto col-auto circlenumber mx-2">1</div>
    <div id="detailX_11495" class="col-md col text-left detailX">
      <table cellpadding="1" cellspacing="1" style="width: 500px">
        <tbody>
          <tr>
            <td v-for="item in data.hint">
              <audio controls v-if="data.hint_type === 'image'">
                <source
                  src="https://drive.google.com/uc?export=view&id=1HMZLjwjpeZajw3WWYF0rZx8ZEu9TaY7L"
                  type="audio/mpeg"
                />
                Your browser does not support the audio tag.
              </audio>
              <!-- <video
                width="320"
                height="240"
                controls
                v-if="data.hint_type === 'image'"
              >
                <source
                  src="https://drive.google.com/uc?export=view&id=1Xt_qZt8DZnfOlI7Lp1oc-6rnSNIVt7dG"
                  type="video/mp4"
                />
                Your browser does not support the video tag.
              </video> -->
              <!-- <img
                v-if="data.hint_type === 'image'"
                alt=""
                :src="item"
                width="100"
                height="100"
              /> -->
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
