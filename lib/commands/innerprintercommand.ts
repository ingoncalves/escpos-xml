import { Command, BARCODE_WIDTH, ALIGNMENT } from './command';

export default class innerprintercommand extends Command {
  BARCODE_WIDTH = BARCODE_WIDTH.DOT_250;
  ALIGNMENT = ALIGNMENT.CENTER;
}
