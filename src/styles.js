import styled from 'styled-components';

export const StyledHeader = styled.header`
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding-left: 1rem;
    height: 5rem;
    background: linear-gradient(#e66465, #9198e5);
    color: #ffffff;
    //offset-x | offset-y | blur-radius | spread-radius | color meaning of each value in box-shadow by order
    box-shadow: 1px 1px 3px 2px #808080; // this is for Que Como Header Text
    // CSS for Navigation
    nav {
        display: flex;
        align-items: center;
        ul {
            display: flex;
            list-style: none;
            align-items: center;
            li {
                margin-right: 1.5rem;
                font-size: 1.5rem;
                font-weight: 700; // Thickness of Font for user login profile
                img {
                    height: 50px;
                    border-radius: 50%; // this will make profile pic of user a circle
                }
                a {
                    text-decoration: none;
                    color: inherit; // Dashboard in header will inherit white text color
                } // will hover over last item which is Dashboard
                &:last-child:hover {
                    cursor: pointer;
                }
            }
        }
    }
`;

// leftover style for setting up modal TODO
export const StyledOverlay = styled.div`
position: 'fixed';
top: 0;
left: 0;
right: 0;
bottom: 0;
background-color: 'rgba(0, 0, 0, .7)';
`;


export const StyledMain = styled.main`
    background: linear-gradient(#7b4397 , #dc2430);
    display: flex;
    flex-direction: column;
    align-items: center;
    align-content: center;
    padding-top: 3rem;
    @media(min-width: 975px) {
        h1 {
            align-self: flex-start;
            margin-left: 10rem;
        }
    }
`;


export const StyledFooter = styled.footer`
    display: flex;
    align-items: center;
    background: linear-gradient(#e66465, #9198e5);
    height: 5rem;
    justify-content: center;

`;


export const StyledSection = styled.section`
    display: flex;
    justify-content: space-evenly;
    flex-direction: column;
    min-width: 100%;
    padding: 0 3rem;
    // media query for when screen reaches 975px will lign up in row upright if Flex direction set to column will be horizontal
    @media(min-width: 975px) {
        margin-top: 3rem;
        flex-direction: row;
        min-width: 70vw;
        padding: 0;
    }
`;

export const StyledForm = styled.form`
    display: flex;
    flex-direction: column;
    label { // aligns form
        display: flex;
        margin: .5rem 0;
        justify-content: space-between;
        align-items: center;
    }
    input { // input fields of name, category, image, details
        margin-left: 1rem;
        width: 50%;
        height: 2rem;
        border-radius: 5px;
    } // belongs to Add Store Button
    input[type="submit"] {
        width: 100%;
        margin: 1rem 0;
    }

`;

export const StyledTable = styled.table`
  border-spacing: 0;
  width: 100%;
  z-index: 2; // TODO Style left over when adding modal
  th, td {
        text-align: left;
        padding: 5px;
  }

  }
  // Media Query for when screen hits 975px
  @media(min-width: 975px) {
        width: 60%;
        height: 50%;
    }
`;
