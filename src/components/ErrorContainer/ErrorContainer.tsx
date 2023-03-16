import { ErrorContainerStyled } from "./ErrorContainer.style";

export interface ErrorContainerProps {
  error: Error;
}

const ErrorContainer = ({ error }: ErrorContainerProps) => {
  return (
    <ErrorContainerStyled data-testid="errorContainer">
      {error.message}
    </ErrorContainerStyled>
  );
};

export default ErrorContainer;
