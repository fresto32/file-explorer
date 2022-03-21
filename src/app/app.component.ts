import { Component, OnInit } from '@angular/core';
import { NodeService } from './services/node.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'file-explorer';
  fileTree = this.nodeService.node;
  constructor(public nodeService: NodeService) {}

  ngOnInit() {
    this.fileTree = this.nodeService.node;
  }
}
