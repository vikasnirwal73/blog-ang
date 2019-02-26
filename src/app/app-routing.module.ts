import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ListingComponent } from './posts/listing/listing.component';
import { PostDetailComponent } from './posts/post-detail/post-detail.component';


const routes: Routes = [
  { path: '', component: ListingComponent },
  { path:':id', component: PostDetailComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
exports: [RouterModule]
})
export class AppRoutingModule { }
