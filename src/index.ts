import utilityDOM from "./utility/utilityDOM.js";

interface CardProps {
  container?: string;
  outline: string;
  outlineOffset: number;
  strokeStyle?: string;
  lineWidth?: number;
  fontFamily?: string;
  fontSize?: number;
  fontWeight?: string | number;
  fillStyle?: string;
  textAlign?: CanvasTextAlign;
  textBaseline?: CanvasTextBaseline;
  imageSrc: string;
}

export class FooCard {
  public static readonly defaultValues = {
    container: "#foocard",
    outline: "thick ridge #444",
    outlineOffset: 6,
    strokeStyle: "black",
    lineWidth: 1,
    fontFamily: "Arial",
    fontSize: 15,
    fontWeight: "bold",
    fillStyle: "black",
    textAlign: "left" as CanvasTextAlign,
    textBaseline: "left" as CanvasTextBaseline,
    imageSrc: null,
  };

  public constructor(options: CardProps) {
    this.__init__(options);
  }

  private canvas: HTMLCanvasElement = document.createElement("canvas");
  private context = this.canvas.getContext("2d") as CanvasRenderingContext2D;

  private __init__(options: CardProps): void {
    this._initOptions(options);
    this._initCanvas();
  }

  private _initOptions(options: CardProps): void {
    for (const key in options) {
      if (options.hasOwnProperty(key)) {
        const value = Reflect.get(options, key);
        Reflect.set(FooCard.defaultValues, key, value);
      }
    }
  }

  private _initCanvas(): void {
    this._initCanvasElementandPen();
    // this._initCanvasDefaultStyle(img);
  }
  private _initCanvasElementandPen() {
    const { container } = FooCard.defaultValues;
    // const container = DOMCanvas;
    if (container) {
      let oContainer = utilityDOM.getEle(container);

      if (
        oContainer &&
        oContainer.nodeType === 1 &&
        oContainer.localName === "canvas"
      ) {
        this.canvas = oContainer as HTMLCanvasElement;
        this.context = this.canvas.getContext("2d") as CanvasRenderingContext2D;

        let canvas = this.canvas;
        canvas.width = canvas.height = 0;

      } else {
        throw new Error("Enter valid container...");
      }
    } else {
      throw new TypeError("Enter valid container...");
    }
  }

  public async loadImage() {
    const { imageSrc } = FooCard.defaultValues;
    let img: HTMLImageElement = new Image();
    img.src = imageSrc;
    await img.decode();
    this._initCanvasDefaultStyle(img);
  }
  public downloadImage() {
    const {canvas} = this
    let link = document.createElement('a');
    link.href = canvas.toDataURL();
    link.download = "masterpiece.png";
    link.click()
    link.remove()
  }

  /**
   *
   * @param { any } img - Image source
   */

  private _initCanvasDefaultStyle(img: any): void {
    const { canvas, context } = this;
    const { outlineOffset, outline } = FooCard.defaultValues;
    utilityDOM.setCss(canvas, {
      display: "block",
      outline: outline,
      "outline-offset": `${outlineOffset}px`,
    });
    utilityDOM.setAttr(canvas, {
      width: img.width,
      height: img.height,
    });

    context.clearRect(0, 0, canvas.width, canvas.height);
    context.drawImage(img, 0, 0);
  }

  /**
   *
   * @param { CanvasTextBaseLine } baseline - canvasBaseline to postion text baseline
   * @param { String } text - Text to be drawn on the canvas
   * @param { Number } xAxis - Vertical co-ordinate for text
   * @param { Number } yAxis - Horizontal co-ordinate for text
   */

  public insertText(
    baseline: CanvasTextBaseline,
    text: string,
    xAxis: number = 90,
    yAxis: number = 90
  ) {
    const { canvas, context } = this;
    const {
      strokeStyle,
      lineWidth,
      fontFamily,
      fontSize,
      fontWeight,
      fillStyle,
      textAlign,
    } = FooCard.defaultValues;

    context.font = `${fontWeight} ${fontSize}px ${fontFamily}`;
    context.fillStyle = fillStyle;
    context.strokeStyle = strokeStyle;
    context.lineWidth = lineWidth;
    context.textAlign = textAlign;

    const maxWidth = canvas.width;

    context.textBaseline = baseline;
    context.fillText(text, xAxis, yAxis, maxWidth); // (text,x,y,max-width)
  }

  public clearCanvas(): void {
    const { canvas, context } = this;
    context.clearRect(0, 0, canvas.width, canvas.height);
  }
}
