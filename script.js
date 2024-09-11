clicked=(e)=>{
    inp.value+=e.target.textContent
}
equals=()=>{
    try{
        inp.value=eval(inp.value)


    }
    catch(err){
        inp.value="ERRORR"
    }
}
allClear=()=>{
    inp.value=""
}