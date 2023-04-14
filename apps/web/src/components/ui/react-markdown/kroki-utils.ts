import type { Element } from 'hast';

const regexp =
  /((?<k1>(?!=)\S+)=((?<v1>(["'`])(.*?)\5)|(?<v2>\S+)))|(?<k2>\S+)/g;

export function parse(string: string | null | undefined) {
  const io = (string ?? '').matchAll(regexp);

  return new Map(
    [...(io as any)]
      .map((item) => item?.groups)
      .map(({ k1, k2, v1, v2 }) => [k1 ?? k2, v1 ?? v2])
  );
}

const alias = [
  'bytefield',
  'c4plantuml',
  'd2',
  'ditaa',
  'erd',
  'graphviz',
  'dot',
  'nomnoml',
  'pikchr',
  'plantuml',
  'structurizr',
  'svgbob',
  'umlet',
  'vega',
  'vegalite',
  'wavedrom',
];

export function hasKroki(node: Element) {
  const type = node.tagName;
  const properties = node.properties || {};
  const classes = (properties['className'] || []) as string[];
  const className = classes.join(' ');

  const match = /language-(\w+)/.exec(className || '');
  const lang = match ? match[1] : undefined;
  const meta =
    node.data && 'meta' in node.data
      ? parse(node.data['meta'] as string)
      : undefined;

  const isKroki =
    type === 'code' &&
    lang &&
    (alias.includes(lang) || (lang === 'kroki' && meta && meta.has('type')));

  return {
    isKroki: Boolean(isKroki),
    diagramType: lang === 'kroki' ? (meta?.get('type') as string) : lang,
  };
}
