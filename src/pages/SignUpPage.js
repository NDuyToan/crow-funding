import React from "react";
import LayoutAuthentication from "../layout/LayoutAuthentication";

const SignUpPage = () => {
  return (
    <LayoutAuthentication heading="Sign Up">
      <div className="mx-auto text-center h-11 mb-3">
        <span className="text-center text-text3 font-normal inline-block mr-1">
          Already have an account?
        </span>
        <a href="./sign-in" className="text-primary font-medium underline">
          Sign in
        </a>
      </div>
      <div className="flex justify-center border border-stroke rounded-xl p-3 cursor-pointer mb-5">
        <img src="/google.png" alt="google-login" className="mr-3" />
        <span className="font-semibold text-text2">Sign up with google</span>
      </div>
      <p className="text-center text-text2 font-normal">
        Or sign up with email
      </p>
      <p>
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Accusantium
        quidem molestias repellendus facere possimus ut recusandae magni,
        temporibus eveniet soluta alias maxime corporis ipsam labore! Quam quis
        deleniti recusandae dolores.
      </p>
      <p>
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Accusantium
        quidem molestias repellendus facere possimus ut recusandae magni,
        temporibus eveniet soluta alias maxime corporis ipsam labore! Quam quis
        deleniti recusandae dolores.
      </p>
      <p>
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Accusantium
        quidem molestias repellendus facere possimus ut recusandae magni,
        temporibus eveniet soluta alias maxime corporis ipsam labore! Quam quis
        deleniti recusandae dolores.
      </p>
      <p>
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Accusantium
        quidem molestias repellendus facere possimus ut recusandae magni,
        temporibus eveniet soluta alias maxime corporis ipsam labore! Quam quis
        deleniti recusandae dolores.
      </p>
    </LayoutAuthentication>
  );
};

export default SignUpPage;
