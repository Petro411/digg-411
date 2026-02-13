import Digg411 from "./digg411";


const BRAND: any = "digg"; // can be from env

let BrandConfig: any;

switch (BRAND) {
    case "digg":
        BrandConfig = Digg411;
        break;
}

export const colors = BrandConfig?.colors;
export const images = BrandConfig.images;
export const label = BrandConfig.labels;
