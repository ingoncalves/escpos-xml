import XMLNode from '../xml-node';
import BufferBuilder from '../buffer-builder';

export default class TextNode extends XMLNode {

  constructor(node:any, scope:any) {
    super('text', node, scope);
  }

  public open(attributes:any, scope:any, bufferBuilder:BufferBuilder):BufferBuilder {
    bufferBuilder.printText(attributes.value);
    return  bufferBuilder;
  }

  public close(bufferBuilder:BufferBuilder):BufferBuilder {
    return bufferBuilder;
  }
}
