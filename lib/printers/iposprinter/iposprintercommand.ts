import { Command, BARCODE_WIDTH } from '../../command';

export default class iposprintercommand extends Command {
  ESC_d(n: number): number[]  { return  [this.ESC, this.NL, n]; } // ESCdn
  BARCODE_WIDTH = BARCODE_WIDTH.DOT_750;
}
