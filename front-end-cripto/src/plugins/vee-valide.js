import Vue from "vue"

import { ValidationProvider, ValidationObserver } from "vee-validate"

Vue.defineComponent("ValidationProvider", ValidationProvider)
Vue.defineComponent("ValidationObserver", ValidationObserver)