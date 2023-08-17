import { InputHTMLAttributes } from 'react';
import { Field, ErrorMessage } from 'formik';
import classNames from 'classnames';

export interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  name: string;
  wrapperClass?: string;
  labelClass?: string;
  inputClass?: string;
}

export const Input = ({ label, name, ...props }: InputProps) => {
  const { wrapperClass, labelClass, inputClass, ...rest } = props;

  return (
    <div className={wrapperClass || 'form-control'}>
      {label && (
        <label htmlFor={name} className={labelClass || 'form-label'}>
          {label}
        </label>
      )}

      <Field
        as="input"
        className={inputClass || 'form-input'}
        id={name}
        name={name}
        {...rest}
      />

      <ErrorMessage
        className="text-sm font-light text-color-red outline-red-500"
        component="span"
        name={name}
      />
    </div>
  );
};
