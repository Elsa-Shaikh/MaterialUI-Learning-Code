import { Box, Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Typography } from '@mui/material'
import React, { useEffect, useState } from 'react'
import TablePagination from '@mui/material/TablePagination';

const TablePaginationComp = () => {


    const [page, setPage] = useState(0);
    const [rowPage, setRowPage] = useState(2);


const handlePage=(e,newPage)=>{
    setPage(newPage);
}

const handleRowPage = (e)=>{
    setRowPage(+e.target.value);
    setPage(0);
}


    const columns = [
    {id:'id',name:'Id'},
    {id:'name',name:'Name'},
    {id:'email',name:'Email'},
    {id:'phone',name:'Phone'},
                    ]
    const rows = [
        {
            Id: "1",
            Name:'Sana Khan',
            Email:'e@test.com',
            Phone:'000000000'
        },
        {
            Id: "2",
            Name:'Shahid Khan',
            Email:'shah@test.com',
            Phone:'000000000'
        },
        {
            Id: "3",
            Name:'Amal Khan',
            Email:'a@test.com',
            Phone:'000000000'
        },
        {
            Id: "4",
            Name:'Farah Khan',
            Email:'f@test.com',
            Phone:'000000000'
        },        {
            Id: "5",
            Name:'Kamran Khan',
            Email:'kamran@test.com',
            Phone:'000000000'
        },{
            Id: "6",
            Name:'Sana Khan',
            Email:'e@test.com',
            Phone:'000000000'
        },
        {
            Id: "7",
            Name:'Shahid Khan',
            Email:'shah@test.com',
            Phone:'000000000'
        },
        {
            Id: "8",
            Name:'Amal Khan',
            Email:'a@test.com',
            Phone:'000000000'
        },
        {
            Id: "9",
            Name:'Farah Khan',
            Email:'f@test.com',
            Phone:'000000000'
        },        {
            Id: "10",
            Name:'Kamran Khan',
            Email:'kamran@test.com',
            Phone:'000000000'
        },
    ]                

    return (
    <>
    <Box sx={{m:'20px', textAlign:"center"}}>
       <Typography variant='h5' mb={5}>MUI Table Pagination</Typography> 
       <Paper sx={{width:'80%',marginLeft:'5%'}}>
         <TableContainer sx={{maxHeight:'450px'}}>
            <Table stickyHeader>
                <TableHead>
                    <TableRow>
                        {
                            columns.map((column)=>{
                                return (
                                    <TableCell key={column.id} sx={{bgcolor:'black',color:'white'}}>{column.name}</TableCell>
                                )
                            })
                        }
                    </TableRow>
                </TableHead>
                <TableBody>
                    {
                        rows
                        .slice(page * rowPage, page * rowPage+rowPage)
                        .map((data,index)=>{
                            return(
                                <TableRow key={index}>
                                    <TableCell>{data.Id}</TableCell>
                                    <TableCell>{data.Name}</TableCell>
                                    <TableCell>{data.Email}</TableCell>
                                    <TableCell>{data.Phone}</TableCell>
                                </TableRow>
                            )
                        })
                    }
                </TableBody>
            </Table>
         </TableContainer>
         <TablePagination
         rowsPerPageOptions={[2,5,10,25]} 
         rowsPerPage={rowPage}
         page={page}
         count={rows.length}
         component='div'
         onPageChange={handlePage}
         onRowsPerPageChange={handleRowPage}
         >

         </TablePagination>
        </Paper>    
    </Box>    
    </>
  )
}

export default TablePaginationComp