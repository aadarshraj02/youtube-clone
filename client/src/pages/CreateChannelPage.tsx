import { ErrorMessage, Field, Form, Formik } from "formik";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import * as Yup from "yup";

const CreateChannelPage = (): JSX.Element => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const initialValues = {
    channelName: "",
    description: "",
  };

  const validationSchema = Yup.object({
    channelName: Yup.string().required("Channel name is required"),
    description: Yup.string().max(200, "Description is too long"),
  });

  return (
    <div>
      <Formik
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={(values) => {
          console.log(values);
        }}
      >
        <Form className=" h-[85vh] w-full flex flex-col items-center justify-center px-10">
          <h2 className="text-zinc-700 uppercase text-2xl font-semibold mb-2">
            Create Your Channel
          </h2>
          <p className="mb-5 text-sm text-zinc-400">
            Enter all the required fields to Create your own channel and upload
            Videos.
          </p>
          <div className="flex flex-col w-[80vw] sm:w-[55vw] md:w-[45vw] lg:w-[35vw]">
            <label htmlFor="channelName" className="text-zinc-600 mb-2 text-xl">
              Enter your Channel Name
            </label>
            <Field
              type="text"
              id="channelName"
              name="channelName"
              placeholder="Enter your Channel name"
              className="outline-none border-b border-zinc-300 px-2 py-1 mb-3"
            />
            <ErrorMessage
              name="channelName"
              component="div"
              className="text-red-500"
            />
          </div>
          <div className="flex flex-col w-[80vw] sm:w-[55vw] md:w-[45vw] lg:w-[35vw]">
            <label htmlFor="description" className="text-zinc-600 mb-2 text-xl">
              Enter your description
            </label>
            <Field
              type="text"
              id="description"
              name="description"
              placeholder="Enter your description"
              className="outline-none border-b border-zinc-300 px-2 py-1 mb-3"
            />
            <ErrorMessage
              name="description"
              component="div"
              className="text-red-500"
            />
          </div>
          <button
            type="submit"
            className="bg-black text-white w-[80vw] sm:w-[55vw] md:w-[45vw] lg:w-[35vw] mt-5 rounded-lg text-lg hover:opacity-80 transition-all ease-linear duration-300"
          >
            create channel
          </button>
        </Form>
      </Formik>
    </div>
  );
};

export default CreateChannelPage;
