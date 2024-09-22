import Header from "../../../widgets/Header/ui/Header.tsx";
import ProductsList from "../../../widgets/ProductsList/ui/ProductsList.tsx";
import Footer from "../../../widgets/Footer/ui/Footer.tsx";
import PageWrapper from "../../../shared/ui/PageWrapper/PageWrapper.tsx";

const MainPage = () => {
    return (
        <PageWrapper>
            <Header></Header>
            <ProductsList></ProductsList>
            <Footer></Footer>
        </PageWrapper>
    );
};

export default MainPage;
