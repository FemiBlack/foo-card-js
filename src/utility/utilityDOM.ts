export interface IStaticPairs {
  [key: string]: any;
}
export interface IUtilityDOMProps {
  getEle(sign: string): HTMLElement | null;
  setAttr(
    ele: HTMLElement,
    options: IStaticPairs
  ): OmitThisParameter<IUtilityDOMProps>;
  setCss(
    ele: HTMLElement,
    options: IStaticPairs
  ): OmitThisParameter<IUtilityDOMProps>;
}

const utilityDOM: IUtilityDOMProps = {
  getEle(sign) {
    return document.querySelector(sign);
  },

  setAttr(ele, options) {
    for (const key in options) {
      ele.setAttribute(key, options[key]);
    }
    return this;
  },

  setCss(ele, options) {
    for (const key in options) {
      if (options.hasOwnProperty(key)) {
        const element = options[key];
        ele.style.cssText += `${key}: ${element};`;
      }
    }
    return this;
  },
};

export default utilityDOM;