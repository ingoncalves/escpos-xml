import XMLParser from './xml-parser';

class EscPosXml {

  private xmlParser:XMLParser;

  constructor() {
    this.xmlParser = new XMLParser();
  }

  getBuffer(xml:string, data:any):number[] {
    return this.xmlParser.parser(xml, data).build();
  }

}

let printer = new EscPosXml();
let data = { name: 'Guilherme', date: new Date().toISOString() };
let xml =  `
  <document>
    <text value="hello "/>
    <text value="world"/>
  </document>
`;

let buffer = printer.getBuffer(xml, data);
console.log(buffer);



