import isSvg from 'is-svg';
import React, { DetailedHTMLProps, HTMLAttributes } from 'react';

type SpanProps = DetailedHTMLProps<
  HTMLAttributes<HTMLSpanElement>,
  HTMLSpanElement
>;

export function HasSvgText({
  svgText,
  fallback,
  ...props
}: SpanProps & { svgText: string | undefined; fallback?: React.ReactNode }) {
  const valid = svgText && isSvg(svgText);
  return (
    <>
      {valid && (
        <span {...props} dangerouslySetInnerHTML={{ __html: svgText }} />
      )}
      {!valid && fallback && <span {...props}>{fallback}</span>}
    </>
  );
}
