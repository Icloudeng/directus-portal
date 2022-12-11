import { ChartDataSetData, ST_Chart } from '@apps/contracts';
import { stackOffsetWiggle } from 'd3-shape';
import { useMemo } from 'react';
import { AxisOptions, Chart, UserSerie } from 'react-charts';

type ElType = AxisOptions<ChartDataSetData>['elementType'];
type IElRype = ST_Chart['item']['type'];
type ChartDataSetDataWIthLabel = ChartDataSetData & { label: string };

const _arr = (d: IElRype[]) => d;

export default function ChartContent({ item }: { item: ST_Chart }) {
  const itype = item.item.type;
  const dark = item.item.dark || false;

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

  const primaryAxis = useMemo((): AxisOptions<ChartDataSetDataWIthLabel> => {
    const hasLeft = _arr([
      'band',
      'bar_horizontal',
      'bar_horizontal_stacked',
    ]).includes(itype);
    return {
      getValue: (datum) => datum.label,
      ...(['line', 'area', 'steam', 'spark_chart'].includes(itype)
        ? { innerBandPadding: 0, outerBandPadding: -0.5 }
        : {}),
      ...(itype === 'spark_chart' ? { show: false } : {}),
      ...(hasLeft ? { position: 'left' } : {}),
    };
  }, [itype]);

  const secondaryAxes =
    useMemo((): AxisOptions<ChartDataSetDataWIthLabel>[] => {
      const hasTop = _arr(['band']).includes(itype);
      const hasBottom = _arr([
        'bar_horizontal',
        'bar_horizontal_stacked',
      ]).includes(itype);
      const hasStackOffset = _arr(['steam', 'band']).includes(itype);
      const hasStacked = _arr([
        'bar_stacked',
        'bar_horizontal_stacked',
        'band',
      ]).includes(itype);

      return [
        {
          getValue: (datum) => datum.value,
          elementType: type,
          min: 0,
          hardMin: 0,
          ...(itype == 'band' || itype === 'spark_chart'
            ? { show: false }
            : {}),
          ...(hasStacked ? { stacked: true } : {}),
          ...(hasStackOffset ? { stackOffset: stackOffsetWiggle } : {}),
          ...(hasBottom ? { position: 'bottom' } : {}),
          ...(hasTop ? { position: 'top' } : {}),
          ...(itype === 'spark_chart' ? { showDatumElements: false } : {}),
        },
      ];
    }, [type, itype]);

  const data = useMemo<UserSerie<ChartDataSetDataWIthLabel>[]>(() => {
    const labels = item.item.labels || [];
    return item.item.datasets.map((set) => {
      const _data = set.data || [];
      const setdata = labels.map((label, i) => {
        const value = _data[i]?.value || 0;
        return {
          label,
          value,
        };
      });
      return {
        label: set.dataset_name,
        data: setdata,
        color: set.border_color,
      };
    });
  }, [item]);

  return (
    <div className='relative h-full w-full'>
      <Chart
        style={
          dark
            ? {
                background: 'rgba(0, 27, 45, 0.9)',
                borderRadius: '5px',
              }
            : undefined
        }
        options={{
          data,
          primaryAxis,
          secondaryAxes,
          tooltip: { align: 'auto' },
          interactionMode: 'closest',
          dark,
        }}
      />
    </div>
  );
}
