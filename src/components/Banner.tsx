import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious,
} from "@/components/ui/carousel"
import Autoplay from "embla-carousel-autoplay"
const img = [
    "https://www.firststateauctions.com/sites/default/files/2023-07/A%20New%20Australian%20Record%20for%20a%20Watch%20at%20Auction%20Richard%20Mille%20Limited%20Edition.jpg",
    "https://www.firststateauctions.com/sites/default/files/2023-07/Fine%20Jewellery%2C%20Diamonds%20and%20Swiss%20Watch%20Auctions%20every%20week%20%282%29.jpg",
    "https://www.firststateauctions.com/sites/default/files/2023-07/Fine%20Jewellery%2C%20Diamonds%20and%20Swiss%20Watch%20Auctions%20every%20week%20%283%29.jpg",
    "https://www.firststateauctions.com/sites/default/files/2023-07/Fine%20Jewellery%2C%20Diamonds%20and%20Swiss%20Watch%20Auctions%20every%20week%20%284%29.jpg",
    "https://www.firststateauctions.com/sites/default/files/2023-07/Fine%20Jewellery%2C%20Diamonds%20and%20Swiss%20Watch%20Auctions%20every%20week%20%285%29.jpg"
]
const Banner = () => {
    return (
        <div className="mt-8">
            <Carousel plugins={[
                Autoplay({
                    delay: 2000,
                }),
            ]}>
                <CarouselContent>
                    {img.map((i, index) => (
                        <CarouselItem key={index}>
                            <img className="h-full  " src={i} alt="" />
                        </CarouselItem>
                    ))}
                </CarouselContent>
                <CarouselPrevious className="ml-20 " />
                <CarouselNext className="mr-20" />
            </Carousel>
        </div>
    )
}

export default Banner