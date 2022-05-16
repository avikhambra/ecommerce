import { Announcement, Remove,Add } from "@material-ui/icons";
import styled from "styled-components";
import Footer from "../components/Footer";
import Navebar from "../components/Navbar";
import Newsletter from "../components/Newsletter";

const Container = styled.div``;

const Wrapper = styled.div`
    padding: 50px;
    display: flex;
`;

const ImgContainer = styled.div`
    flex: 1;
`;

const Image = styled.img`
    width: 100%;
    height: 90vh;
    object-fit: cover;
`;

const InfoContainer = styled.div`
    flex: 1;
    padding: 0px 50px;
`;


const Title = styled.h1`
   font-weight: 200;
`;

const Desc = styled.p`
   margin: 20px 0px;
`;

const Price = styled.span`
   font-weight: 100;
   font-size: 40px;
`;

const FilterContainer = styled.div`
   width: 50%;
   margin: 30px 0px;
   display: flex;
   justify-content: space-between;
   align-items:center;
`;

const Filter = styled.div`
   display: flex;
   justify-content: center;
   align-items:center;
`;

const FilterTitle = styled.div`
   font-size: 20px;
   font-weight: 200;
`;

const FilterColor = styled.div`
   width: 20px;
   height: 20px;
   border-radius: 50%;
   background-color: ${prpos=>{return prpos.color}} !important;
   margin: 0px 5px;
   cursor: pointer; 
`;

const FilterSize = styled.select`
   margin-left: 10px;
   padding: 5px;
`;


const FilterSizeOption = styled.option``;

const AddContainer = styled.div`
   width: 15%;
   padding:10px;
   display: flex;
   align-items: center; 
   justify-content:center;
   border: 2px solid green;
`;

const AmountContainer = styled.div`
    display: flex;
    align-items: center;
    font-weight: 700;  
`;

const Amount = styled.div`
    width: 30px;
    height: 30px;
    border-radius: 10px;
    border: 1px solid teal;
    display: flex;
    align-items: center;
    justify-content: center;
    margin : 0px 5px;
`;


const Button = styled.button`
   padding: 15px;
   border: 1px solid teal;
   background-color: white;
   cursor: pointer;

   &:hover{
       background-color: #f8f4f4;
   }
`;



const Product = () => {
  return (
    <Container>
        <Navebar/>

        <Announcement/>
        
        <Wrapper>

        <ImgContainer>
            <Image src="https://thumbs.dreamstime.com/b/fashion-shopping-girl-portrait-beauty-woman-shopping-bags-shopping-mall-shopper-sales-shopping-center-fashion-shopping-180239681.jpg" />
        </ImgContainer>
     
        <InfoContainer>
            <Title>Denim Jumpsuit</Title>
            <Desc>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dolores debitis corporis perspiciatis ipsam, eligendi praesentium? 
                Aut minus, deleniti rerum totam illo iusto ullam. Rem ratione aut, soluta libero debitis facilis consequuntur officiis 
                ipsum saepe amet,veritatis magnam maiores, ad vitae!
            </Desc>
            <Price>$ 20</Price> 

            <FilterContainer>
                <Filter>
                    <FilterTitle>Color</FilterTitle>
                    <FilterColor color="black"/>
                    <FilterColor color="darkblue"/>
                    <FilterColor color="gray"/>
                </Filter>

                <Filter>
                    <FilterTitle>Size</FilterTitle>
                    <FilterSize>
                       <FilterSizeOption>XS</FilterSizeOption>
                       <FilterSizeOption>S</FilterSizeOption>
                       <FilterSizeOption>M</FilterSizeOption>
                       <FilterSizeOption>L</FilterSizeOption>
                       <FilterSizeOption>XL</FilterSizeOption>
                       
                    </FilterSize>

                </Filter>

            </FilterContainer>
            
             <AddContainer>

                <Remove/>
                <Amount>1</Amount>
                <Add/>
            </AddContainer> 

        </InfoContainer>
        </Wrapper>
        <Newsletter/>
        <Footer/>
    </Container>
  )
}

export default Product