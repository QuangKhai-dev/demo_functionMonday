import React, { useState } from 'react';
import { Checkbox, Table } from 'antd';
const dataSource = [
  {
    key: '1',
    firstName: 'John',
    lastName: 'Brown',
    age: 32,
    address: 'New York No. 1 Lake Park',
    tags: ['nice', 'developer'],
  },
  {
    key: '2',
    firstName: 'Jim',
    lastName: 'Green',
    age: 42,
    address: 'London No. 1 Lake Park',
    tags: ['loser'],
  },
  {
    key: '3',
    firstName: 'Joe',
    lastName: 'Black',
    age: 32,
    address: 'Sydney No. 1 Lake Park',
    tags: ['cool', 'teacher'],
  },
];
export default function App() {
  const [listColumn, setListColumn] = useState([
    {
      id: 1,
      name: 'Status',
      type: 'Essentials',
      columnTemplateValue: [
        {
          id: 3,
          name: 'Stuck',
        },
        {
          id: 2,
          name: 'Working on it',
        },
        {
          id: 1,
          name: 'Done',
        },
      ],
    },
    {
      id: 2,
      name: 'Timeline ',
      type: 'Essentials',
      columnTemplateValue: [],
    },
    {
      id: 3,
      name: 'Numbers',
      type: 'Essentials',
      columnTemplateValue: [],
    },
    {
      id: 4,
      name: 'Text',
      type: 'Super Useful',
      columnTemplateValue: [],
    },
    {
      id: 5,
      name: 'Files',
      type: 'Super Useful',
      columnTemplateValue: [],
    },
  ]);
  const [values, setValues] = useState([]);

  return (
    <div className="flex h-screen choose_column">
      <div className="w-6/12 py-48 px-48">
        <div className="flex flex-col h-full ">
          <div className="mb-10 flex-1">
            <img className="h-6" src="./public/mondayS_miniLogo.png" alt="" />
          </div>
          <div className="grow-8">
            <h1 className="text-3xl font-normal mb-5">
              Let’s select the relevant columns for your board
            </h1>
            <div className="flex flex-col">
              <label htmlFor="" className="text-sm mb-3">
                Choose from the most popular column types for your work
              </label>
              <Checkbox.Group
                options={listColumn.map((item, index) => {
                  return {
                    label: (
                      <div className="py-2 flex items-center" key={index}>
                        {/* <span className="inline-block p-1 bg-blue-400 mr-2 text-white rounded">
                          <UserIcon />
                        </span> */}
                        {item.name}
                      </div>
                    ),
                    value: item.name,
                  };
                })}
                value={values}
                onChange={(checkedValues) => {
                  console.log(checkedValues);
                  // setListSelectCol(checkedValues);

                  setValues(checkedValues);
                }}
              />
            </div>
            <div className="p-6 bg-gray-100 rounded-md mt-20">
              <p className="text-sm">
                Easily see in one glance when and by who your work was last
                updated.
              </p>
            </div>
          </div>
          <div className="flex justify-between items-center mt-10">
            <button className="border-gray-400 border py-2 rounded-md w-max px-5">
              <span className="ml-3">
                <i className="fa-solid fa-chevron-left"></i>
              </span>
              Back
            </button>
            <button
              // onClick={() => {
              //   boardServ.setColumnForBoard({
              //     listColumn: listSelectCol,
              //     boardId: Number(id),
              //   });
              // }}
              className="bg-blue-500 text-white py-2 rounded-md w-max px-5"
            >
              Next
              <span className="ml-3">
                <i className="fa-solid fa-chevron-right"></i>
              </span>
            </button>
          </div>
        </div>
      </div>
      <div className="bg-white p-5 w-6/12">
        <Table
          dataSource={dataSource}
          columns={values.map((item) => {
            return {
              title: item,
              dataIndex: item,
              key: item,
            };
          })}
        />
      </div>
    </div>
  );
}
