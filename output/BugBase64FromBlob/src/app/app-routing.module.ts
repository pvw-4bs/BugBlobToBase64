import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BugBlobToBase64 } from './magic/BugBlobToBase64/BugBlobToBase64.component';

const routes: Routes = [{
  path: 'BugBase64FromBlob', component: BugBlobToBase64
}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
