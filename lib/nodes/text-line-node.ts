import XmlNode from '../xml-node';
import TextNode from './text-node';
import BufferBuilder from '../buffer-builder';

export default class TextLineNode extends XmlNode {

  private textNode:TextNode;

  constructor(node:any) {
    super('text-line', node);
    this.textNode = new TextNode(node);
  }

  public open(bufferBuilder:BufferBuilder):BufferBuilder {
    return this.textNode.open(bufferBuilder);
  }

  public close(bufferBuilder:BufferBuilder):BufferBuilder {
    return this.textNode.close(bufferBuilder).breakLine();
  }
}
