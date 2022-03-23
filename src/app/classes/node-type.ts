import { INode } from '../models/node';
import { NodeService } from '../services/node.service';

export class NodeType {
  node: INode | null = null;

  private _nodeService: NodeService;

  constructor(_nodeService: NodeService) {
    this._nodeService = _nodeService;
  }

  addUnsetNode(): void {
    if (!this.node) {
      console.error('Cannot add unset node to undefined file');
      return;
    }

    this._nodeService.addUnsetNodeTo(this.node);
  }

  deleteNode(): void {
    if (!this.node?.parent) {
      console.error('Cannot delete root node.');
      return;
    }

    const children = this.node.parent.children;
    this.node.parent.children = children?.filter((node) => node !== this.node);
  }
}
