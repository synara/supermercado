import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component'
import { HomeComponent } from './home/home.component';
import { FormsModule } from "@angular/forms";
import { HttpModule } from "@angular/http";
import { CategoriasComponent } from './categorias/categorias.component';
import { NavMenuComponent } from './navmenu/navmenu.component';
import { CategoriaService } from './categorias/categorias.service';
import { ProdutoComponent } from './produtos/produtos.component';


@NgModule({
  bootstrap: [AppComponent],

    declarations: [
        AppComponent,
        HomeComponent,
        CategoriasComponent,
        NavMenuComponent,
        ProdutoComponent
    ],
    imports: [
        BrowserModule,
        FormsModule,
        HttpModule,
        RouterModule.forRoot([
            { path: 'categorias', component: CategoriasComponent},
            { path: 'produtos', component: ProdutoComponent },
            { path: '**', component: CategoriasComponent}

        ])
    
    ],
       providers: [
        { provide: 'ORIGIN_URL', useValue: "http://localhost:51726/api/" },
    ]
})
export class AppModule { }
