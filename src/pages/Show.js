import { useState } from 'react';
import { Helmet } from 'react-helmet';
import { StyledMain } from '../styles';

const Show = (props) => {
    const [formState, setFormState ] = useState({
        content: ""
    });

    const handleChange = event => (
        setFormState({ content: event.target.value })
    );

    const handleSubmit = event => {
        event.preventDefault();
        props.createReview(formState, props.store._id);
        setFormState({ content: '' }); // reset our form
    };

    return (
        <>
            <Helmet>
                <title>See Details | Que Como ⚛️</title>
                <meta name="description" content="See details for the following store" />
                <meta name="keywords" content="Delivery, Restuarants, Stores" />
            </Helmet>
            <StyledMain>
                <h1>Further Details</h1>
                <section>
                    <h3>{props.store.name} {props.store.category}</h3>
                    <img src={props.store.image}
                         alt={props.store.name}
                         style={{ height: "10rem", border: "black solid 2px" }} />
                    <h3>{props.store.details}</h3>
                    <p style={{fontWeight: 700}}>{props.store.saved ? 'The Store is Saved Store' : 'Not Saved Store'}</p>
                    {
                        props.store.review.length ?
                        <>
                            <br />
                                {props.store.review.map(n =>
                                    <p style={{margin: '1rem 0'}} key={n._id}>{n.content}</p>
                                )}
                            <br />
                        </>
                        :
                        <p>No Reviews To Display At This Time</p>
                    }
                    <form onSubmit={handleSubmit}>
                        <textarea
                            name="content"
                            onChange={handleChange}
                            value={formState.content}
                        ></textarea>
                        <input type="submit" value="Add Review" />
                    </form>
                </section>
            </StyledMain>
        </>
    );
};

export default Show;
