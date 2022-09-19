import Button from './Button'

const AddButton = () =>{
    return(
    <Button>
        <div style={{display:'flex',justifyContent:"space-between",alignItems:'center'}}>
        <div style={{width:'150px', marginLeft:"41px"}}>Dodaj wydarzenie</div>    
        <div style={{background:"var(--turquoise)", width:'36px',height: '36px',borderRadius: '100px',zIndex:2,display:'flex',justifyContent:"center",alignItems:'center',marginRight:'3px',fontSize:"40px",fontWeight: "bold", color:"var(--dark-blue)"}}>+</div>
        </div>
    </Button>)
}

export default AddButton

// top: 36px;
// left: 1593px;
// width: 36px;
// height: 56px;
// text-align: center;
// font: normal normal bold 40px/60px Poppins;
// letter-spacing: 0px;
// color: #006FFF;
// opacity: 1;