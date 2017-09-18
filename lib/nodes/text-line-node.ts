import { XMLNode } from '../xml-node';
import { BufferBuilder } from '../buffer-builder';
import TextNode from './text-node';

export default class TextLineNode extends XMLNode {

  private textNode: TextNode;

  constructor(node: any) {
    super(node);
    this.textNode = new TextNode(node);
  }

  public open(bufferBuilder: BufferBuilder): BufferBuilder {
    return this.textNode.open(bufferBuilder);
  }

  public close(bufferBuilder: BufferBuilder): BufferBuilder {
    return this.textNode.close(bufferBuilder).breakLine();
  }
}
