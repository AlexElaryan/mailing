import { useNavigate } from "react-router-dom";
import { Button } from "../ui/button/Button";
import { Container } from "../ui/wrappers/container/Container";
import "./Header.scss";

interface TProps {
  isCreateMailingPage?: boolean
}

export const Header = ({ isCreateMailingPage }: TProps) => {
  const navigate = useNavigate()

  const handleClick = () => {
    if(isCreateMailingPage){
      navigate('/')
    }else{
      navigate('/create-mailing')
    }
  }

  return (
    <header className="header">
      <Container>
        <div className="header__wrapper">
          <h2 className="header__logo">Mailing</h2>
          {isCreateMailingPage 
            ? <Button light onClick={handleClick}>Все рассылки</Button>
            : <Button light withSvg onClick={handleClick}>Создать рассылку</Button>
          }
        </div>
      </Container>
    </header>
  );
};
