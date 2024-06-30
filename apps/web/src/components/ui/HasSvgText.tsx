import parse from 'html-react-parser';
import isSvg from 'is-svg';
import React, { DetailedHTMLProps, Fragment, HTMLAttributes } from 'react';

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

export const ParseSvgText = React.memo<
  JSX.IntrinsicElements['svg'] & { text?: string; fallback?: React.ReactNode }
>((props) => {
  const { text, ...restProps } = props;

  if (!text || !isSvg(text)) {
    return props.fallback || <></>;
  }

  return (
    <>
      {parse(text, {
        trim: true,
        transform(reactNode: any) {
          if (reactNode.type === 'svg') {
            return React.cloneElement(reactNode, {
              ...reactNode.props,
              ...restProps,
            });
          }

          return <Fragment key={Math.random()}>{reactNode}</Fragment>;
        },
      })}
    </>
  );
});

ParseSvgText.displayName = 'ParseSvgText';
