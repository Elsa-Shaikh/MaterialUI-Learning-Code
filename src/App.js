import "./App.css";
import { useStore } from "./store/zustand";
import Button from "@mui/material/Button";
import { Box, Container, Typography } from "@mui/material";
import TypographyComp from "./component/TypographyComp";
import ButtonCom from "./component/ButtonCom";
import TableComp from "./component/TableComp";
import DataTable from "./component/DataTable";
import TextfieldComp from "./component/TextfieldComp";
import SelectComp from "./component/SelectComp";
import RadioComp from "./component/RadioComp";
import CheckboxComp from "./component/CheckboxComp";
import SwtichComp from "./component/SwtichComp";
import BoxComp from "./component/BoxComp";
import CardComp from "./component/CardComp";
import AccordionComp from "./component/AccordionComp";
import ImageListComp from "./component/ImageListComp";
import NavbarComp from "./component/NavbarComp";
import BreadcrumbsComp from "./component/BreadcrumbsComp";
import DrawerComp from "./component/DrawerComp";
import SpeedDialComp from "./component/SpeedDialComp";
import BottomNaviComp from "./component/BottomNaviComp";
import AvatarComp from "./component/AvatarComp";
import ListComp from "./component/ListComp";
import ChipComp from "./component/ChipComp";
import AlertComp from "./component/AlertComp";
import SnackBarComp from "./component/SnackBarComp";
import DialogComp from "./component/DialogComp";
import { SkeletonComp } from "./component/SkeletonComp";
import DateComp from "./component/DateComp";
import TabComp from "./component/TabComp";
import ResponsivenessComp from "./component/ResponsivenessComp";
import SigninPage from "./Pages/SigninPage";
import LoginPage from "./Pages/LoginPage";
import FormTab from "./Pages/FormTab";
import Login from "./Pages/Login";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Register from "./Pages/Register";
import ForgetPassword from "./Pages/ForgetPassword";
import AvatarEdit from "./EditPicture/AvatarEdit";
import UserProfile from "./EditPicture/UserProfile";
import DatePicker from "./EditPicture/DatePicker";
import TablePaginationComp from "./EditPicture/TablePaginationComp";
import HoverEffect from "./EditPicture/HoverEffect";
import SliderRange from "./EditPicture/SliderRange";

// function
// useStore.useState({count:50});

function App() {
  // const count = useStore(state => state.count);
  // const inc = useStore(state => state.increaseCount);
  // const dec = useStore(state => state.decreaseCount);
  //  useStore.subscribe(()=> console.log("subscribes"));
  //  console.log(state);
  //  const state = useStore.getState(); //access out side the
  return (
    <>
      {/* <div className="App">
      <h1> Learn Zustand</h1>
        <span>{count}</span> <br />     
        <button onClick={inc}>+</button>
        <button onClick={dec}>-</button>
        <Button variant='contained' sx={{mx:2, display:"flex", ":hover":{bgcolor:"red"}}}>Material</Button>
        <Container sx={{
          height:"100px",
          width:"300px",
          bgcolor:"orange",
          m:5
        }}>
           <Box sx={{
          height:"50px",
          width:"50px",
          bgcolor:"yellow",
          m:5
        }}>
         <Typography> {count} </Typography>
           </Box>
        </Container>
    </div> */}
      {/* 
      <TypographyComp/>
      <ButtonCom/> 
      <DataTable/>
      <TextfieldComp/>
      
      <RadioComp/>
      <CheckboxComp/> */}
      {/* <SwtichComp/> */}
      {/* <SelectComp/> */}
      {/* <BoxComp/> */}
      {/* <CardComp/> */}
      {/* <AccordionComp/> */}
      {/* <ImageListComp/> */}
      {/* <NavbarComp/> */}
      {/* <BreadcrumbsComp/> */}
      {/* <DrawerComp/> */}
      {/* <SpeedDialComp/> */}
      {/* <BottomNaviComp/> */}
      {/* <AvatarComp/> */}
      {/* <ListComp/> */}
      {/* <ChipComp/> */}
      {/* <TableComp/> */}
      {/* <AlertComp/> */}
      {/* <SnackBarComp/> */}

      {/* <SkeletonComp/> */}

      {/* <DateComp/> */}
      {/* <TabComp/> */}
      {/* <DataTable/> */}
      {/* <ResponsivenessComp/> */}
      {/* <SigninPage/> */}
      {/* <LoginPage/> */}
      {/* <FormTab/> */}
      {/* <AvatarEdit/> */}
      {/* <UserProfile /> */}
      {/* <DatePicker/> */}
      {/* <TablePaginationComp/> */}
      {/* <HoverEffect/> */}
      {/* <SliderRange/> */}

      {/* <DialogComp/> */}

      <Router>
        <Routes>
          <Route path="/" exact element={<Login />} />
          <Route path='/formtab' exact element={<FormTab/>}/>
          <Route path="/register" exact element={<Register />} />
          <Route path="/forgetpassword" exact element={<ForgetPassword />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
