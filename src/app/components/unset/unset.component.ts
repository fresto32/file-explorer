import {
  ChangeDetectionStrategy,
  Component,
  Input,
  OnInit
} from '@angular/core';
import { INode } from 'src/app/models/node';

@Component({
  selector: 'app-unset',
  templateUrl: './unset.component.html',
  styleUrls: ['./unset.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class UnsetComponent implements OnInit {
  @Input() node!: INode;

  constructor() {}

  ngOnInit(): void {}

  submit(name: string): void {
    if (!this.node.unsetType) {
      console.error('Need to set node type before submission');
      return;
    }
    this.node.name = name;
    this.node.type = this.node.unsetType;
  }

  setType(type: 'folder' | 'file'): void {
    this.node.unsetType = type;
  }
}
