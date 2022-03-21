/**
 * Describes the node in a file tree by its type, name,
 * and whether it has any children.
 */
interface INode {
  type: 'folder' | 'file' | 'unset' | null;
  name?: string;
  children?: INode[];
  id: string;
}
