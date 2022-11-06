import { Container } from '@mui/material';
import { styled } from '@mui/system';

const StyledContainer = styled(Container)(({ theme }) => {
  console.log({ theme: theme.palette.app.secondary });
  return {
    backgroundColor: theme.palette.app.main,
    height: '100vh',
  };
});

export default function PublicLayout({ children, ...rest }) {
  return (
    <StyledContainer maxWidth={false} disableGutters {...rest}>
      {children}
    </StyledContainer>
  );
}
