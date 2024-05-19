import * as React from "react";

interface EmailTemplateProps {
  firstName: string;
  email: string;
  phone?: string;
  message?: string;
}

export const EmailTemplate: React.FC<Readonly<EmailTemplateProps>> = ({
  firstName,
  email,
  phone,
  message,
}) => {
  return (
    <div>
      <h1>Вам надійшла заявка від {firstName}</h1>
      <p>Ім&#39;я: {firstName}</p>
      <p>Email: {email}</p>
      {phone && <p>Телефон: {phone}</p>}
      {message && <p>Повідомлення: {message}</p>}
      Не забудьте відповісти на заявку!
    </div>
  );
};
