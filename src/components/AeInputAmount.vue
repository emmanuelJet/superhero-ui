<template>
  <div class="input-group">
    <input
      :value="value"
      v-bind="$attrs"
      type="number"
      inputmode="decimal"
      :min="min"
      :step="step"
      :placeholder="$t('amount')"
      class="form-control input-amount"
      aria-label="Default"
      aria-describedby="inputGroup-sizing-mn"
      :disabled="disabled"
      @input="$emit('input', $event.target.value)"
    >
    <div
      v-if="tokenTipable"
      class="input-group-append"
    >
      <Dropdown
        :options="selectTokenOptions"
        :selected="selectedToken"
        :method="selectToken"
      />
    </div>
    <div
      v-if="selectedToken === 'native'"
      class="input-group-append"
    >
      <span
        class="input-group-text append__ae text-ellipsis"
        :title="value"
      >
        <!-- eslint-disable vue-i18n/no-raw-text -->
        <span
          v-if="!tokenTipable"
          class="ae"
        >
          AE
        </span>&nbsp;
        <!-- eslint-enable vue-i18n/no-raw-text -->
        <FiatValue
          display-symbol
          :amount="value.toString()"
        />
      </span>
    </div>
  </div>
</template>

<script>
import { mapState } from 'vuex';
import FiatValue from './FiatValue.vue';
import Dropdown from './Dropdown.vue';

export default {
  components: {
    Dropdown, FiatValue,
  },
  props: {
    min: { type: Number, default: 0 },
    step: { type: Number, default: 0.01 },
    value: { type: [Number, String], required: true },
    selectTokenF: { type: Function, required: true },
    disabled: { type: Boolean },
    notTokenTipable: { type: Boolean },
  },
  data: () => ({
    selectedToken: 'native',
  }),
  computed: {
    ...mapState({
      selectTokenOptions: ({ tokenBalances, tokenInfo }) => [
        { text: 'AE', value: 'native' },
        ...tokenBalances.map(({ token }) => ({ text: tokenInfo[token].symbol, value: token })),
      ],
    }),
    tokenTipable() {
      return !this.notTokenTipable && !!process.env.VUE_APP_CONTRACT_V2_ADDRESS;
    },
  },
  methods: {
    selectToken(selected) {
      this.selectedToken = selected;
      this.selectTokenF(this.selectedToken);
    },
  },
};
</script>

<style lang="scss" scoped>
.input-group {
  border: 0.05rem solid $buttons_background;
  border-radius: 0.25rem;

  .input-group-append {
    max-width: 65%;
  }

  .input-group-text {
    display: block;

    span {
      vertical-align: sub;
    }
  }

  &:focus-within {
    border: 0.05rem solid $secondary_color;
  }

  input,
  input ~ .input-group-append > span.append__ae {
    border: 0;

    &:focus {
      border: 0;
    }
  }

  .input-group-append > span.append__ae {
    font-size: 0.75rem;
    background: $buttons_background;
    cursor: default;

    .ae {
      color: $secondary_color;
    }
  }
}
</style>
