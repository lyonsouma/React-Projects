const Map = () => {
    let Prices = [200 , 250, 50, 230]
return(
    <div>
       <h1>
        {
            Prices.map((increase)=> increase * 0.1 + increase + ' ,')
        }
       </h1>
    </div>
)
}
export default Map