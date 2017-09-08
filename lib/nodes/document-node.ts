import XMLNode from '../xml-node';
import BufferBuilder from '../buffer-builder';

export default class DocumentNode extends XMLNode {

  constructor(node:any) {
    super('document', node);
  }

  public open(bufferBuilder:BufferBuilder):BufferBuilder {
    return  bufferBuilder;
  }

  public close(bufferBuilder:BufferBuilder):BufferBuilder {
    return bufferBuilder;
  }
}
