
const data=[{
    img:"https://sothebys-com.brightspotcdn.com/dims4/default/7abe032/2147483647/strip/true/crop/600x687+0+6/resize/330x378!/format/webp/quality/90/?url=http%3A%2F%2Fsothebys-brightspot.s3.amazonaws.com%2Fdotcom%2Fab%2F54%2F99809926449fb341253593968e8b%2Fl24050-calendar.jpg",
    name:"test data",
    price:1000000
},
{
    img:"https://sothebys-com.brightspotcdn.com/dims4/default/471f719/2147483647/strip/true/crop/600x687+0+6/resize/330x378!/format/webp/quality/90/?url=https%3A%2F%2Fsothebys-md.brightspotcdn.com%2Ffb%2Fd2%2F50f5f25a4cd79deb9780773aa030%2F600-x-700-viking-banner-mag-jewels.png",
    name:"test data",
    price:1000000
},
{
    img:"https://sothebys-com.brightspotcdn.com/dims4/default/035f0af/2147483647/strip/true/crop/600x687+0+6/resize/330x378!/format/webp/quality/90/?url=https%3A%2F%2Fsothebys-md.brightspotcdn.com%2Fec%2Fa6%2F7ad9680845e4be58710a39488af9%2F600-x-700-viking-banner-fine-jewels-upd.png",
    name:"test data",
    price:1000000
},
{
    img:"https://sothebys-com.brightspotcdn.com/dims4/default/f55e74c/2147483647/strip/true/crop/314x360+163+0/resize/330x378!/format/webp/quality/90/?url=https%3A%2F%2Fsothebys-md.brightspotcdn.com%2Fdc%2F42%2Fd7e8ab1b41f984bc01f056a61109%2Fsothebys-new-york-new-facade.jpeg",
    name:"test data",
    price:1000000
}
]
const LiveAuction = () => {
  return (
    <div className="m-8">
       <h1 className="text-center text-3xl my-16">UPCOMING AUCTION</h1>
        <div className="grid grid-cols-4 mt-8 gap-16">
        {data.map((i,index)=>(
            <div key={index} >
                 <img src={i.img} alt="" className="w-full" />
                <h1 className='text-center'>{i.name}</h1>
                <p className='text-center'>{i.price.toLocaleString('vi-VN')+ " vn"}</p>
            </div>
           
        ))}
    </div>
    </div>
    
  )
}

export default LiveAuction