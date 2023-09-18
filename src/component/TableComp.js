import { Box, Button, Checkbox, Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from '@mui/material'
import React, { useEffect, useState } from 'react'

const TableComp = () => {
const [users, setUsers] = useState([]);
const [check, setCheck] = useState(false);
useEffect(()=>{
    setUsers(tableData);
},[]);
const handleChange = (e)=>{
    //  alert("Select");
      const {name, checked} = e.target;
    //   let temp = users.map(user=> user.first_name === name ? {...user, isChecked : checked}: user); 
      if(name === "allselect"){
        const checkedValue = users.map((user)=>{ return {...user, isChecked:checked}});
        // console.log(checkedValue);
        setUsers(checkedValue);
      }
      else{
        const checkedValue = users.map((user)=> 
         user.first_name === name ? {...user, isChecked:checked}:user);
        //  console.log(checkedValue);
         setUsers(checkedValue);
      }
    }

const handleCheck =(e)=>{
      setCheck(e.target.checked);
}

const handleManage =(e)=>{
    const {name, checked} = e.target;
    //   let temp = users.map(user=> user.first_name === name ? {...user, isChecked : checked}: user); 
      if(name === "allselect"){
        const checkedValue = users.map((user)=>{ return {...user, isChecked:checked}});
        console.log(checkedValue);
        setUsers(checkedValue);
      }
      else{
        const checkedValue = users.map((user)=> 
         user.first_name === name ? {...user, isChecked:checked}:user);
         console.log(checkedValue);
         setUsers(checkedValue);
      }
       
}

    return (
    <>
    <Box sx={{width:'80%', m:10,p:10}}>
    <TableContainer component={Paper} sx={{maxHeight:'300px'}}>
      <Button color='primary' variant='contained' sx={{m:"10px"}}>Add</Button>
      <Button disabled={!check} color='secondary' variant='contained' onClick={handleManage}>Manage</Button>
        <Table aria-label='Simple Table' stickyHeader>
            <TableHead>
                <TableRow>
                <TableCell>
                    <Checkbox 
                    onClick={handleCheck}
                    name='allselect' 
                    checked={!users.some((user)=> user?.isChecked!==true )} 
                    onChange={handleChange}/></TableCell>
                    <TableCell>ID</TableCell>
                    <TableCell>First Name</TableCell>
                    <TableCell>Last Name</TableCell>
                    <TableCell align='center'>Email</TableCell>
                    <TableCell>Action</TableCell>
                </TableRow>
            </TableHead>
            <TableBody>
                {
                    users.map((user)=>{
                        return(
                            <TableRow key={user.id} sx={{
                                '&:last-child td, &:last-child th':{border:0}
                            }}> 
                                <TableCell>
                                <Checkbox 
                                name={user.first_name} 
                                onClick={handleCheck}
                                checked={user?.isChecked || false} 
                                onChange={handleChange}/></TableCell>
                                <TableCell>{user.id}</TableCell>
                                <TableCell>{user.first_name}</TableCell>
                                <TableCell>{user.last_name}</TableCell>
                                <TableCell align='center'>{user.email}</TableCell>
                                <TableCell><Button color='warning' variant='contained'>Manage</Button></TableCell>
                            </TableRow>
                        )
                    })
                }
            </TableBody>
        </Table>
    </TableContainer>
    </Box>
    </>
  )
}
const tableData = [{
    "id": 1,
    "first_name": "Reynard",
    "last_name": "Bradder",
    "email": "rbradder0@cpanel.net",
    "gender": "Male",
    "ip_address": "135.187.48.185"
  }, {
    "id": 2,
    "first_name": "Mic",
    "last_name": "Riggs",
    "email": "mriggs1@devhub.com",
    "gender": "Male",
    "ip_address": "138.230.25.130"
  }, {
    "id": 3,
    "first_name": "Chas",
    "last_name": "Whitehouse",
    "email": "cwhitehouse2@freewebs.com",
    "gender": "Male",
    "ip_address": "120.155.19.185"
  }, {
    "id": 4,
    "first_name": "Dougy",
    "last_name": "Cresser",
    "email": "dcresser3@goodreads.com",
    "gender": "Male",
    "ip_address": "132.89.59.136"
  }, {
    "id": 5,
    "first_name": "Hunt",
    "last_name": "Caudell",
    "email": "hcaudell4@histats.com",
    "gender": "Male",
    "ip_address": "7.171.134.21"
  }, {
    "id": 6,
    "first_name": "Frederigo",
    "last_name": "Roman",
    "email": "froman5@squarespace.com",
    "gender": "Male",
    "ip_address": "1.9.241.113"
  }, {
    "id": 7,
    "first_name": "Ivette",
    "last_name": "Dunkersley",
    "email": "idunkersley6@youtube.com",
    "gender": "Female",
    "ip_address": "5.165.11.208"
  }, {
    "id": 8,
    "first_name": "Lorinda",
    "last_name": "Dollin",
    "email": "ldollin7@shutterfly.com",
    "gender": "Female",
    "ip_address": "186.45.149.115"
  }, {
    "id": 9,
    "first_name": "Isabelita",
    "last_name": "Bruster",
    "email": "ibruster8@gravatar.com",
    "gender": "Female",
    "ip_address": "162.86.4.166"
  }, {
    "id": 10,
    "first_name": "Jeremie",
    "last_name": "Lydall",
    "email": "jlydall9@tamu.edu",
    "gender": "Male",
    "ip_address": "83.188.223.164"
  }]
  

export default TableComp