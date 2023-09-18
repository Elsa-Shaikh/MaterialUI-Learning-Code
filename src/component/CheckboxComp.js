import { Box, Checkbox, FormControl, FormControlLabel, FormGroup, FormHelperText, FormLabel } from '@mui/material'
import React, { useState } from 'react'
import BookmarkBorderIcon from '@mui/icons-material/BookmarkBorder';
import BookmarkIcon from '@mui/icons-material/Bookmark';



const CheckboxComp = () => {
 const [check, setCheck] = useState(false)
 const [skill, setSkill] = useState([])

//  console.log({check});
 console.log({skill});
 const handleChange = (e)=>{
       setCheck(e.target.checked);
 }
 const handleSkillChange = (e)=>{
    const index = skill.indexOf(e.target.value);
    if(index === -1){
        setSkill([...skill,e.target.value]);
    }
    else{
        setSkill(skill.filter((skill)=> skill !== e.target.value));
    }
}


 return (
    <>
    <Box sx={{m:'30px'}}>
        <Box>
            <FormControlLabel 
            label='I accept terms and conditions' 
            control={<Checkbox size='small' color='warning' checked={check} onChange={handleChange}/>} />
        </Box>
        <Box>
            <Checkbox icon={<BookmarkBorderIcon/>} checkedIcon={<BookmarkIcon/>} 
            checked={check}
            onChange={handleChange}/>
        </Box>
        <Box>
            <FormControl error>
                <FormLabel>Skills</FormLabel>
                 <FormGroup>
                 <FormControlLabel 
            label='HTML' 
            control={
            <Checkbox value='html' 
            checked={skill.includes('html')} 
            onChange={handleSkillChange}
            />} />
            <FormControlLabel 
            label='CSS' 
            control={
            <Checkbox value='css' 
            checked={skill.includes('css')} 
            onChange={handleSkillChange}
            />
            } />
            <FormControlLabel 
            label='Javascript' 
            control={<Checkbox value='javascript' 
            checked={skill.includes('javascript')} 
            onChange={handleSkillChange}
            />} />
                 </FormGroup>
                 <FormHelperText>Invalid Selection</FormHelperText>
            </FormControl>
        </Box>
    </Box>
    </>
  )
}

export default CheckboxComp