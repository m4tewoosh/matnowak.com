import { useForm, Controller } from "react-hook-form";
import emailjs from "emailjs-com";
import MailOutlineIcon from "@material-ui/icons/MailOutline";
import * as S from "./Contact.styles";

interface IFormInput {
  email: string;
  name: string;
  text: string;
}

const Contact: React.FC = () => {
  const { control, handleSubmit, reset } = useForm<IFormInput>();

  const onSubmit = (data: any, e: any) => {
    emailjs
      .send(
        `${process.env.REACT_APP_EMAILJS_SERVICE_ID}`,
        `${process.env.REACT_APP_EMAILJS_TEMPLATE}`,
        data,
        `${process.env.REACT_APP_EMAILJS_USER_ID}`
      )
      .then(
        (result) => {
          e.target.reset();
        },
        (error) => {
          console.log(error.text);
        }
      );
    reset({
      email: "",
      name: "",
      text: "",
    });
  };

  return (
    <S.StyledContact id="contact">
      <S.Header>Contact</S.Header>
      <S.Form onSubmit={handleSubmit(onSubmit)}>
        <Controller
          name="email"
          control={control}
          defaultValue=""
          rules={{
            required: "Email missing",
            pattern: {
              value:
                // eslint-disable-next-line
                /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
              message: "Incorrect email",
            },
          }}
          render={({ field: { onChange, value }, fieldState: { error } }) => (
            <>
              <S.StyledTextField
                label="Email"
                name="email"
                variant="outlined"
                size="medium"
                value={value}
                onChange={onChange}
                error={!!error}
                helperText={error ? error.message : null}
              />
            </>
          )}
        />

        <Controller
          name="name"
          control={control}
          defaultValue=""
          rules={{
            required: "Name missing",
          }}
          render={({ field: { onChange, value }, fieldState: { error } }) => (
            <>
              <S.StyledTextField
                label="Name"
                name="name"
                variant="outlined"
                value={value}
                onChange={onChange}
                error={!!error}
                helperText={error ? error.message : null}
              />
            </>
          )}
        />

        <Controller
          name="text"
          control={control}
          defaultValue=""
          rules={{
            required: "Text missing",
          }}
          render={({ field: { onChange, value }, fieldState: { error } }) => (
            <>
              <S.StyledTextField
                label="Text"
                name="text"
                variant="outlined"
                value={value}
                onChange={onChange}
                multiline
                rows={20}
                error={!!error}
                helperText={error ? error.message : null}
              />
            </>
          )}
        />
        <S.SubmitButton type="submit">
          <MailOutlineIcon />
        </S.SubmitButton>
      </S.Form>
      <S.StyledBlob />
    </S.StyledContact>
  );
};

export default Contact;
