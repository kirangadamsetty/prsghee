


function Shimmer(){
  return(
     <div >
       <div className = "bg-body-secondary" style = {{height:"500px", width:"100%",}}></div>
       <div className = "container d-flex gap-4 flex-wrap my-4">
        {
          Array(8).fill("").map((item, index)=>{
            return <div key = {index}  className = "bg-body-secondary" style = {{height:"400px", width:"300px" }}>
                   
            </div>
          })

        }
       </div>

     </div>
  )
}
export default Shimmer