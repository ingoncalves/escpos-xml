# ESC/POS XML

JavaScript library that implements the thermal printer ESC / POS protocol and provides an XML interface for preparing templates for printing.

**Features:**
- [x] Text
- [x] Text line
- [x] Feed line
- [x] Bold text
- [x] Underline text
- [x] Font size
- [x] Small mode
- [x] White mode
- [x] Align
- [x] Barcode
- [x] QRcode
- [ ]  Image
- [x] XML with Handlebars
- [x] Handlebars [Moment](http://momentjs.com) Helper
- [x] Handlebars [Numeral](http://numeraljs.com) Helper

## Installation

Using npm:

```
npm install --save escpos-xml
```

## Usage

In JavaSript:

### From plain XML
```js

import { EscPos } from '@datahex/escpos-xml';

const xml = `
  <?xml version="1.0" encoding="UTF-8"?>
  <document>
    <text-line>hello world</text-line>
  </document>
`;

const buffer = EscPos.getBufferXML(xml);
// send this buffer to a stream (eg.: bluetooth)

```

### From XML + Handlebars
```js

import { EscPos } from '@datahex/escpos-xml';

const xml = `
  <?xml version="1.0" encoding="UTF-8"?>
  <document>
    <text-line>{{foo}}</text-line>
  </document>
`;

const data = {
  foo: 'hello word'
};

const buffer = EscPos.getBufferFromTemplate(xml, data);
// send this buffer to a stream (eg.: bluetooth)

```

### From Builder
```js

import { EscPos } from '@datahex/escpos-xml';


const buffer = EscPos.getBufferBuilder()
                             .printTextLine('hello world')
                             .build();
// send this buffer to a stream (eg.: bluetooth)

```

## API

Comming soon...
For a while, this example may help you:

```js
import { EscPos } from '@datahex/escpos-xml';

const xml = `
  <?xml version="1.0" encoding="UTF-8"?>
  <document>
      <line-feed />
      <align mode="center">
          <bold>
              <text-line size="1:1">{{title}}</text-line>
          </bold>
          <line-feed />
          <small>
              <text-line>{{subtitle}}</text-line>
          </small>
      </align>
      <small>
          <text-line>Date: {{moment date format="DD/MM/YYYY HH:mm:ss"}}</text-line>
          <text-line size="1:0">{{numeral price format="$ 0,0.00"}}</text-line>
      </small>
      <line-feed />
      <underline>
        <text-line>{{underline}}</text-line>
      </underline>
      <line-feed />
      <align mode="center">
          <white-mode>
              <text-line size="1:1">{{description}}</text-line>
          </white-mode>
          <line-feed />
          <bold>
              {{#if condictionA}}
              <text-line size="1:0">True A</text-line>
              {{else if condictionB}}
              <text-line size="1:0">True B</text-line>
              {{else}}
              <text-line size="1:0">False</text-line>
              {{/if}}
          </bold>
      </align>
      <line-feed />
      <align mode="center">
          <barcode system="CODE_128" width="DOT_250">{{barcode}}</barcode>
      </align>
      <line-feed />
      <align mode="center">
          <qrcode ecl="M">{{qrcode}}</qrcode>
      </align>
  </document>
`;

const data = {
  title: 'Tile',
  subtitle: 'Subtitle',
  description: 'This is a description',
  date: new Date(),
  price: 1.99,
  condictionA: false,
  condictionB: true,
  barcode: '12345678',
  qrcode: 'hello qrcode',
  underline: 'underline'
}

const buffer = EscPos.getBufferFromTemplate(xml, data);
// send this buffer to a stream (eg.: bluetooth)

```

