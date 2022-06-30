import { NextPage } from "next";
import { Main } from "@layouts/Main";
import { CONTACT_DESCRIPTION, NAME } from "@constants";
import { LayerButton } from "@components/LayerButton";
import { useState } from "react";
import axios from "axios";
import { LoadingSpinner } from "@components/LoadingSpinner";

const Contact: NextPage = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [error, setError] = useState<null | string>(null);
  const [success, setSuccess] = useState<null | string>(null);
  const [isLoading, setIsLoading] = useState(false);

  const reset = () => {
    setName("");
    setEmail("");
    setMessage("");
  };

  const sendMail = async (e: any) => {
    setIsLoading(true);
    e.preventDefault();
    try {
      const res = await axios.post("/api/contact-mail", {
        name,
        email,
        message,
      });
      if (res.status === 200) {
        setError(null);
        setSuccess(res.data.message);
        reset();
      }
      setIsLoading(false);
    } catch (error) {
      setError(error.response.data.message);
      setSuccess(null);
      reset();
      setIsLoading(false);
    }
  };

  return (
    <Main title={`Contact | ${NAME}`} description={CONTACT_DESCRIPTION}>
      <h1 className="mt-12 mb-20 flex w-full justify-center text-3xl font-bold">
        Interested in working together?
      </h1>
      <div className="flex flex-col gap-16 text-2xl">
        <div>
          Name
          <input
            type="text"
            className="peer w-full appearance-none border-0 border-b-2 border-gray-200 bg-transparent px-0 py-2 focus:border-custom-purple focus:outline-none focus:ring-0"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />
        </div>
        <div>
          Email
          <input
            type="email"
            className="peer w-full appearance-none border-0 border-b-2 border-gray-200 bg-transparent px-0 py-2 focus:border-custom-purple focus:outline-none focus:ring-0"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>
        <div>
          Message
          <textarea
            className="h-32 w-full border-0 border-b-2 border-gray-200 bg-transparent px-0 py-2  focus:border-custom-purple focus:outline-none focus:ring-0"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            required
          />
        </div>
      </div>
      <div className="my-8 flex justify-center">
        <p className="text-lg text-green-500">{success}</p>
        <p className="text-lg text-red-500">{error}</p>
      </div>
      <LayerButton
        bgClass="mb-16 w-fit m-auto"
        buttonClass={`py-3 px-6 w-32 ${isLoading ? "cursor-not-allowed" : "cursor-pointer"}`}
        onClick={isLoading ? () => {} : sendMail}
      >
        {isLoading ? <LoadingSpinner /> : <span>Ping</span>}
      </LayerButton>
    </Main>
  );
};

export default Contact;
