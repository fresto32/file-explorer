import {
  ChangeDetectionStrategy,
  Component,
  Input,
  OnInit,
} from '@angular/core';
import { NodeType } from 'src/app/classes/node-type';
import { NodeService } from 'src/app/services/node.service';
import { INode } from '../../models/node';

@Component({
  selector: 'app-folder',
  templateUrl: './folder.component.html',
  styleUrls: ['./folder.component.scss', '../common_styles/node_types.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class FolderComponent extends NodeType {
  @Input() override node: INode | null = null;

  constructor(_nodeService: NodeService) {
    super(_nodeService);
  }
}
