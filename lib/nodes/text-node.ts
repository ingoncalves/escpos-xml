import XMLNode from '../xml-node';
import BufferBuilder from '../buffer-builder';

export default class TextNode extends XMLNode {

  constructor(node:any) {
    super('text', node);
  }

  public open(bufferBuilder:BufferBuilder):BufferBuilder {
    let text = this.getContent();
    bufferBuilder.printText(text);
    return  bufferBuilder;
  }

  public close(bufferBuilder:BufferBuilder):BufferBuilder {
    return bufferBuilder;
  }

}
