import { Routes } from "@angular/router";
import { AppComponent } from "./app.component";
import { FormsWithMaterialComponent } from "./forms-with-material/forms-with-material.component";
import { FormsWithoutMaterialComponent } from "./forms-without-material/forms-without-material.component";

export const APP_ROUTES: Routes = [
    {
        path: '',
        children : [
            {
                path: 'with-material',
                component: FormsWithMaterialComponent
           },
           {
               path: 'without-material',
               component: FormsWithoutMaterialComponent
           }
        ]
    },

];



