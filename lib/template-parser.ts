import * as handlebars from 'handlebars';
import * as moment from 'moment';
import * as numeral from 'numeral';
import 'numeral/locales/pt-br';
import { cloneDeep } from 'lodash';
import { XMLParser } from './xml-parser';
import { BufferBuilder } from './buffer-builder';

export class TemplateParser {

  private moment: any;
  private numeral: any;
  private handlebars: any;

  constructor() {
    this.moment = moment;
    this.moment.locale('pt-br');

    this.numeral = numeral;
    this.numeral.locale('pt-br');

    this.handlebars = handlebars;
    this.registerMoment();
    this.registerNumeral();
  }

  private registerMoment() {
    this.handlebars.registerHelper('moment', (context, block) => {
      if (context && context.hash) {
        block = cloneDeep(context);
        context = undefined;
      }
      var date = this.moment(context);

      if (block.hash.timezone) {
        date.tz(block.hash.timezone);
      }

      var hasFormat = false;

      for (var i in block.hash) {
        if (i === 'format') {
          hasFormat = true;
        }
        else if (date[i]) {
          date = date[i](block.hash[i]);
        }
      }

      if (hasFormat) {
        date = date.format(block.hash.format);
      }

      return date;
    });
  }

  private registerNumeral() {
    this.handlebars.registerHelper('numeral', (context, block) => {
      if (context && context.hash) {
        block = cloneDeep(context);
        context = undefined;
      }

      return this.numeral(context).format(block.hash.format);
    });
  }

  public parser(template, scope): BufferBuilder {
    let fn = this.handlebars.compile(template);
    let xml = fn(scope);
    return new XMLParser().parser(xml);
  }

}
