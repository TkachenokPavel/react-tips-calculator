import { Form } from "./components/Form/Form";
import { GlobalStyle } from "./GlobalStyles";
import { Wrapper } from "./styles";

export const App = () => {
  return (
    <Wrapper>
      <GlobalStyle />
      <Form />
    </Wrapper>
  );
}
