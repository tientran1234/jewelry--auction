import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious,
} from "@/components/ui/carousel"
const data=[{
    img:"https://dam.sothebys.com/dam/image/Item/466041a3-0a1b-4dd0-8ebb-4933223b94ce/primary/medium",
    name:"test data",
    price:1000000
},
{
    img:"https://dam.sothebys.com/dam/image/Item/17e73321-e27e-40f9-9157-7925011bc4e0/primary/medium",
    name:"test data",
    price:1000000
},
{
    img:"https://dam.sothebys.com/dam/image/Item/4492d29d-01b0-49e6-b2df-72e5b49b7c46/primary/medium",
    name:"test data",
    price:1000000
},
{
    img:"https://dam.sothebys.com/dam/image/Item/2bd1d52c-d2e6-4b3e-8cfd-3340063b2086/primary/medium",
    name:"test data",
    price:1000000
},
{
    img:"https://dam.sothebys.com/dam/image/Item/2bd1d52c-d2e6-4b3e-8cfd-3340063b2086/primary/medium",
    name:"test data",
    price:1000000
},
{
    img:"https://dam.sothebys.com/dam/image/Item/2bd1d52c-d2e6-4b3e-8cfd-3340063b2086/primary/medium",
    name:"test data",
    price:1000000
},
{
    img:"https://dam.sothebys.com/dam/image/Item/2bd1d52c-d2e6-4b3e-8cfd-3340063b2086/primary/medium",
    name:"test data",
    price:1000000
},
{
    img:"https://dam.sothebys.com/dam/image/Item/2bd1d52c-d2e6-4b3e-8cfd-3340063b2086/primary/medium",
    name:"test data",
    price:1000000
}
]
const UpcomingAuction = () => {
  return (
    <div >
        <h1 className="text-center text-3xl mt-32">UPCOMING AUCTION</h1>
         <Carousel className="p-20" >
            <CarouselContent className="-ml-2 md:-ml-4 ">
           
        {data.map((i,index)=>(
             <CarouselItem key={index} className="px-4 md:basis-1/3 lg:basis-1/5 ">
                <div className="shadow-xl ">
                <img className="" src={i.img} alt="" />
                <h1 className='text-center'>{i.name}</h1>
                <p className='text-center'>{i.price.toLocaleString('vi-VN')+ " vn"}</p>
                </div>
                </CarouselItem>
            
        ))}
      
            </CarouselContent>
            <CarouselPrevious className="ml-20 " />
                <CarouselNext className="mr-20" />
          </Carousel>
    </div>
  )
}

export default UpcomingAuction