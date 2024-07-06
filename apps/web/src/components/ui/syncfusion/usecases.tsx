import * as React from 'react';
import {
  TreeGridComponent,
  ColumnsDirective,
  ColumnDirective,
} from '@syncfusion/ej2-react-treegrid';

import './base';

export let sampleData = [
  {
    taskID: 1,
    taskName: 'Planning',
    startDate: new Date('02/03/2017'),
    endDate: new Date('02/07/2017'),
    progress: 100,
    duration: 5,
    priority: 'Normal',
    approved: false,
    subtasks: [
      {
        taskID: 2,
        taskName: 'Plan timeline',
        startDate: new Date('02/03/2017'),
        endDate: new Date('02/07/2017'),
        duration: 5,
        progress: 100,
        priority: 'Normal',
        approved: false,
      },
      {
        taskID: 3,
        taskName: 'Plan budget',
        startDate: new Date('02/03/2017'),
        endDate: new Date('02/07/2017'),
        duration: 5,
        progress: 100,
        priority: 'Low',
        approved: true,
      },
      {
        taskID: 4,
        taskName: 'Allocate resources',
        startDate: new Date('02/03/2017'),
        endDate: new Date('02/07/2017'),
        duration: 5,
        progress: 100,
        priority: 'Critical',
        approved: false,
      },
      {
        taskID: 5,
        taskName: 'Planning complete',
        startDate: new Date('02/07/2017'),
        endDate: new Date('02/07/2017'),
        duration: 0,
        progress: 0,
        priority: 'Low',
        approved: true,
      },
    ],
  },
  {
    taskID: 6,
    taskName: 'Design',
    startDate: new Date('02/10/2017'),
    endDate: new Date('02/14/2017'),
    duration: 3,
    progress: 86,
    priority: 'High',
    approved: false,
    subtasks: [
      {
        taskID: 7,
        taskName: 'Software Specification',
        startDate: new Date('02/10/2017'),
        endDate: new Date('02/12/2017'),
        duration: 3,
        progress: 60,
        priority: 'Normal',
        approved: false,
      },
      {
        taskID: 8,
        taskName: 'Develop prototype',
        startDate: new Date('02/10/2017'),
        endDate: new Date('02/12/2017'),
        duration: 3,
        progress: 100,
        priority: 'Critical',
        approved: false,
      },
      {
        taskID: 9,
        taskName: 'Get approval from customer',
        startDate: new Date('02/13/2017'),
        endDate: new Date('02/14/2017'),
        duration: 2,
        progress: 100,
        priority: 'Low',
        approved: true,
      },
      {
        taskID: 10,
        taskName: 'Design Documentation',
        startDate: new Date('02/13/2017'),
        endDate: new Date('02/14/2017'),
        duration: 2,
        progress: 100,
        priority: 'High',
        approved: true,
      },
      {
        taskID: 11,
        taskName: 'Design complete',
        startDate: new Date('02/14/2017'),
        endDate: new Date('02/14/2017'),
        duration: 0,
        progress: 0,
        priority: 'Normal',
        approved: true,
      },
    ],
  },
  {
    taskID: 12,
    taskName: 'Implementation Phase',
    startDate: new Date('02/17/2017'),
    endDate: new Date('02/27/2017'),
    priority: 'Normal',
    approved: false,
    duration: 11,
    progress: 66,
    subtasks: [
      {
        taskID: 13,
        taskName: 'Phase 1',
        startDate: new Date('02/17/2017'),
        endDate: new Date('02/27/2017'),
        priority: 'High',
        approved: false,
        progress: 50,
        duration: 11,
        subtasks: [
          {
            taskID: 14,
            taskName: 'Implementation Module 1',
            startDate: new Date('02/17/2017'),
            endDate: new Date('02/27/2017'),
            priority: 'Normal',
            duration: 11,
            progress: 10,
            approved: false,
            subtasks: [
              {
                taskID: 15,
                taskName: 'Development Task 1',
                startDate: new Date('02/17/2017'),
                endDate: new Date('02/19/2017'),
                duration: 3,
                progress: '50',
                priority: 'High',
                approved: false,
              },
              {
                taskID: 16,
                taskName: 'Development Task 2',
                startDate: new Date('02/17/2017'),
                endDate: new Date('02/19/2017'),
                duration: 3,
                progress: '50',
                priority: 'Low',
                approved: true,
              },
              {
                taskID: 17,
                taskName: 'Testing',
                startDate: new Date('02/20/2017'),
                endDate: new Date('02/21/2017'),
                duration: 2,
                progress: '0',
                priority: 'Normal',
                approved: true,
              },
              {
                taskID: 18,
                taskName: 'Bug fix',
                startDate: new Date('02/24/2017'),
                endDate: new Date('02/25/2017'),
                duration: 2,
                progress: '0',
                priority: 'Critical',
                approved: false,
              },
              {
                taskID: 19,
                taskName: 'Customer review meeting',
                startDate: new Date('02/26/2017'),
                endDate: new Date('02/27/2017'),
                duration: 2,
                progress: '0',
                priority: 'High',
                approved: false,
              },
              {
                taskID: 20,
                taskName: 'Phase 1 complete',
                startDate: new Date('02/27/2017'),
                endDate: new Date('02/27/2017'),
                duration: 0,
                progress: '50',
                priority: 'Low',
                approved: true,
              },
            ],
          },
        ],
      },
      {
        taskID: 21,
        taskName: 'Phase 2',
        startDate: new Date('02/17/2017'),
        endDate: new Date('02/28/2017'),
        priority: 'High',
        approved: false,
        duration: 12,
        progress: 60,
        subtasks: [
          {
            taskID: 22,
            taskName: 'Implementation Module 2',
            startDate: new Date('02/17/2017'),
            endDate: new Date('02/28/2017'),
            priority: 'Critical',
            approved: false,
            duration: 12,
            progress: 90,
            subtasks: [
              {
                taskID: 23,
                taskName: 'Development Task 1',
                startDate: new Date('02/17/2017'),
                endDate: new Date('02/20/2017'),
                duration: 4,
                progress: '50',
                priority: 'Normal',
                approved: true,
              },
              {
                taskID: 24,
                taskName: 'Development Task 2',
                startDate: new Date('02/17/2017'),
                endDate: new Date('02/20/2017'),
                duration: 4,
                progress: '50',
                priority: 'Critical',
                approved: true,
              },
              {
                taskID: 25,
                taskName: 'Testing',
                startDate: new Date('02/21/2017'),
                endDate: new Date('02/24/2017'),
                duration: 2,
                progress: '0',
                priority: 'High',
                approved: false,
              },
              {
                taskID: 26,
                taskName: 'Bug fix',
                startDate: new Date('02/25/2017'),
                endDate: new Date('02/26/2017'),
                duration: 2,
                progress: '0',
                priority: 'Low',
                approved: false,
              },
              {
                taskID: 27,
                taskName: 'Customer review meeting',
                startDate: new Date('02/27/2017'),
                endDate: new Date('02/28/2017'),
                duration: 2,
                progress: '0',
                priority: 'Critical',
                approved: true,
              },
              {
                taskID: 28,
                taskName: 'Phase 2 complete',
                startDate: new Date('02/28/2017'),
                endDate: new Date('02/28/2017'),
                duration: 0,
                progress: '50',
                priority: 'Normal',
                approved: false,
              },
            ],
          },
        ],
      },
      {
        taskID: 29,
        taskName: 'Phase 3',
        startDate: new Date('02/17/2017'),
        endDate: new Date('02/27/2017'),
        priority: 'Normal',
        approved: false,
        duration: 11,
        progress: 30,
        subtasks: [
          {
            taskID: 30,
            taskName: 'Implementation Module 3',
            startDate: new Date('02/17/2017'),
            endDate: new Date('02/27/2017'),
            priority: 'High',
            approved: false,
            duration: 11,
            progress: 60,
            subtasks: [
              {
                taskID: 31,
                taskName: 'Development Task 1',
                startDate: new Date('02/17/2017'),
                endDate: new Date('02/19/2017'),
                duration: 3,
                progress: '50',
                priority: 'Low',
                approved: true,
              },
              {
                taskID: 32,
                taskName: 'Development Task 2',
                startDate: new Date('02/17/2017'),
                endDate: new Date('02/19/2017'),
                duration: 3,
                progress: '50',
                priority: 'Normal',
                approved: false,
              },
              {
                taskID: 33,
                taskName: 'Testing',
                startDate: new Date('02/20/2017'),
                endDate: new Date('02/21/2017'),
                duration: 2,
                progress: '0',
                priority: 'Critical',
                approved: true,
              },
              {
                taskID: 34,
                taskName: 'Bug fix',
                startDate: new Date('02/24/2017'),
                endDate: new Date('02/25/2017'),
                duration: 2,
                progress: '0',
                priority: 'High',
                approved: false,
              },
              {
                taskID: 35,
                taskName: 'Customer review meeting',
                startDate: new Date('02/26/2017'),
                endDate: new Date('02/27/2017'),
                duration: 2,
                progress: '0',
                priority: 'Normal',
                approved: true,
              },
              {
                taskID: 36,
                taskName: 'Phase 3 complete',
                startDate: new Date('02/27/2017'),
                endDate: new Date('02/27/2017'),
                duration: 0,
                progress: '50',
                priority: 'Critical',
                approved: false,
              },
            ],
          },
        ],
      },
    ],
  },
];

const Default = () => {
  return (
    <div className='control-pane w-full'>
      <div className='control-section w-full'>
        <TreeGridComponent
          dataSource={sampleData}
          treeColumnIndex={1}
          childMapping='subtasks'
          height='410'
        >
          <ColumnsDirective>
            <ColumnDirective
              field='taskID'
              headerText='Task ID'
              width='70'
              textAlign='Right'
            />
            <ColumnDirective
              field='taskName'
              headerText='Task Name'
              width='200'
            />
            <ColumnDirective
              field='startDate'
              headerText='Start Date'
              width='90'
              format='yMd'
              textAlign='Right'
            />
            <ColumnDirective
              field='endDate'
              headerText='End Date'
              width='90'
              format='yMd'
              textAlign='Right'
            />
            <ColumnDirective
              field='duration'
              headerText='Duration'
              width='90'
              textAlign='Right'
            />
            <ColumnDirective
              field='progress'
              headerText='Progress'
              width='90'
              textAlign='Right'
            />
            <ColumnDirective
              field='priority'
              headerText='Priority'
              width='90'
            />
          </ColumnsDirective>
        </TreeGridComponent>
      </div>
    </div>
  );
};
export default Default;
