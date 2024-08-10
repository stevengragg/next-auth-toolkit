import { CardWrapper } from "@/components/auth/card-wrapper";

type Props = {};

const SignInPage = (props: Props) => {
  return (
    <CardWrapper
      headerLabel="Authenticate"
      subLabel="Sign-in to your account"
      backButtonLabel="Don't have an account?"
      backButtonHref="/auth/register"
      showSocial
    >
      <p>Login Form</p>
    </CardWrapper>
  );
};

export default SignInPage;
