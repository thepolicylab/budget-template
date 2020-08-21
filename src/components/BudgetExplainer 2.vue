<template>
   <div class="grid-container">
    <div class="grid-row paginator padding-x-5 text-middle text-center text-bold">

      <a
        tabindex="0"
        v-for="page in pages"
        :key="page"
        @click="setPage(page)"
        @keyup.enter="setPage(page)"
        class="grid-col page-link margin-1"
        v-bind:class="{ 'border-05': page===activePage}"
        >
        <p>
          {{ page }}
        </p>
      </a>
    </div>

    <Explainer :imageSrc="getImgUrl(activePage)" :areas="activeAreas" />

  </div>
</template>

<script>
import { Explainer } from '@brown-ccv/vue-png-explainer';

import * as areaData from '@/assets/info.json';

import * as _ from 'lodash';

export default {
  name: 'BudgetExplainer',
  components: {
    Explainer,
  },
  data () {
    return {
      areas: areaData.data,
      activePage: 1,
    }
  },
  methods: {
    setPage(clickedPage) {
      this.activePage = clickedPage;
    },
    getImgUrl(page) {
      let pageStr
      if (page < 10) {
        pageStr = `0${page}`
      } else {
        pageStr = `${page}`
      }
      return require('../assets/Decision_Package_Template_20200717_Page_'+pageStr+'.png')
    }
  },
  computed: {
    pages: function () {
      return _.uniqBy(this.areas, 'page').map((value) => value.page)
    },
    activeAreas: function () {
      return this.areas.filter((value) => this.activePage === value.page)
    }
  }
}
</script>

<style scoped>
a {
  cursor: pointer;
}
</style>
