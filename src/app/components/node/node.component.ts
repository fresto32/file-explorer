import {
  ChangeDetectionStrategy,
  Component,
  Input,
  OnInit
} from '@angular/core';
import { INode } from '../../models/node';

@Component({
  selector: 'app-node',
  templateUrl: './node.component.html',
  styleUrls: ['./node.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class NodeComponent implements OnInit {
  @Input() node: INode | null = null;
  @Input() indentation!: number;

  constructor() {}

  ngOnInit() {
    console.log({ node: this.node });
  }
}
