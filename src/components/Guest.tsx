import React from 'react';
import Select, { SelectChangeEvent } from '@mui/material/Select';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Button from '@mui/material/Button';
import '../styles/guestStyle.css'
import {convertNumberToLetter} from "../utils/global func";
import {GuestType} from "../pages/DinnerReservation";

interface Props{
    guest: GuestType;
    index: number;
    lastItem: boolean;
    addGuest: () => void;
    deleteGuest: (guest: GuestType) => void;
    updateGuest: (guest: GuestType) => void;
}

function Guest(props: Props){
  const {guest, index, lastItem, addGuest, deleteGuest, updateGuest} = props;

  const firstArr = ["Salad", "Soup", "Eggs"];
  const mainArr = ["Fish", "Chicken", "Steak"];
  const desertArr = ["Malaby", "Ice Cream", "Chocolate Cake"];

  const handleChange = (event: SelectChangeEvent) => {
    switch (event.target.name){
      case "first":
        updateGuest({...guest,
          first: event.target.value,
          main: '',
          desert: ''}
        );
        break;
      case "main":
        updateGuest({...guest,
          main: event.target.value,
          desert: ''}
        );
        break;
      case "desert":
        updateGuest({...guest,
          desert: event.target.value}
        );
        break;
      default:
        return;
    }
  };

  const SelectMeal = ({mealArr, mealType}: { mealArr: typeof firstArr | typeof mainArr | typeof desertArr,
    mealType: keyof typeof guest }) =>{

    return (
      <FormControl sx={{ m: 1, minWidth: 160 }}>
        <Select
          value={guest[mealType]}
          onChange={handleChange}
          displayEmpty
          name={mealType}
        >
          <MenuItem value="" disabled>
            <em>Select</em>
          </MenuItem>
          {mealArr?.map((item) =>
            <MenuItem key={item} value={item}>{item}</MenuItem>
          )}
        </Select>
      </FormControl>
    )
  }


  return(
   <div >
     <div className="guest-container">
       <h1 className="guest-title">Guest {convertNumberToLetter(index)}</h1>

       <SelectMeal mealArr={firstArr} mealType={"first"}/>
       {guest.first && <SelectMeal mealArr={mainArr} mealType={"main"}/>}
       {guest.main && <SelectMeal mealArr={desertArr} mealType={"desert"}/>}
       {guest.desert && <Button variant="contained" color="error" onClick={() => deleteGuest(guest)}>Delete Guest</Button>}
     </div>

     {guest.desert && lastItem && <div className="add-guest"> <Button onClick={addGuest} variant="contained">Add Guest</Button></div>}
   </div>
  )
}

export default Guest;