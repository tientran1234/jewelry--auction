
import Banner from '../../components/Banner'
import Footer from '../../components//Footer'
import Header from '../../components/Header'
import LiveAuction from '../../components/LiveAuction'
import UpcomingAuction from '../../components/UpcomingAuction'
const Hompage = () => {
    return (
        <div>
            <Header />
            <Banner />
            <LiveAuction />
            <UpcomingAuction />
            <Footer />
        </div>
    )
}

export default Hompage