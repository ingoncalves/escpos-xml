import { Command, BARCODE_WIDTH, ALIGNMENT, BARCODE_LABEL_POSITION } from '../../command';

export default class innerprintercommand extends Command {
  BARCODE_WIDTH = BARCODE_WIDTH.DOT_250;
  public GS_L(n: number, m: number): number[]  { return  [this.GS, 0x4C, n, m]; } // GS_L n = LEFT, m = HEIGHT
  public GS_W(n: number = 76, m: number = 2): number[]  { return  [this.GS, 0x57, n, m]; } // GS_W n = LEFT, m = HEIGHT
}
