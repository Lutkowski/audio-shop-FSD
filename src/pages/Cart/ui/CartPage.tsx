import PageWrapper from "../../../shared/ui/PageWrapper/PageWrapper.tsx";
import Header from "../../../widgets/Header/ui/Header.tsx";
import Footer from "../../../widgets/Footer/ui/Footer.tsx";
import Cart from "../../../widgets/Cart/ui/Cart.tsx";

const CartPage = () => {
    return (
        <PageWrapper>
            <main>
                <Header/>
                <Cart/>
            </main>
            <Footer/>
        </PageWrapper>
    );
};

export default CartPage;
