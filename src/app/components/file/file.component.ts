import {
  ChangeDetectionStrategy,
  Component,
  Input,
  OnInit
} from '@angular/core';
import { NodeService } from 'src/app/services/node.service';
import { INode, UNSET_NODE } from '../../models/node';

@Component({
  selector: 'app-file',
  templateUrl: './file.component.html',
  styleUrls: ['./file.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class FileComponent implements OnInit {
  @Input() file: INode | null = null;

  constructor(private _nodeService: NodeService) {}

  ngOnInit(): void {}

  addUnsetNode(): void {
    if (!this.file) {
      console.error('Cannot add unset node to undefined file');
      return;
    }

    this._nodeService.addUnsetNodeTo(this.file);
  }
}
