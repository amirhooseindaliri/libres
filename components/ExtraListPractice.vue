<template>
  <nav
    id="extraListId"
    class="extraList"
    :style="extralist === false ? { display: 'none' } : {}"
  >
    <div style="margin: 7px">
      <div>
        <div class="ExamName"><div>Practice</div></div>
        <div class="pb-5" id="questionExtraList">
          <div
            v-for="(item, index) in listExtra"
            :key="index"
            class="questionWhiteBoxList mb-2"
          >
            <div
              @click="selectedItemExtra = item.id"
              class="questioncluster"
              style="text-align: left"
              data-id="0.1"
            >
              <span> 0.{{ item.id }}</span>
              <i class="material-icons" style="float: right">arrow_drop_down</i>
            </div>
            <div
              id="cat_0.1"
              :style="
                selectedItemExtra === item.id
                  ? { borderTop: '0.0625rem solid #dcdcdc' }
                  : { display: 'none' }
              "
            >
              <div
                v-for="(child, index) in item.chlidren"
                :key="index"
                style="min-height: 44px"
                class="sidestyle ActiveQuestion"
                id="Qid_5580"
              >
                <div
                  class="row my-0"
                  :style="{
                    minHeight: '44px',
                    justifyContent: 'center',
                    alignItems: 'center',
                  }"
                >
                  <div class="col-md-12 col-12 my-4">
                    <div
                      class="col-md-auto col-auto row"
                      style="padding: 5px 0; direction: ltr"
                    >
                      <a
                        ><div class="row">
                          <div
                            class="col-md-auto col-auto"
                            style="padding: 5px"
                          >
                            <i
                              class="material-icons"
                              :style="{
                                fontSize: '22px',
                                verticalAlign: 'text-bottom',
                              }"
                              >check_circle</i
                            >
                          </div>
                          <div class="col-md col" style="padding: 5px">
                            {{ child.name }}
                          </div>
                        </div></a
                      >
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </nav>
</template>
<script>
export default {
  layout: "practiceLayout",
  data() {
    return {
      selectedItemExtra: 0,
    };
  },
  props: ["listExtra", "extralist"],
  methods: {},
};
</script>
