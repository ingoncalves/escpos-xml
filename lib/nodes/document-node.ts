import XMLNode from '../xml-node';
import BufferBuilder from '../buffer-builder';

export default class DocumentNode extends XMLNode {

  constructor(node:any, scope:any) {
    super('document', node, scope);
  }

  public open(node:any, scope:any, bufferBuilder:BufferBuilder):BufferBuilder {
    return  bufferBuilder;
  }

  public close(bufferBuilder:BufferBuilder):BufferBuilder {
    return bufferBuilder;
  }
}
