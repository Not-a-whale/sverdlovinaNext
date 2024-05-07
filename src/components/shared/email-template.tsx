import * as React from "react";

interface EmailTemplateProps {
  firstName: string;
  email: string;
  phone: string;
}

export const EmailTemplate: React.FC<Readonly<EmailTemplateProps>> = ({
  firstName,
  email,
  phone,
}) => {
  return (
    <div>
      <h1>Вам надійшла заявка від {firstName}</h1>
      <p>Ім'я: {firstName}</p>
      <p>Email: {email}</p>
      <p>Телефон: {phone}</p>
      Не забудьте відповісти на заявку!
    </div>
  );
};
