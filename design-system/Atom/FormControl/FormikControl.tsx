import { Input, InputProps } from './Input';
// import Textarea from './Textarea';
import { Select, SelectProps } from './Select';
// import RadioButtons from './RadioButtons';
import { CheckboxGroup } from './CheckboxGroup';
import { InputHTMLAttributes } from 'react';
// import DatePicker from './DatePicker';
interface FormikControlProps {
  control: 'input' | 'select' | 'checkbox';
  props: any;
}

export const FormikControl = ({ control, ...props }: FormikControlProps) => {
  switch (control) {
    case 'input':
      return <Input {...props} />;
    // case 'textarea':
    //   return <Textarea {...rest} />;
    case 'select':
      return <Select {...props} />;
    // case 'radio':
    //   return <RadioButtons {...rest} />;
    case 'checkbox':
      return <CheckboxGroup {...props} />;
    // case 'date':
    //   return <DatePicker {...rest} />;
    default:
      return null;
  }
};
