'use client'
import {
  ColumnDef,
  flexRender,
  getCoreRowModel,
  getFilteredRowModel,
  useReactTable
} from '@tanstack/react-table'
import clsx from 'clsx'
import { memo } from 'react'

interface TableProps {
  data: Array<object>
  columns: ColumnDef<any, any>[]
  className?: string
}

const Table: React.FC<TableProps> = ({ data, columns, className }) => {
  const table = useReactTable({
    data,
    columns,
    getCoreRowModel: getCoreRowModel(),
    getFilteredRowModel: getFilteredRowModel()
  })

  const classNames = clsx('w-full text-sm text-left text-gray-500 rounded-lg overflow-hidden', {
    'h-full': !table?.getRowModel().rows.length,
    [className]: !!className
  })

  return (
    <table cellPadding={0} cellSpacing={0} className={classNames}>
      <thead className="text-xs text-gray-400 uppercase bg-gray-100">
        {table?.getHeaderGroups().map((headerGroup) => (
          <tr key={headerGroup.id} className="mr-6">
            {headerGroup.headers.map((header) => (
              <th
                key={header.id}
                style={{
                  width: header.column.columnDef.size ? `${header.column.columnDef.size}px` : 'auto'
                }}
                colSpan={header.colSpan}
                className={clsx('first:pl-6 last:pr-6 h-12 pl-1', {
                  'text-center': (header.column.columnDef.meta as any)?.center
                })}
              >
                {flexRender(header.column.columnDef.header, header.getContext())}
              </th>
            ))}
          </tr>
        ))}
      </thead>
      <tbody className="bg-white divide-y-[1px]">
        {table?.getRowModel().rows.map((row) => {
          return (
            <tr key={row.id} className="hover:bg-gray-100 cursor-pointer">
              {row.getVisibleCells().map((cell) => {
                return (
                  <td
                    className="first:pl-6 last:pr-6 h-16 pl-1 font-medium text-sm text-black"
                    key={cell.id}
                  >
                    {flexRender(cell.column.columnDef.cell, cell.getContext())}
                  </td>
                )
              })}
            </tr>
          )
        })}
        {!table?.getRowModel().rows?.length && (
          <tr>
            <td
              colSpan={table.getHeaderGroups()[0].headers.length}
              className="px-6 py-3 h-full text-center"
            >
              Chưa có dữ liệu
            </td>
          </tr>
        )}
      </tbody>
    </table>
  )
}

export default memo(Table)
