import './bootstrap';
import '../css/app.css';

import { createApp, h } from 'vue';
import { createInertiaApp } from '@inertiajs/vue3';
import { resolvePageComponent } from 'laravel-vite-plugin/inertia-helpers';
import { ZiggyVue } from '../../vendor/tightenco/ziggy/dist/vue.m';
import Vue3EasyDataTable from 'vue3-easy-data-table';
import 'vue3-easy-data-table/dist/style.css';




const appName = import.meta.env.VITE_APP_NAME || 'Laravel'; // Récupère le nom de l'application depuis la variable d'environnement VITE_APP_NAME (s'il est défini), sinon utilise 'Laravel' comme nom par défaut.

const app = createApp({ // Crée une instance de l'application Vue en utilisant createApp
 render: () => h(App, props), // La fonction render renvoie un élément racine de l'application.
});


app.component('EasyDataTable', Vue3EasyDataTable); // Enregistre le composant global 'EasyDataTable' pour une utilisation dans toute l'application.


createInertiaApp({ // Crée une application Inertia.
    title: (title) => `${title} - ${appName}`,   // La fonction title est utilisée pour définir le titre de la page. Elle prend le titre de la page en cours et l'ajoute à 'appName'.

    resolve: (name) => resolvePageComponent(`./Pages/${name}.vue`, import.meta.glob('./Pages/**/*.vue')),  // La fonction resolve est utilisée pour résoudre les composants de page Inertia. Elle utilise une fonction personnalisée pour résoudre les composants à partir des fichiers Vue dans le dossier './Pages'.




    setup({ el, App, props, plugin }) {  // La fonction setup est appelée pour initialiser l'application Inertia.
        return createApp({ render: () => h(App, props) }) // Crée une nouvelle instance d'application Vue qui contient le composant Inertia 'App'.
            .use(plugin)  // Utilise le plugin Inertia pour gérer les mises à jour de la page.
            .use(ZiggyVue)  // Utilise ZiggyVue pour gérer les routes définies dans Ziggy.
            .mount(el);  // Montre l'application Vue dans l'élément cible 'el'.
        },


    progress: { // Configuration pour la barre de progression.
        color: '#4B5563',  // Couleur de la barre de progression.
    },
});





