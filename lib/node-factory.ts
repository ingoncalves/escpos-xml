import DocumentNode from './nodes/document-node';
import TextNode from './nodes/text-node';
import TextLineNode from './nodes/text-line-node';

export default class NodeFactory {

  public static create(nodeType:String, node) {
    switch (nodeType) {
      case 'document': return new DocumentNode(node);
      case 'text': return new TextNode(node);
      case 'text-line': return new TextLineNode(node);
      default: return null;
    }
  }

}
