import BufferBuilder from './buffer-builder';
import NodeFactory from './node-factory';

export default abstract class XMLNode {

  private name:String;
  private attributes:any;
  private content:String;
  private children:XMLNode[];

  constructor(name:string, node:any, private scope:any) {
    this.attributes = node.attributes;
    this.content = node.content;
    this.children = [];
  }

  public addChild(child:XMLNode) {
    this.children.push(child);
  }

  public abstract open(attributes:any, scope:any, bufferBuilder:BufferBuilder):BufferBuilder;

  public abstract close(bufferBuilder:BufferBuilder):BufferBuilder;

  public draw(bufferBuilder:BufferBuilder):BufferBuilder {

    // open tag
    this.open(this.attributes, this.scope, bufferBuilder);

    if(this.children.length > 0) {
      this.children.forEach(child => child.draw(bufferBuilder));
    }

    // close tag
    this.close(bufferBuilder);

    return bufferBuilder;
  }
}
