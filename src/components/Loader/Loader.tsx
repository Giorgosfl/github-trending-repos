import {
  LoaderContainerStyled,
  LoaderStyled,
  LoaderTextStyled,
} from "./Loader.styled";

const Loader = () => {
  return (
    <LoaderContainerStyled>
      <LoaderTextStyled>Loading</LoaderTextStyled>
      <LoaderStyled>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
      </LoaderStyled>
    </LoaderContainerStyled>
  );
};

export default Loader;
