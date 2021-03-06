import { useForm } from "react-hook-form";
import { InputFields } from "./InputFields";
import { postData } from "../../middleware/callApi";

const Form = ({ githubName }) => {
  const { register, handleSubmit, errors, reset } = useForm();

  const onSubmit = (data) => {
    data.githubName = githubName;

    postData(data);
    reset();
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="form">
      {errors.name ? (
        <p className="form-item form-validation">{errors.name.message}</p>
      ) : null}
      {errors.lastName ? (
        <p className="form-item form-validation">{errors.lastName.message}</p>
      ) : null}
      {errors.email ? (
        <p className="form-item form-validation">{errors.email.message}</p>
      ) : null}

      {InputFields.map((item) => (
        <input
          key={item.name}
          type="text"
          name={item.name}
          placeholder={item.placeholder}
          ref={register(item.ref)}
          className="form-item"
        />
      ))}

      <button type="submit" className="btn btn-form">
        Submit
      </button>
    </form>
  );
};

export default Form;
