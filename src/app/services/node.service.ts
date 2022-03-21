import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { INode, UNSET_NODE } from '../models/node';

const TEST_NODE: INode = {
  type: 'folder',
  id: 'root',
  name: 'root',
  children: [
    {
      type: 'folder',
      id: 'root2',
      name: 'root2',
      children: [
        {
          type: 'file',
          id: 'child2',
          name: 'child2'
        }
      ]
    },
    {
      type: 'folder',
      id: 'root3',
      name: 'root3',
      children: [
        {
          type: 'file',
          id: 'child3',
          name: 'child3'
        },
        {
          type: 'folder',
          id: 'folder4',
          name: 'folder4'
        }
      ]
    }
  ]
};

@Injectable({
  providedIn: 'root'
})
export class NodeService {
  /** Size of the file tree */
  private _size = 0;

  private _node = new BehaviorSubject<INode>(TEST_NODE);

  /**
   * The `INode`s that are currently in the file tree.
   */
  public readonly node = this._node.asObservable();

  constructor() {}

  /**
   * Sets the current file tree to have root of `node`.
   */
  public setFileTreeTo(node: INode): void {
    this._node.next(node);
  }

  public nextId(): string {
    return (this._size++).toString();
  }

  public addUnsetNodeTo(node: INode): void {
    node.children
      ? node.children.push({ ...UNSET_NODE })
      : (node.children = [{ ...UNSET_NODE }]);
  }
}
