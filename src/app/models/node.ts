/**
 * Describes the node in a file tree by its type, name,
 * and whether it has any children.
 */
export interface INode {
  type: 'folder' | 'file' | 'unset' | null;
  unsetType?: 'file' | 'folder' | 'unset';
  name?: string;
  parent?: INode;
  children?: INode[];
  id: string;
}

export const UNSET_NODE: INode = {
  type: 'unset',
  id: 'unset',
};
