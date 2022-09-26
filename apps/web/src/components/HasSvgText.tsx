import isSvg from 'is-svg';
import { DetailedHTMLProps, HTMLAttributes } from 'react';

type SpanProps = DetailedHTMLProps<
  HTMLAttributes<HTMLSpanElement>,
  HTMLSpanElement
>;

export function HasSvgText(props: SpanProps & { svgText: string | undefined }) {
  const newProps = { ...props };
  const { svgText } = newProps;
  delete newProps.svgText;
  return (
    <>
      {svgText && isSvg(svgText) && (
        <span {...newProps} dangerouslySetInnerHTML={{ __html: svgText }} />
      )}
    </>
  );
}
