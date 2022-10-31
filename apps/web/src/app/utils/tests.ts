import { VALID_HEX_COLOR } from './regex';

export function testHexColor(color: string | undefined | null) {
  return color && VALID_HEX_COLOR.test(color) ? color : undefined;
}
