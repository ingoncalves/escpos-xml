import * as parser from 'xml-parser';
import BufferBuilder from './buffer-builder';
import DocumentNode from './nodes/document-node';
import XMLNode from './xml-node';
import NodeFactory from './node-factory';

export default class XMLParser {


  public parser(xml:string, data:any):BufferBuilder {
    let parsedXML = parser(xml);
    return this.compile(parsedXML, data);
  }

  private compile(parsedXML:any, data:any):BufferBuilder {
    let bufferBuilder = new BufferBuilder();
    let scope = { model:data };
    let rootNode = this.adapter(parsedXML.root, scope, null);
    return rootNode.draw(bufferBuilder);
  }

  private adapter(node:any, scope, parentNode):XMLNode {
    let xmlNode:XMLNode = NodeFactory.create(node.name, node, scope);
    if(parentNode) parentNode.addChild(xmlNode);
    if(node.children.length > 0) {
      node.children.forEach(child => {
        this.adapter(child, scope, xmlNode);
      });
    }
    return xmlNode;
  }

}
