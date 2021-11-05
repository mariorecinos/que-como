import { Helmet } from 'react-helmet';
import { StyledMain } from '../styles';

const Home = (props) => {
    return (
        <>
            <Helmet>
                <title>Bienvendio A Que Como⚛️</title>
                <meta name="description" content="Keep Track Of Your Favorite Spots" />
                <meta name="keywords" content="Delivery, Restuarants, Stores" />
            </Helmet>
            <StyledMain>
                <h1>Bienvendido A Que Como</h1>
            </StyledMain>
        </>
    );
};

export default Home;
