import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { FileComponent } from './file/file.component';
import { FolderComponent } from './folder/folder.component';

@NgModule({
  declarations: [AppComponent, FileComponent, FolderComponent],
  imports: [BrowserModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
