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
/**
 * Initializes the FooCard Class
 */
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

  /**
   *
   * @param { CardProps } options - Custom Configuration options for FooCard Instance
   */
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

  /**
   * Function to load image onto canvas
   * @returns { void }
   */

  public async loadImage() {
    const { imageSrc } = FooCard.defaultValues;
    let img: HTMLImageElement = new Image();
    img.src = imageSrc;
    await img.decode();
    this._initCanvasDefaultStyle(img);
  }
  /**
   * Downloads unsigned image into default download location
   *
   * @param { String } imageName - Name of the image to be downloaded. Defaults to 'footemplate`
   * @param { String } imageExtension - File format of the image to be downloaded, accepted formats are [jpg, jpeg, png]. Defaults to png
   */
  public downloadImage(
    imageName: string = "footemplate",
    imageExtension: string = "png"
  ) {
    if (imageExtension in ["png", "jpg", "jpeg"]) {
      const { canvas } = this;
      let link = document.createElement("a");
      link.href = canvas.toDataURL();
      link.download = `${imageName || "footemplate"}.${imageExtension}`;
      link.click();
      link.remove();
    } else {
      throw new Error(
        "Error: The image extension has to be in png or jpg format"
      );
    }
  }
  /**
   * Downloads image as a signed and unique copy
   *
   * @param { String } imageName - Name of the image to be downloaded. Defaults to 'footemplate`
   * @param { String } imageExtension - File format of the image to be downloaded, accepted formats are [jpg, jpeg, png]. Defaults to png
   * @param { Object } metadata - Custom metadata to append to image, can be read using any ezqif library
   */

  public downloadImageAsSigned(
    imageName: string = "signed_footemplate",
    imageExtension: string = "png",
    metadata: {}
  ) {
    if (imageExtension in ["png", "jpg", "jpeg"]) {
      // image embedding goes here
      // add ezqif metadata
      // add custom ezqif metadata
    } else {
      throw new Error(
        "Error: The image extension has to be in png or jpg format"
      );
    }
  }

  /**
   *
   * @param { HTMLImageElement } img - Image source
   */

  private _initCanvasDefaultStyle(img: HTMLImageElement): void {
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
   * Inserts text element into the canvas
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

  /**
   * Clears the state the current working canvas
   * 
   * @param { Boolean } keepSize - Keeps the current shape of the canvas
   * @returns { Void }
   */
  public clearCanvas(keepSize = true): void {
    const { canvas, context } = this;
    context.clearRect(0, 0, keepSize?canvas.width:0, keepSize?canvas.height:0);
  }
}
