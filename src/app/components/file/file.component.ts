import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { NodeType } from 'src/app/classes/node-type';
import { NodeService } from 'src/app/services/node.service';
import { INode } from '../../models/node';

@Component({
  selector: 'app-file',
  templateUrl: './file.component.html',
  styleUrls: ['../common_styles/node_types.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class FileComponent extends NodeType {
  @Input() override node: INode | null = null;

  constructor(_nodeService: NodeService) {
    super(_nodeService);
  }
}
