


let parameter=(sr)=>{

  if(sr >= 7.5){
    console.log('Sangat Bahaya !, banyak bangunan dan gedung hancur.')
  }else if(sr >= 6.5 && sr < 7.5){
    console.log('Bahaya !, banyak bangunan dan gedung roboh')
  }else if(sr >= 5.5 && sr < 6.5){
    console.log('Tembok retak atau roboh')
  }else if(sr >= 5.0 && sr < 5.5){
    console.log('Beberapa bangunan akan rusak !')
  }else{
    console.log('Tidak ada kerusakan, jika ada hanya kerusakan kecil')
  }
}



parameter(1.5)
  