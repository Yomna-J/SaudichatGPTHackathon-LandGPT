import * as yup from "yup";

export const formSchema = yup.object().shape({
    title: yup
        .string()
        .min(2, "Title must be at least 2 characters long")
        .required("Required"),
    description: yup
        .string()
        .min(2, "Description must be at least 2 characters long")
        .required("Required"),
    slogan: yup.string().min(2, "Description must be at least 2 characters long"),
    unfairAdv: yup.string().min(2, "Unfair Advantage must be at least 2 characters long"),
    email: yup.string().email("Please enter a valid email"),
    about: yup.string().min(2, "About must be at least 2 characters long"),
    location: yup.string().min(2, "Location must be at least 2 characters long"),
    phone: yup.string().min(2, "Description must be at least 2 characters long"),
    linkedin: yup.string().min(2, "Description must be at least 2 characters long"),
    instagram: yup.string().min(2, "Description must be at least 2 characters long"),
    twitter: yup.string().min(2, "Description must be at least 2 characters long"),
    logo: yup.mixed().nullable().notRequired(),
    productPic: yup.mixed().nullable().notRequired(),
});