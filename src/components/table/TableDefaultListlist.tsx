import React from 'react'
import Table from '@mui/material/Table'
import TableHead from '@mui/material/TableHead'
import { TableCell } from '@mui/material'
import TableBody from '@mui/material/TableBody'
import TableRow from '@mui/material/TableRow'

interface ITableDefault {
  columns: any[]
  testFields?: any[]
	checkFields?: any[]
	listlist? : any[]
}

const TableDefaultUserManaging : React.FC<ITableDefault> = ({
  columns,
  testFields,
	checkFields,
	listlist
}) => {
  return (
    <Table size="medium">
      <TableHead>
        <TableRow>
          {columns.map((column: any, index: number) => (
            <React.Fragment key={index}>
              {column.checkBox && <TableCell>{column.checkBox()}</TableCell>}
              <TableCell>{column.field}</TableCell>
            </React.Fragment>
          ))}
        </TableRow>
      </TableHead>

      {listlist && (
        <TableBody>
					{listlist.map ((list : any , idx : number )=>(
						<TableRow key={idx }>
							{list.map((column: any, index: number) => (
								<React.Fragment key={index}>
									{column.checkBox && <TableCell>{column.checkBox()}</TableCell>}
									<TableCell>{column.field}</TableCell>
								</React.Fragment>
							))}
						</TableRow>					
					)) 
					}
				</TableBody>
      )}
					
      {checkFields && (
        <TableBody>
          <TableRow>
            {checkFields.map((column: any, index: number) => (
              <React.Fragment key={index}>
                {column.checkBox && <TableCell>{column.checkBox()}</TableCell>}
                <TableCell>{column.field()}</TableCell>
              </React.Fragment>
            ))}
          </TableRow>
        </TableBody>
      )}
    </Table>
  )
}

export default TableDefaultUserManaging
