export class Command {
  public ESC: number        = 0x1B;
  public FF: number         = 0x0C;
  public FS: number         = 0x1C;
  public GS: number         = 0x1D;
  public DC1: number        = 0x11;
  public DC4: number        = 0x14;
  public DLE: number        = 0x10;
  public NL: number         = 0x0A;
  public SP: number         = 0x20;
  public US: number         = 0x1F;
  public ESC_init: number[] = [this.ESC, 0x40]; //ESC@
  public FS_and: number[]   = [this.FS, 0x40]; //ESC@
  public LF: number[]       = [this.NL];
  public DLE_EOT(n: number): number[]  { return  [this.DLE, 0x04, n]; } // DLEEOTn
  public ESC_exclamation(n: number): number[]  { return  [this.ESC, 0x21, n]; } // ESC!n
  public ESC_minus(n: number): number[]  { return  [this.ESC, 0x2D, n]; } // ESC-n
  public ESC_rev(n: number): number[]  { return  [this.ESC, 0x7B, n]; } // ESC{n
  public ESC_a(n: number): number[]  { return  [this.ESC, 0x61, n]; } // ESCan
  public ESC_d(n: number): number[]  { return  [this.ESC, 0x64, n]; } // ESCdn
  public ESC_E(n: number): number[]  { return  [this.ESC, 0x45, n]; } // ESCEn
  public ESC_G(n: number): number[]  { return  [this.ESC, 0x47, n]; } // ESCGn
  public ESC_J(n: number): number[]  { return  [this.ESC, 0x4A, n]; } // ESCJn
  public ESC_M(n: number): number[]  { return  [this.ESC, 0x4D, n]; } // ESCMn
  public ESC_t(n: number): number[]  { return  [this.ESC, 0x07, n]; } // ESCtn
  public ESC_Z(m: number, n: number, k: number): number[]  { return  [this.ESC, 0x5A, m, n, k]; } // ESCZmnk
  public GS_exclamation(n: number): number[]  { return  [this.GS, 0x21, n]; } // ESC!n
  public GS_B(n: number): number[]  { return  [this.GS, 0x42, n]; } // GSBn
  public GS_f(n: number): number[]  { return  [this.GS, 0x66, n]; } // GSfn
  public GS_h(n: number): number[]  { return  [this.GS, 0x68, n]; } // GShn
  public GS_H(n: number): number[]  { return  [this.GS, 0x48, n]; } // GSHn
  public GS_K(m: number, n: number): number[]  { return  [this.GS, 0x6B, m, n]; } // GSKmn
  public GS_v0(m: number): number[]  { return  [this.GS, 0x76, 0x30, m]; } // GSv0m
  public GS_w(n: number): number[]  { return  [this.GS, 0x77, n]; } // GSwn
  public GS_x(n: number): number[]  { return  [this.GS, 0x78, n]; } // GSxn
  public GS_v(n: number): number[]  { return  [this.GS, 0x56, n]; } // GSv
  public UNDERLINE_MODE: UNDERLINE_MODE = UNDERLINE_MODE.TWO_POINTS_OF_COARSE;
  public ALIGNMENT: ALIGNMENT = ALIGNMENT.LEFT;
  public BARCODE_SYSTEM: BARCODE_SYSTEM;
  public BARCODE_WIDTH: BARCODE_WIDTH = BARCODE_WIDTH.DOT_560;
  public BARCODE_LABEL_FONT: BARCODE_LABEL_FONT = BARCODE_LABEL_FONT.FONT_A;
  public BARCODE_LABEL_POSITION: BARCODE_LABEL_POSITION = BARCODE_LABEL_POSITION.BOTTOM;
  public QR_EC_LEVEL: QR_EC_LEVEL = QR_EC_LEVEL.H;
  public BITMAP_SCALE: BITMAP_SCALE = BITMAP_SCALE.NORMAL;
  public STATUS_TYPE: STATUS_TYPE;
}

export enum UNDERLINE_MODE {
  ONE_POINT_OF_COARSE = 49,
  TWO_POINTS_OF_COARSE = 50
}

export enum ALIGNMENT {
  LEFT = 48,
  CENTER = 49,
  RIGHT = 50
}

export enum BARCODE_SYSTEM {
  UPC_A = 65,
  UPC_E = 66,
  EAN_13 = 67,
  EAN_8 = 68,
  CODE_39 = 69,
  ITF = 70,
  CODABAR = 71,
  CODE_93 = 72,
  CODE_128 = 73
}

export enum BARCODE_WIDTH {
  DOT_250 = 2,
  DOT_375 = 3,
  DOT_560 = 4,
  DOT_625 = 5,
  DOT_750 = 6
}

export enum BARCODE_LABEL_FONT {
  FONT_A = 48,
  FONT_B = 49
}

export enum BARCODE_LABEL_POSITION {
  NOT_PRINT = 48,
  ABOVE = 49,
  BOTTOM = 50,
  ABOVE_BOTTOM = 51
}

export enum QR_EC_LEVEL {
  L = 0,
  M = 1,
  Q = 2,
  H = 3
}

export enum BITMAP_SCALE {
  NORMAL = 48,
  DOUBLE_WIDTH = 49,
  DOUBLE_HEIGHT = 50,
  FOUR_TIMES = 51
}

export enum STATUS_TYPE {
  PRINTER_STATUS = 1,
  OFFLINE_STATUS = 2,
  ERROR_STATUS = 3,
  PAPER_ROLL_SENSOR_STATUS = 4
}
