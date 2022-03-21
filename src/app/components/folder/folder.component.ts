import {
  ChangeDetectionStrategy,
  Component,
  Input,
  OnInit
} from '@angular/core';
import { NodeService } from 'src/app/services/node.service';
import { INode } from '../../models/node';

@Component({
  selector: 'app-folder',
  templateUrl: './folder.component.html',
  styleUrls: ['./folder.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class FolderComponent implements OnInit {
  @Input() folder!: INode;

  constructor(private _nodeService: NodeService) {}

  ngOnInit(): void {}

  addUnsetNode(): void {
    if (!this.folder) {
      console.error('Cannot add unset node to undefined file');
      return;
    }

    this._nodeService.addUnsetNodeTo(this.folder);
  }
}
