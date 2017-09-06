import TextNode from './nodes/text-node';
import DocumentNode from './nodes/document-node';

export default class NodeFactory {

  public static create(nodeType:String, node, scope) {
    switch (nodeType) {
      case 'document': return new DocumentNode(node, scope);
      case 'text': return new TextNode(node, scope);
      default: return null;
    }
  }

}
