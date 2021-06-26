import Image from "next/image";
import { useForm, SubmitHandler } from "react-hook-form";
import styles from "./styles.module.css";

import { useAppDispatch } from "../../app/hooks";
import { login } from "../userSlice";

interface IFormInput {
  name: string;
  profile: string;
  email: string;
  password: string;
}

const Login = () => {
  const dispatch = useAppDispatch();
  const { register, handleSubmit } = useForm();

  const loginToApp: SubmitHandler<IFormInput> = ({
    email,
    name,
    profile,
    password,
  }) => {
    if (email && name && profile && password) {
      dispatch(login({
        email,
        name,
        profile,
      }));
    }
  };

  return (
    <div className={styles.login}>
      <div className={styles.login__logo}>
        <Image
          src="https://cdn.worldvectorlogo.com/logos/linkedin-logo-2013.svg"
          alt="Picture of the author"
          width="auto"
          height="70px"
          objectFit="contain"
        />
      </div>

      <form>
        <input placeholder="Full name" type="text" {...register("name")} />

        <input
          placeholder="Profile pic url"
          type="text"
          {...register("profile")}
        />

        <input placeholder="Email" type="email" {...register("email")} />

        <input
          placeholder="Password"
          type="password"
          {...register("password")}
        />

        <button onClick={handleSubmit(loginToApp)}>Sign In</button>
      </form>

      <p>
        Not a member ?
        <span className={styles.login__register}>
          Register Now
        </span>
      </p>
    </div>
  );
};

export default Login;
