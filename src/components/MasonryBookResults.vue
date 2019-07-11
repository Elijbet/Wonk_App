<template>
  <div class="masonry-wrapper">
    <div class="masonry">
      <div class="card-wrapper" v-for="book in books">
        <MasonryItem :book="book"></MasonryItem>
      </div>
    </div>
  </div>
</template>

<script>
import axios from 'axios';
import MasonryItem from './MasonryItem.vue'

  export default {
    created(){
      this.$store.dispatch('bestSelectionBooks')
    }, 
    computed: {
      books() {
        return this.$store.getters.books;
      }
    },
    components: {
      MasonryItem
    }
  }
</script>
<style lang="scss" scoped>

.wrapper { 
  max-width: $page-width;
  margin-right: auto;
  margin-left: auto;
  padding: 1.5em;
}
.masonry-wrapper {
  padding: 1.5em;
  max-width: $page-width;
}
.masonry {
  columns: 1;
  column-gap: 15px;
}

// MEDIA QUERIES

@include large-screen {  
  .masonry {
    columns: 3;
  }
}
@include extra-large-screen {
  .masonry {
    columns: 5;
  }
}

</style>

