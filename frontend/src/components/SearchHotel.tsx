import styled from "styled-components";
import { Search } from "lucide-react";

const SearchContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  background: #e8ebcf;
  width: 950px;
  height: 94px;
  max-width: 100%;
  margin: 5px auto;
  padding: 10px;
  box-shadow: 1px 1px 5px rgba(0, 0, 0, 0.1);
  border-radius: 30px;
`;

const SearchItem = styled.div`
  display: flex;
  flex: 1;
  flex-direction: column;
  padding: 0 10px;
  border-right: 1px solid #ccc;

  &:last-child {
    border-right: none;
  }
`;

const Label = styled.span`
  font-weight: 600;
  color: #4a4a4a;
`;

const Input = styled.input`
  background: transparent;
  color: #606060;
  border: none;
  outline: none;
  padding: 5px;
`;

const SearchButton = styled.button`
  background: white;
  padding: 12px;
  border-radius: 50%;
  box-shadow: 1px 1px 1px rgba(0, 0, 0, 0.1);
  cursor: pointer;
  transition: background 0.2s ease-in-out;

  &:hover {
    background: #f0f0f0;
  }
`;

const SearchHotel = () => {
  return (
    <SearchContainer>
      <SearchItem>
        <Label>Onde</Label>
        <Input type="text" placeholder="Buscar destinos" />
      </SearchItem>

      <SearchItem>
        <Label>Check-in</Label>
        <Input type="date" />
      </SearchItem>

      <SearchItem>
        <Label>Check-out</Label>
        <Input type="date" />
      </SearchItem>

      <SearchItem>
        <Label>Quem</Label>
        <Input type="number" placeholder="Quantidade de Hóspedes" min="1" />
      </SearchItem>

      <SearchButton>
        <Search color="#606060" />
      </SearchButton>
    </SearchContainer>
  );
};

export default SearchHotel;
