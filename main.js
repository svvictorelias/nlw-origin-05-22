function onScroll(){
  if(scrollY>3){
    navigation.classList.add('scroll')
  }else{
    navigation.classList.remove('scroll')
  }
}