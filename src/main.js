import { createApp } from "vue"
import App from "./App.vue"
import router from "./routers"

import { library } from '@fortawesome/fontawesome-svg-core'

/* import av font-awesome-ikon-komponent */
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

/* import av specifika ikoner från font-awesome*/
import { faUser } from '@fortawesome/free-solid-svg-icons'
import { faTrashCan } from '@fortawesome/free-solid-svg-icons'
import { faPen } from '@fortawesome/free-solid-svg-icons'
import { faAngleDown } from "@fortawesome/free-solid-svg-icons"
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons"
/* lägger till ikoner till biblioteket */
library.add(faUser, faTrashCan, faPen, faAngleDown, faMagnifyingGlass)

/* createApp-metoden skapar en ny Vue-instans (Vue v3) av rot-komponenten App, 
 * metoder som kommer efter createApp är tillägg som kan läggas*/
createApp(App).use(router).component('font-awesome-icon', FontAwesomeIcon).mount("#app");
