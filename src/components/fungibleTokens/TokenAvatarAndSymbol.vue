<template>
  <div class="token">
    <Avatar
      v-if="tokenData"
      class="token-avatar"
      :address="address"
      show-ident-icon-only
    />
    <div
      v-else
      class="default"
    />
    <!--eslint-disable-next-line vue-i18n/no-raw-text-->
    <span class="symbol">{{ tokenData ? tokenData.symbol : 'AE' }}</span>
  </div>
</template>

<script>
import { mapState } from 'vuex';
import Avatar from '../Avatar.vue';

export default {
  components: { Avatar },
  props: {
    address: { type: String, required: true },
  },
  computed: {
    ...mapState({
      tokenData({ tokenInfo }) {
        return tokenInfo[this.address] || null;
      },
    }),
  },
};
</script>

<style lang="scss" scoped>
.token {
  display: flex;
  align-items: center;

  .symbol {
    font-size: 0.75rem;
    color: $secondary_color;
    margin-left: 0.4rem;
  }

  .default {
    display: inline-block;
    width: 1.5rem;
    height: 1.5rem;
    background: url('../../assets/aeternitySymbol.svg') no-repeat center $article_content_color;
    border-radius: 50%;
  }
}
</style>
