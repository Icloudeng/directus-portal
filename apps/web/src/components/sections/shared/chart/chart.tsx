import { ChartDataSetData, ST_Chart } from '@apps/contracts';
import { useMemo } from 'react';
import { AxisOptions, Chart, UserSerie } from 'react-charts';
import { stackOffsetWiggle } from 'd3-shape';

type ElType = AxisOptions<ChartDataSetData>['elementType'];
type IElRype = ST_Chart['item']['type'];

const _arr = (d: IElRype[]) => d;

export default function ChartContent({ item }: { item: ST_Chart }) {
  const itype = item.item.type;

  const type = useMemo<ElType>(() => {
    if (itype.startsWith('bar') || itype === 'band') {
      return 'bar';
    }
    if (itype === 'steam') {
      return 'area';
    }

    if (itype === 'spark_chart') {
      return 'line';
    }

    return itype as ElType;
  }, [itype]);

  const primaryAxis = useMemo<AxisOptions<ChartDataSetData>>(() => {
    const hasLeft = _arr([
      'band',
      'bar_horizontal',
      'bar_horizontal_stacked',
    ]).includes(itype);

    return {
      position: hasLeft ? 'left' : 'bottom',
      id: item.id,
      show: itype === 'spark_chart' ? false : undefined,
      getValue: (datum) => datum.label,
    };
  }, [itype]);

  const secondaryAxes = useMemo<AxisOptions<ChartDataSetData>[]>(() => {
    const hasBottom = _arr([
      'bar_horizontal',
      'bar_horizontal_stacked',
    ]).includes(itype);
    const hasTop = _arr(['band']).includes(itype);
    const hasStackOffset = _arr(['steam', 'band']).includes(itype);
    const hasStacked = _arr([
      'bar_stacked',
      'bar_horizontal_stacked',
      'band',
    ]).includes(itype);

    return [
      {
        position: hasBottom ? 'bottom' : hasTop ? 'top' : 'left',

        show: itype == 'band' || itype === 'spark_chart' ? false : true,

        showDatumElements: itype === 'spark_chart' ? false : undefined,

        getValue: (datum: ChartDataSetData) => +datum.value,

        stacked: hasStacked || undefined,

        elementType: type,

        stackOffset: hasStackOffset ? stackOffsetWiggle : undefined,
      },
    ];
  }, [itype, type]);

  const data = useMemo<UserSerie<ChartDataSetData>[]>(() => {
    return item.item.datasets.map((set) => {
      return {
        label: set.dataset_name,
        data: set.data || [],
        color: set.border_color,
      };
    });
  }, [item]);

  return (
    <Chart
      options={{
        data,
        primaryAxis,
        secondaryAxes,
      }}
    />
  );
}
