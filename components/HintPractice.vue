<template>
  <div class="row align-center">
    <div class="col-md-auto col-auto circlenumber mx-2">1</div>
    <div id="detailX_11495" class="col-md col text-left detailX">
      <table cellpadding="1" cellspacing="1" style="width: 500px">
        <tbody>
          <tr>
            <td v-for="item in data.hint">
              <img v-if="data.hint_type === 'image'" alt="" :src="item" />
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
