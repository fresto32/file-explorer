import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { INode, UNSET_NODE } from '../models/node';

const ROOT_NODE: INode = {
  type: 'folder',
  id: 'root',
  name: 'root',
  children: [],
};

@Injectable({
  providedIn: 'root',
})
export class NodeService {
  /** Size of the file tree */
  private _size = 0;

  private _node = new BehaviorSubject<INode>(ROOT_NODE);

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

  private nextId(): string {
    return (this._size++).toString();
  }

  public addUnsetNodeTo(node: INode): void {
    const newNode = { ...UNSET_NODE };
    newNode.parent = node;
    newNode.id = this.nextId();
    node.children ? node.children.push(newNode) : (node.children = [newNode]);
  }
}
