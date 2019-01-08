import * as parser from 'xml-parser';
import { BufferBuilder } from './buffer-builder';
import { XMLNode } from './xml-node';
import { NodeFactory } from './node-factory';
import { Command } from './command';

export class XMLParser {

  constructor(protected buffer: BufferBuilder) {

  }

  public parser(xml: string): BufferBuilder {
    let parsedXML = parser(xml);
    return this.compile(parsedXML);
  }

  private compile(parsedXML: any): BufferBuilder {
    let rootNode = this.adapter(parsedXML.root, null);
    return rootNode.draw(this.buffer);
  }

  private adapter(node: any, parentNode): XMLNode {
    let xmlNode: XMLNode = NodeFactory.create(node.name, node);
    if (parentNode) parentNode.addChild(xmlNode);
    if (node.children.length > 0) {
      node.children.forEach(child => {
        this.adapter(child, xmlNode);
      });
    }
    return xmlNode;
  }

}
