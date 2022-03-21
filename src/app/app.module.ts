import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { FileComponent } from './components/file/file.component';
import { FolderComponent } from './components/folder/folder.component';
import { NodeComponent } from './components/node/node.component';
import { UnsetComponent } from './components/unset/unset.component';

@NgModule({
  declarations: [
    AppComponent,
    NodeComponent,
    FileComponent,
    FolderComponent,
    UnsetComponent
  ],
  imports: [BrowserModule, FormsModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
