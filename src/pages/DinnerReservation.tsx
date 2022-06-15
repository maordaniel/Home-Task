import React, {useState} from 'react';
import Guest from '../components/Guest';
import { v4 as uuidv4 } from 'uuid';

export interface GuestType{
  id: string;
  first: string;
  main: string;
  desert: string;
}

function DinnerReservation(){
  const newGuest = () => {
    return {
    id: uuidv4(),
    first: '',
    main: '',
    desert: '',
  }};

  const [guestsArr, setGuest] = useState<GuestType[]>([newGuest()]);

  const addGuest = () =>{
    setGuest([...guestsArr, newGuest()]);
  }

  const updateGuest = (guest: GuestType) =>{
    const newGuestsArr = guestsArr.map(obj => {
      if (obj.id === guest.id) {
        return guest;
      }
      return obj;
    });

    setGuest(newGuestsArr)
  };

  const deleteGuest = (guest: GuestType) =>{
    const newGuestArr = guestsArr.filter(item => item.id !== guest.id);

    if (newGuestArr.length > 0 ){
      return setGuest(newGuestArr);
    }else{
      return setGuest([newGuest()]);
    }
  }

  return(
   <div>
     {guestsArr.map((guest,i) => {
        const index = i+1;
        const props = {
          guest,
          index,
          updateGuest,
          addGuest,
          deleteGuest,
          lastItem: index === guestsArr.length,
        }
        return <Guest key={guest.id} {...props}/>
       }
     )}
   </div>
  )
}

export default DinnerReservation;