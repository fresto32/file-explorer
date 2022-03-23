import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { INode } from '../../models/node';

@Component({
  selector: 'app-node',
  templateUrl: './node.component.html',
  styleUrls: ['./node.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class NodeComponent {
  @Input() node: INode | null = null;
  @Input() indentation!: number;

  constructor() {}
}
