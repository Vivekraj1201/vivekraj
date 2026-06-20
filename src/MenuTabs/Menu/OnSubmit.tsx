import { message } from "antd";

const OnSubmit = async (values: any) => {
    console.log("Values:", values);

    try {
        const payload = {
            access_key: import.meta.env.VITE_WEB3FORMS_ACCESS_KEY,
            email: values.email,
            firstName: values.firstName,
            lastName: values.lastName,
            subject: values.subject,
            message: values.message,
        };

        const response = await fetch(
            "https://api.web3forms.com/submit",
            {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(payload),
            }
        );
        const result = await response.json();

        if (result.success) {
            message.success("Message sent successfully!");
        } else {
            message.error("Failed to send message.");
        }
    } catch (error) {
        message.error("Something went wrong.");
    }
};

export default OnSubmit;