import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { FormsModule} from "@angular/forms"

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FamilyComponent } from './nuclearfamily/family/family.component';
import { FatherComponent } from './nuclearfamily/father/father.component';
import { MotherComponent } from './nuclearfamily/mother/mother.component';
import { SonComponent } from './nuclearfamily/son/son.component';
import { DaughterComponent } from './nuclearfamily/daughter/daughter.component';
import { ReviewComponent } from './assignment/allcomponents/review/review.component';
import { TitleComponent } from './assignment/allcomponents/title/title.component';
import { DescriptionComponent } from './assignment/allcomponents/description/description.component';
import { ThumbnailComponent } from './assignment/allcomponents/thumbnail/thumbnail.component';
import { DirectiveComponent } from './super-html/directive/directive.component';
import { PipesComponent } from './pipedemo/pipes/pipes.component';
import { BadrouteComponent } from './notfound/badroute/badroute.component';
import { ConsumeparentComponent } from './consume/consumeparent/consumeparent.component';
import { Consumechild1Component } from './consume/consumechild1/consumechild1.component';
import { Consumechild2Component } from './consume/consumechild2/consumechild2.component';
import { ChildComponent } from './consume/child/child.component';
import { TemplateformComponent } from './forms/templateform/templateform.component';
import { ReactiveformComponent } from './forms/reactiveform/reactiveform.component';

@NgModule({
  declarations: [
    AppComponent, 
    FamilyComponent,
    FatherComponent,
    MotherComponent,
    SonComponent,
    DaughterComponent,
    ReviewComponent,
    TitleComponent,
    DescriptionComponent,
    ThumbnailComponent,
    DirectiveComponent,
    PipesComponent,
    BadrouteComponent,
    ConsumeparentComponent,
    Consumechild1Component,
    Consumechild2Component,
    ChildComponent,
    TemplateformComponent,
    ReactiveformComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    RouterModule.forRoot([
      {
        path:'',
        redirectTo:'pipe',
        pathMatch:'full'
      },
      {
        path:'family',
        component:FamilyComponent,
        children:[
              {
                path:'',
                redirectTo:'father',
                pathMatch:'full'
              },
              {
                path:'father',
                component:FatherComponent
              },
              {
                path:'mother',
                component:MotherComponent
              },
              {
                path:'daughter',
                component:DaughterComponent
              },
              {
                path:'son',
                component:SonComponent
              }              
        ]
      },
      {
        path:'review',
        component:ReviewComponent
      },
      {
        path:'directive',
        component:DirectiveComponent
      },
      {
        path:'pipe',
        component:PipesComponent
      },
      {
        path:'consumeservice',
        component:ConsumeparentComponent,
        children:[
          {
            path:'child1',
            component:Consumechild1Component
          },
          {
            path:'child2',
            component:Consumechild2Component
          }
        ]
      },
      {
        path:'template',
        component:TemplateformComponent
      },
      {
        path:'reactive',
        component:ReactiveformComponent
      },
      {
        path:'**',
        component:BadrouteComponent
      }
    ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
