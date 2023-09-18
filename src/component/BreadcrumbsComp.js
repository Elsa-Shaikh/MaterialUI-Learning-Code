import React from 'react'
import { Box, Breadcrumbs,Typography,Link} from '@mui/material'
// import { Link } from '@mui/icons-material'
import NavigateNextIcon from '@mui/icons-material/NavigateNext'

const BreadcrumbsComp = () => {
  return (
    <>
    <Box m={2}>
     <Breadcrumbs aria-label='breadcrumbs' separator={<NavigateNextIcon fontSize='small'/>}
     maxItems={2}
    //  itemsAfterCollapse={2}
     itemsBeforeCollapse={2}
     >
        <Link href='#' underline='hover'>Home</Link>
        <Link href='#' underline='hover'>About</Link>
        <Link href='#' underline='hover'>Contact</Link>
        <Link href='#' underline='hover'>Features</Link>
        <Typography>Shoes</Typography>
     </Breadcrumbs>
    </Box>
    </>
  )
}

export default BreadcrumbsComp