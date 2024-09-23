import { createVuetify } from "vuetify"
import * as components from "vuetify/components"
import * as directives from "vuetify/directives"
import { VDatePicker } from "vuetify/components"
import { VOtpInput } from "vuetify/components"

import "vuetify/dist/vuetify.min.css"
import "@mdi/font/css/materialdesignicons.css"

export const vuetify = createVuetify({
    components:{
        ...components,
        VDatePicker,
        VOtpInput
    },
    directives,
    theme:{
        defaultTheme: "light"
    },
    icons:{
        iconfont:MIDIAccess,
        color:"#fdba74"
    }
})