import { useEffect, useState } from 'react';
import { Text, View } from 'react-native';

export default function Counter () {
    const [quantity,setQuantity]=useState(0); 

    function handleCount(){
        setQuantity(quantity+1)
    }

    useEffect(()=> {
        alert("Voce pressionou o botão!")
    },[quantity])

 return (
   <View>
    <Text>
      {quantity}
    </Text>
    <button onClick={handleCount}>
        +
    </button>
   </View>
  );
}
