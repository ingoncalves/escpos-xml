import { BufferBuilder } from './buffer-builder';

export abstract class XMLNode {

  protected attributes: any;
  protected content: string;
  protected children: XMLNode[];

  constructor(node: any) {
    this.attributes = node.attributes || {};
    this.content = node.content;
    this.children = [];
  }

  public addChild(child: XMLNode) {
    if (child)
      this.children.push(child);
  }

  protected getContent(): string {
    return this.content;
  }

  public abstract open(bufferBuilder: BufferBuilder): BufferBuilder;

  public abstract close(bufferBuilder: BufferBuilder): BufferBuilder;

  public draw(bufferBuilder: BufferBuilder): BufferBuilder {

    // open tag
    this.open(bufferBuilder);

    if (this.children.length > 0) {
      this.children.forEach(child => child.draw(bufferBuilder));
    }

    // close tag
    this.close(bufferBuilder);

    return bufferBuilder;
  }

}
