// import './quasar.variables.sass'

import '@quasar/extras/material-icons/material-icons.css'
import '@quasar/extras/material-icons-outlined/material-icons-outlined.css'
import '@quasar/extras/ionicons-v4/ionicons-v4.css'
import { Notify } from 'quasar'
// To be used on app.use(Quasar, { ... })
export default {
    config: {
        brand: {
           // primary: '#636668' //'#DE3618',
                // ... or all other brand colors
        },
        notify: { /* look at QuasarConfOptions from the API card */ }
    },
    plugins: {
        Notify
    },
}